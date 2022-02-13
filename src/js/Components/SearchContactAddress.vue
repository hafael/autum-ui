<template>
    <div class="flex justify-between border border-gray-300 rounded w-100 dark:border-gray-600" :class="class">
        <div class="search-input flex-1">
            <jet-input class="rounded-r-none border-0 w-full" type="text" @input="onInput" @blur="onBlur" v-model="modelValue" :disabled="disabled" :readonly="readonly" ref="input" />
        </div>
        <jet-secondary-button class="rounded-none border-t-0 border-b-0" @click="turnCameraOn">
            <CameraIcon class="h-5 w-5" />
        </jet-secondary-button>
        <jet-secondary-button class="rounded-l-none border-0" @click="openContactsModal" v-if="!hasContactSelected">
            <UserAddIcon class="h-5 w-5" />
        </jet-secondary-button>
        <jet-secondary-button class="rounded-l-none border-0" @click="discardContact" v-else>
            <UserRemoveIcon class="h-5 w-5" />
        </jet-secondary-button>
    </div>

    <!-- Search Contacts Modal -->
    <jet-dialog-modal :show="showingContactsModal" @close="showingContactsModal = false">
        <template #title>
            Selecionar contato
        </template>

        <template #content>
            <div class="mb-4">
                <jet-input class="w-full" type="text" v-model="query" placeholder="Buscar usuário ou contato..." ref="searchQuery" @keyup="throttleRequest(doSearch)" />
            </div>
            <div class="flex items-stretch mb-4" v-if="results.length">
                <button @click="filterBy('all')" 
                    class=" flex items-center py-1 px-2 text-xs font-semibold border rounded-md rounded-r-none text-gray-600 active:bg-gray-100 hover:text-gray-500 hover:bg-gray-150 focus:outline-none focus:bg-gray-150 focus:text-indigo-500 dark:text-gray-400 dark:border-gray-500 transition"
                    :class="{'text-indigo-500': currentFilter == 'all'}">
                    TODOS <span class="ml-1 text-xs rounded-full bg-gray-600 text-white px-1">{{ allResultsCount }}</span>
                </button>
                <button @click="filterBy('users')" 
                    class="flex items-center py-1 px-2 text-xs font-semibold border border-l-0 text-gray-600 active:bg-gray-100 hover:text-gray-500 hover:bg-gray-150 focus:outline-none focus:bg-gray-150 focus:text-indigo-500 dark:text-gray-400 dark:border-gray-500 transition"
                    :class="{'text-indigo-500': currentFilter == 'users'}">
                    USUÁRIOS <span class="ml-1 text-xs rounded-full bg-gray-600 text-white px-1">{{ userResultsCount }}</span>
                </button>
                <button @click="filterBy('contacts')" 
                    class="flex items-center py-1 px-2 text-xs font-semibold border border-l-0 rounded-md rounded-l-none text-gray-600 active:bg-gray-100 hover:text-gray-500 hover:bg-gray-150 focus:outline-none focus:bg-gray-150 focus:text-indigo-500 dark:text-gray-400 dark:border-gray-500 transition"
                    :class="{'text-indigo-500': currentFilter == 'contacts'}">
                    CONTATOS <span class="ml-1 text-xs rounded-full bg-gray-600 text-white px-1">{{ contactResultsCount }}</span>
                </button>
            </div>
            <div>
                <p class="text-gray-600" v-if="!filteredResults.length">Nenhum resultado encontrado.</p>
                <div class="space-y-3 divide-y divide-gray-400">
                    <div v-for="(item, k) in filteredResults" :key="k" class="w-100">
                        <div class="flex items-center justify-between pt-2 cursor-pointer" @click="selectContact(item)">
                            <div class="flex flex-1">
                                <img class="h-8 w-8 rounded-full object-cover mr-2" :src="item.model.avatar" :alt="item.model.fullname" />
                                <div class="flex-1 w-full">
                                    <h4 class="font-semibold text-md">{{ item.title }}</h4>
                                    <p class="text-base text-gray-600" v-if="item.type=='users'">{{ item.model.fullname }}</p>
                                    <p class="text-sm text-gray-400">{{ $filters.limitTo(item.model.address, 20) }}</p>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <!-- Manage Contact Info -->
                                <div class="p-2">
                                    <UserAddIcon class="h-5 w-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <template #footer>
            <jet-secondary-button @click="cancel">
                Cancelar
            </jet-secondary-button>
        </template>
    </jet-dialog-modal>

    <div class="scanner" 
        :class="{'fullscreen': scanning }" 
        v-show="scanning"
        ref="scanner" 
        @fullscreenchange="onFullscreenChange">
        <qrcode-stream v-if="scanning" :camera="camera" @decode="onDecode" @init="onInit">
            <jet-secondary-button @click="scanning = !scanning" class="fullscreen-button">
                <XCircleIcon class="h-5 w-5" />
            </jet-secondary-button>
            <div class="scanner-messages text-white text-base">
                <div v-if="validationSuccess" class="validation-success">
                    Endereço válido
                </div>

                <div v-if="validationFailure" class="validation-failure">
                    Endereço inválido
                </div>

                <div v-if="validationPending" class="validation-pending">
                    Validando...
                </div>
            </div>
        </qrcode-stream>
    </div>
</template>

<style lang="css">
    
    .scanner {
        background-color: rgba(0, 0, 0, 0.8);
        position: fixed;
        z-index: 0;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }
    .scanner.fullscreen {
        z-index: 1000;
        width: 100%;
        height: 100%;
        display: block;
    }
    .fullscreen-button {
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 1rem;
    }
</style>

<script>
    import { QrcodeStream } from 'vue-qrcode-reader'
    import JetInput from '@/Jetstream/Input'
    import JetSecondaryButton from '@/Jetstream/SecondaryButton'
    import JetDialogModal from '@/Jetstream/DialogModal'
    import { SearchCircleIcon, UserAddIcon, UserRemoveIcon, CameraIcon, XCircleIcon } from '@heroicons/vue/outline'

    const detectWebcam = (callback) => {
        let md = navigator.mediaDevices;
        if (!md || !md.enumerateDevices) return callback(false);
        md.enumerateDevices().then(devices => {
            callback(devices.some(device => 'videoinput' === device.kind));
        })
    };

    export default {
        name: 'SearchContactAddress',
        components: {
           JetInput,
           JetSecondaryButton,
           SearchCircleIcon,
           UserAddIcon,
           UserRemoveIcon,
           CameraIcon,
           XCircleIcon,
           JetDialogModal,
           QrcodeStream
        },
        data() {
            return {
                showingContactsModal: false,
                result: '',
                query: '',
                results: [],
                selected: {},
                scanning: false,
                isValid: undefined,
                camera: 'auto',
                currentFilter: 'all'
            }
        },
        props: {
            readonly: {
                type: Boolean,
                default: () => { return false }
            },
            disabled: {
                type: Boolean,
                default: () => { return false }
            },
            class: {},
            modelValue: {},
        },

        computed: {
            hasContactSelected() {
                return !_.isEmpty(this.selected);
            },
            validationPending () {
                return this.isValid === undefined
                    && this.camera === 'off'
            },

            validationSuccess () {
                return this.isValid === true
            },

            validationFailure () {
                return this.isValid === false
            },

            filteredResults() {
                if(this.currentFilter == 'contacts') {
                    return this.contacts;
                }else if(this.currentFilter == 'users') {
                    return this.users;
                }
                return this.results;
            },

            contacts() {
                return _.filter(this.results, (data) => {
                    return data.type === 'contacts';
                });
            },

            users() {
                return _.filter(this.results, (data) => {
                    return data.type === 'users';
                });
            },

            allResultsCount() {
                return _.size(this.results);
            },

            userResultsCount() {
                return _.size(this.users);
            },

            contactResultsCount() {
                return _.size(this.contacts);
            }
        },

        watch: {
            scanning(enterFullscreen) {
                if (enterFullscreen) {
                    this.requestFullscreen()
                } else {
                    this.exitFullscreen()
                }
            },
            
        },

        emits: ['update:modelValue', 'selected', 'input', 'blur'],

        mounted() {
            this.searchContacts();

            detectWebcam(function(hasWebcam) {
                console.log('Webcam: ' + (hasWebcam ? 'yes' : 'no'));
            })
        },

        methods: {

            filterBy(filter) {
                this.currentFilter = filter;
            },
            
            onInput(e) {
                this.$emit('input', e);
                if(_.isEmpty(e.target.value)) {
                    this.discardContact();
                }
            },
            onBlur(e) {
                this.$emit('blur', e);
            },

            focus() {
                this.$refs.searchQuery.focus();
            },
            openContactsModal() {
                this.showingContactsModal = true;
            },

            closeModal() {
                this.showingContactsModal = false;
                this.searchContacts(null);
            },

            discardContact() {
                this.selected = {};
                this.$emit('selected', null);
                this.searchContacts(null);
            },

            cancel() {
                this.query = '';
                this.results = [];
                this.closeModal();
            },

            throttleRequest: _.debounce((callback, event) => {
                callback(event);
            }, 700),

            doSearch() {
                if(String(this.query).length >= 3) {
                    this.searchContacts(this.query);
                }else if(String(this.query).length && String(this.query).length < 3){
                    this.results = [];
                }else {
                    this.searchContacts(null);
                }
            },

            searchContacts(term) {
                let self = this;
                self.loading = true;

                axios.get(route('api.search'), {
                    params: {
                        q: term,
                        limit: 5
                    }
                }).then((response) => {
                    //self.contacts = response.data.data;
                    self.results = response.data;
                    self.loading = false;
                })
                .catch((error) => {
                    console.error(error);
                    self.loading = false;
                });
            },

            selectContact(contact) {
                this.$emit('selected', {
                    type: contact.type,
                    address: contact.model.address,
                    name: contact.model.name,
                    lastname: contact.model.lastname,
                    fullname: contact.model.fullname,
                    avatar: contact.model.avatar,
                });
                this.selected = Object.assign({}, contact);
                this.cancel();
            },

            onFullscreenChange(event) {
                this.scanning = document.fullscreenElement !== null
            },

            requestFullscreen() {
                const elem = this.$refs.scanner
                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                } else if (elem.mozRequestFullScreen) { /* Firefox */
                    elem.mozRequestFullScreen();
                } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                    elem.webkitRequestFullscreen();
                } else if (elem.msRequestFullscreen) { /* IE/Edge */
                    elem.msRequestFullscreen();
                }
                document.body.className += 'scroll-disabled';
            },
            exitFullscreen() {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) { /* Firefox */
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) { /* IE/Edge */
                    document.msExitFullscreen();
                }

                document.body.className.replace('scroll-disabled', '');
            },

            onInit(promise) {
                promise
                    .catch((error) => {
                        console.error(error)
                        //this.result = 'algorand://55EBEJYCVF3BZD3Q637JQCI3KD36DYQNAFBRVSWCMXLTMGAAOQ3HDL6GTU?amount=100&asset=ABRL&note=peazote'
                        //this.parseResult()
                    })
                    .then(this.resetValidationState)
            },

            resetValidationState() {
                this.isValid = undefined
            },

            async onDecode(content) {

                this.result = content
                
                this.turnCameraOff()

                // pretend it's taking really long
                await this.timeout(3000)
                
                this.isValid = content.startsWith('algorand://')

                // some more delay, so users have time to read the message
                await this.timeout(2000)

                if(this.isValid) {
                    this.scanning = false;
                    this.parseResult();
                }else {
                    this.turnCameraOn()
                }
            },

            parseResult() {
                //this.modelValue = this.result.substr(11, 43);

                let url = new URL(this.result);

                let data = {
                    amount: url.searchParams.get('amount'),
                    asset: url.searchParams.get('asset'),
                    note: url.searchParams.get('note'),
                    wallet_address: url.pathname.substr(2),
                    protocol: url.protocol.match(/[a-zA-Z]+/g)[0],
                };

                console.log(data);

                this.$emit('selected', data);
            },

            turnCameraOn() {
                this.camera = 'auto'
                this.scanning = true;
            },

            turnCameraOff() {
                this.camera = 'off'
            },

            timeout(ms) {
                return new Promise(resolve => {
                    window.setTimeout(resolve, ms)
                })
            }
        }
    }
</script>