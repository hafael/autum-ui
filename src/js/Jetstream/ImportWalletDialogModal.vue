<template>
    <!-- Payment Error Modal -->
    <jet-dialog-modal 
        :show="show" 
        @close="cancel"
        :closeable="true">
        <template #title>
            Importar Carteira
        </template>

        <template #content>

            <!-- Wallet Mnemonic -->
            <div class="col-span-6 sm:col-span-4">
                <jet-label for="seed" value="25 palavras de recuperação" />
                <jet-textarea id="seed" class="mt-1 block w-full" placeholder="Separadas por um espaço em branco" v-model="importWalletForm.seed" @keyup="wordLimiter" />
                <jet-input-error :message="importWalletForm.errors.seed" class="mt-2" />
                <div class="text-gray-700 text-xs mt-1" :class="{'text-green-600': wordsInSentence === 25, 'text-red-600': wordsInSentence !== 25}"><span class="font-bold">{{ wordsInSentence }}</span> de 25 palavras.</div>
            </div>
            
        </template>

        <template #footer>
            <jet-secondary-button class="mr-2" @click="cancel" >
                {{ closeText }}
            </jet-secondary-button>
            <jet-button @click="showingPinDialog = true">
                {{ importText }}
            </jet-button>
        </template>
    </jet-dialog-modal>

    <jet-pin-request-dialog-modal 
        :show="showingPinDialog"
        @authorized="doImport"
        @close="showingPinDialog=false" />
    
    <jet-http-error-dialog-modal 
        :show="hasError"
        :response="errorResponse"
        @close="hasError = false"
        heading="Houve um problema ao importar a carteira" />

</template>

<script>
    import JetDialogModal from './DialogModal'
    import JetSecondaryButton from './SecondaryButton'
    import JetButton from './Button'
    import JetLabel from './Label'
    import JetTextarea from './Textarea'
    import JetInputError from './InputError'
    import JetHttpErrorDialogModal from '@/Jetstream/HttpErrorDialogModal'
    import JetPinRequestDialogModal from '@/Jetstream/PinRequestDialogModal'

    export default {

        props: {
            wallet: {},
            show: {
                default: false
            },
            closeText: {
                type: String,
                default: 'Cancelar'
            },
            importText: {
                type: String,
                default: 'Importar'
            }
        },
        emits: ['wallet', 'close', 'imported'],

        components: {
            JetDialogModal,
            JetSecondaryButton,
            JetButton,
            JetLabel,
            JetTextarea,
            JetInputError,
            JetHttpErrorDialogModal,
            JetPinRequestDialogModal
        },

        computed: {
            wordsInSentence() {
                return _.isEmpty(this.importWalletForm.seed) ? 0 : String(this.importWalletForm.seed).split(" ").length;
            },
            seedWords() {
                return _.isEmpty(this.importWalletForm.seed) ? [] : String(this.importWalletForm.seed).split(" ");
            },
            walletSecretKey() {
                let key = String(this.wallet.address).substr(this.wallet.address.length-5);
                let secret = window.localStorage.getItem(key);
                return secret;
            },
        },

        data() {
            return {
                loading: false,
                importWalletForm: this.$inertia.form({
                    seed: '',
                }),
                errorResponse: {},
                hasError: false,
                recentlySuccessful: false,
                showingPinDialog: false
            }
        },
        

        methods: {
            cancel() {
                this.importWalletForm.reset();
                this.$emit('close');
            },

            wordLimiter(ev) {
                if(this.wordsInSentence > 25) {
                    this.importWalletForm.seed = String(this.importWalletForm.seed).split(" ").slice(0, 25).join(" ");
                }
            },

            handleErrorResponse(error) {
                let self = this;
                if (error.response) {
                    self.errorResponse = error.response.data;
                    _.each(self.errorResponse.errors, (error, idx) => {
                        _.each(error, (message) => {
                            self.importWalletForm.errors[idx] = message;
                        });
                    });  
                }

                self.hasError = true;
            },

            doImport(pinCode) {

                let self = this;
                self.loading = true;
                axios.post(route('api.wallets.store', self.wallet.address), {
                    name: self.wallet.name,
                    seed: self.importWalletForm.seed,
                    pin: pinCode,
                }).then((response) => {
                    self.loading = false;
                    self.recentlySuccessful = true;
                    let wallet = response.data.data;
                    //window.localStorage.setItem(String(wallet.address).substr(_.size(wallet.address)-5), wallet.secret);
                    this.$emit('imported');
                    self.$bus.emit('updateWallet');
                    self.cancel();
                    console.log('create response', response);

                    
                }).catch((error) => {
                    self.loading = false;
                    console.error('error', error);
                    self.recentlySuccessful = false;
                    self.handleErrorResponse(error);
                });
            },

        }

        
    }
</script>
