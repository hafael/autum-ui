<template>
    <input 
        class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" 
        type="text" 
        :value="modelValue" 
        :readonly="readonly" 
        :disabled="disabled" 
        ref="inputRef">
</template>

<script>
    import useCurrencyInput from 'vue-currency-input'

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
            options: Object
        },

        setup (props) {
            const { formattedValue, inputRef } = useCurrencyInput(Object.assign({
                autoDecimalDigits: true,
                exportValueAsInteger: true,
                locale: 'pt-BR',
                currency: 'BRL'
            }, props.options))

            return { inputRef, formattedValue }
        },

        methods: {
            focus() {
                this.$refs.inputRef.focus()
            }
        }
    }
</script>

