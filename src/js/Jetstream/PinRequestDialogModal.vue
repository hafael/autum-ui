<template>
    <!-- Payment Error Modal -->
    <jet-dialog-modal 
        :show="show" 
        @close="cancel"
        :closeable="true">
        <template #title>
            Código PIN
        </template>

        <template #content>
            <slot>
                <h3 class="text-lg font-semibold mb-3">Autorize esta ação com o código PIN</h3>
            </slot>
            
            <!-- <jet-input-pin v-model="pin_number" @input="$emit('input', pin_number)" /> -->

            <form
                id="enter-pin"
                class="flex flex-row flex-wrap justify-center space-x-2"
                @submit.prevent="handleSubmit()"
                @paste.prevent="handlePaste($event)"
                ref="pinFormRef"
                autocomplete="off">
                <template v-for="(input, index) in Array.from({ length: length })" :key="index">
                    <input
                        @input.prevent="handleInput($event.target)"
                        @keydown.backspace="$event.target.value || focusPreviousRef(index)"
                        @keydown.delete="$event.target.value || focusPreviousRef(index)"
                        :aria-label="`PIN ${index + 1}`"
                        :ref="'pin-'+index"
                        :pin-position="index"
                        class="w-10 font-lg font-bold mb-4 rounded border border-gray-200 p-2 text-center appearance-none dark:text-gray-300 dark:bg-gray-800 dark:border-gray-600"
                        type="password"
                        inputmode="tel"
                        maxlength="1"
                        autocomplete="off"
                        autocorrect="off"
                        spellcheck="false"
                        required>
                </template>
            </form>

            <p class="text-red-500 font-semibold m-3" v-show="invalid">
                O PIN informado é inválido.
            </p>
            
        </template>

        <template #footer>
            <jet-secondary-button class="mr-2" @click="cancel" :disabled="loading">
                {{ closeText }}
            </jet-secondary-button>
            <jet-button @click="authorize" :disabled="loading || !valueIsValid">
                <span v-if="!loading">{{ authorizeText }}</span>
                <span v-else>Aguarde...</span>
            </jet-button>
        </template>
    </jet-dialog-modal>
</template>

<script>
    import JetDialogModal from './DialogModal'
    import JetSecondaryButton from './SecondaryButton'  
    import JetButton from './Button'
    import JetInputPin from './InputPin'

    export default {

        props: {
            heading: String,
            response: Object,
            show: {
                default: false
            },
            closeText: {
                type: String,
                default: 'Cancelar'
            },
            authorizeText: {
                type: String,
                default: 'Autorizar'
            }
        },
        emits: ['close', 'authorized', 'rejected', 'input', 'clear'],

        components: {
            JetDialogModal,
            JetSecondaryButton,
            JetButton,
            JetInputPin
        },

        data() {
            return {
                loading: false,
                length: 6,
                value: '',
                validation: /\d/g,
                invalid: false
            }
        },

        watch: {
            show(flag) {
                if(flag) {
                    this.$nextTick(() => {
                        this.$refs['pin-0'].focus();
                    });
                }
            }
        },

        computed: {
            valueIsValid() {
                return this.valueLength === this.length;
            },

            valueLength() {
                return _.size(_.trim(String(this.value)));
            }
        },

        methods: {
            cancel() {
                this.clear();
                this.$emit('close');
            },

            authorize() {

                let self = this;
                self.loading = true;
                self.invalid = false;
                axios.post(route('api.account.check-pin'), {
                    pin: self.value
                }).then((response) => {
                    self.loading = false;
                    self.$emit('authorized', self.value);
                    self.cancel();
                }).catch((error) => {
                    self.loading = false;
                    console.error('error', error);
                    if(error.response.status === 403) {
                        self.invalid = true;
                        self.$emit('rejected', self.value);
                        self.clear();
                    }
                });
            },

            clear() {
                Array.from({ length: this.length }, (empty, index) => {
                    this.$refs['pin-'+index].value = '';
                });
                this.updateValue();
                this.$emit('clear');
            },

            updateValue() {
                this.value = Array.from({ length: this.length }, (empty, index) => {
                    return this.$refs['pin-'+index].value || ' '
                }).join('')
            },
            handleInput(pin) {
                const value = pin.value.match(this.validation)
                // if the input doesn't match our needs, don't do anything
                if (!value || !value.length) {
                    pin.value = ''
                    this.focusPreviousRef(pin.getAttribute('pin-position'))
                    return
                }
                
                // TODO: We could check here if the value.length = length then check against a database

                pin.value = this.$filters.onlyNumbers(value)
                this.updateValue()
                this.focusNextRef(pin.getAttribute('pin-position'))

                if(this.invalid) {
                    this.invalid = false;
                }
            },
            handlePaste(event) {
                // TODO: this validation might not be what your app requires (this one is numbers only)
                const text = event.clipboardData.getData('Text').match(this.validation)
                if (!text || !text.length) return
                // Get the starting input
                const pastedFrom = parseInt(event.target.getAttribute('pin-position'), 10)
                // This filters only numbers, then slices based on how many inputs remain
                const remainingInputs = this.length - pastedFrom
                const value = text.slice(0, remainingInputs).join('')
                // Figure out what inputs we need to update
                const inputsToUpdate = Array.from(Array(remainingInputs), (empty, index) => {
                    return index + pastedFrom
                }).splice(0, value.length)
                // Update the values
                inputsToUpdate.forEach((ref, i) => {
                    this.$refs['pin-'+ref].value = value[i]
                })
                // Focus the last input we updated
                this.focusNextRef(inputsToUpdate.pop())
                this.updateValue()
            },
            focusNextRef(current) {
                const next = parseInt(current, 10) + 1
                if (!this.$refs['pin-'+next]) {
                    // If next doesn't exist, focus the last. A real app might auto check the database or focus a button
                    this.$refs['pin-'+ (parseInt(this.length, 10) - 1)].focus()
                    this.$refs['pin-'+ (parseInt(this.length, 10) - 1)].select()
                    return
                }
                this.$refs['pin-'+next].focus()
                this.$refs['pin-'+next].select()
            },
            focusPreviousRef(current) {
                const previous = parseInt(current, 10) - 1
                this.$refs['pin-'+previous] && this.$refs['pin-'+previous].focus()
                this.$refs['pin-'+previous] && this.$refs['pin-'+previous].select()
            },

        }

        
    }
</script>
