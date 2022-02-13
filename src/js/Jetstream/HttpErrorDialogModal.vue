<template>
    <!-- Payment Error Modal -->
    <jet-dialog-modal 
        :show="show" 
        @close="$emit('close')"
        :closeable="true">
        <template #title>
            Oops...
        </template>

        <template #content>
            <h3 class="text-lg font-semibold mb-3">{{ heading }}</h3>
            <p class="text-red-600 mb-2">{{ response.message }}</p>
            <ul class="list-disc" v-if="response.errors">
                <li v-for="(error, idx) in response.errors" :key="idx" class="text-red-600 flex flex-col py-1 break-words">
                    <!-- <strong class="text-bold">{{ __(idx) }}:</strong> -->
                    <span v-for="message in error" :key="message">{{ message }}</span>
                </li>
            </ul>
        </template>

        <template #footer>
            <jet-secondary-button @click="$emit('close')">
                {{ closeText }}
            </jet-secondary-button>
        </template>
    </jet-dialog-modal>
</template>

<script>
    import JetDialogModal from './DialogModal'
    import JetSecondaryButton from './SecondaryButton'

    export default {

        props: {
            heading: String,
            response: Object,
            show: {
                default: false
            },
            closeText: {
                type: String,
                default: 'Ok'
            }
        },
        emits: ['close'],

        components: {
            JetDialogModal,
            JetSecondaryButton
        },

        
    }
</script>
