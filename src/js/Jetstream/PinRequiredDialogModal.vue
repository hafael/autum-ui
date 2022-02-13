<template>
    <!-- Payment Error Modal -->
    <jet-dialog-modal 
        :show="show" 
        @close="$emit('close')"
        :closeable="true">
        <template #title>
            Definir código PIN
        </template>

        <template #content>
            <p class="text-red-600 mb-2">É necessário definir um código PIN para realizar essa ação.</p>
            <p>Essa é uma medida de segurança para previnir ações não autorizadas a partir da sua conta.</p>
        </template>

        <template #footer>
            <jet-button :href="route('profile.show') + '#pin-setup'">
                Definir PIN
            </jet-button>
        </template>
    </jet-dialog-modal>
</template>

<script>
    import JetDialogModal from './DialogModal'
    import JetButton from './Button'

    export default {

        props: {
            show: {
                default: false
            },
        },
        emits: ['close'],

        components: {
            JetDialogModal,
            JetButton
        },

        
    }
</script>
