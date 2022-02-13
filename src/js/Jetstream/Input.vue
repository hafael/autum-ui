<template>
    <input 
        v-if="!mask"
        class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:focus:ring-indigo-400" 
        :class="{
            'bg-gray-200 dark:bg-gray-700': disabled,
            'bg-gray-200 dark:bg-black cursor-not-allowed': readonly
        }"
        :value="modelValue" 
        @input="$emit('update:modelValue', $event.target.value)" 
        :readonly="readonly" 
        :disabled="disabled"
        ref="input">
    <input 
        v-else
        class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:focus:ring-indigo-400" 
        :class="{
            'bg-gray-200 dark:bg-gray-700': disabled,
            'bg-gray-200 dark:bg-black cursor-not-allowed': readonly
        }"
        :value="modelValue" 
        @maska="maskaEvent" 
        :readonly="readonly" 
        :disabled="disabled"
        v-maska="mask"
        ref="input">
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
            mask: {},
            modelValue: {}
        },

        emits: ['update:modelValue'],

        methods: {
            focus() {
                this.$refs.input.focus()
            },
            maskaEvent(ev) {
                this.$emit('update:modelValue', ev.target.getAttribute('data-mask-raw-value'))
            }
        }
    }
</script>

