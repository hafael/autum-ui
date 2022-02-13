<template>
    <select class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:focus:ring-indigo-400" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)" :readonly="readonly" :disabled="disabled" ref="select">
        <option :value="option.value" v-for="option in options" :key="option.value" :disabled="option.disabled">{{ option.text }}</option>
    </select>
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
            modelValue: {},
            options: {
                type: Array,
                default: () => { return [] }
            },
        },

        emits: ['update:modelValue'],

        methods: {
            focus() {
                this.$refs.select.focus()
            }
        }
    }
</script>

