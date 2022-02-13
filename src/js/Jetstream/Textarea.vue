<template>
    <textarea class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:focus:ring-indigo-400" v-model="modelValue" @input="$emit('update:modelValue', $event.target.value)" :rows="rows" :cols="cols" :readonly="readonly" :placeholder="placeholder" :disabled="disabled" ref="textarea"></textarea>
</template>

<script>
    export default {
        props: {
            readonly: {
                type: Boolean,
                default: () => { return false }
            },
            disabled: {
                type: Boolean,
                default: () => { return false }
            },
            rows: {
                type: Number,
                default: () => { return 3 }
            },
            cols: {
                type: Number
            },
            placeholder: {
                type: String
            },
            modelValue: {}
        },

        emits: ['update:modelValue'],

        methods: {
            focus() {
                this.$refs.textarea.focus()
            }
        }
    }
</script>

