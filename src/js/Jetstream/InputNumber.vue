<template>
    <input 
        class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:focus:ring-indigo-400" 
        v-model.lazy="modelValue" 
        v-money="money"
        :min="min"
        :max="max"
        :step="step" 
        :readonly="readonly" 
        :disabled="disabled"
        :data-value="clearedInputValue"
        :data-value-cents="clearedInputValueCents"
        ref="inputRef"
        type="text"
        inputmode="numeric"
        @input="debounceCall(onInput, $event)">
</template>

<script>
    import {VMoney} from 'v-money'

    export default {
        directives: {money: VMoney},
        props: {
            readonly: {
                type: Boolean,
                default: () => { return false }
            },
            disabled: {
                type: Boolean,
                default: () => { return false }
            },
            min: {
                type: Number,
                default: () => { return null }
            },
            max: {
                type: Number,
                default: () => { return null }
            },
            step: {
                type: Number,
                default: () => { return 1 }
            },
            decimals: {
                type: Number,
                default: () => { return 0 }
            },
            currency: {
                type: String,
                default: () => { return null }
            },
            cents: {
                type: Boolean,
                default: () => { return true }
            },
            modelValue: {},

            options: {
                type: Object,
                default: () => { 
                    return {
                        currency: 'BRL'
                    }
                }
            }
        },

        emits: ['update:modelValue'],

        data() {
            return {
                amount: this.formatAmount(this.modelValue)
            }
        },

        mounted() {
            this.$emit('update:modelValue', this.cents ? this.clearedInputValueCents : this.clearedInputValue);
        },

        watch: {
            min(val) {
                console.log('minValueUpdated', val);
                if(val > this.modelValue) {
                    this.$emit('update:modelValue', val);
                }
            }
        },

        computed: {
            money() {
                return {
                    decimal: ',',
                    thousands: '.',
                    prefix: this.currency ? this.currency + ' ' : '',
                    suffix: '',
                    precision: this.decimals,
                    masked: true /* doesn't work with directive */
                }
            },
            clearedInputValue() {
                return String(this.modelValue).trim().replace(/[^0-9,.]/g, "").replace('.', '').replace(',', '.');
            },
            clearedInputValueCents() {
                return parseInt(String(this.modelValue).replace(/[^0-9]/g, ""));
            },
            inputValue() {
                return this.currency + ' ' + this.clearedInputValue;
            }
        },

        methods: {

            debounceCall: _.debounce((callback, event) => {
                callback(event);
            }, 100),

            focus() {
                this.$refs.inputRef.focus()
            },

            formatAmount(amt) {

                let strValue = String(amt).replace('.', '').replace(/[^0-9,]/g, "");

                return this.$filters.currency(strValue, '', this.decimals, ',', '.', false);

            },

            onInput(ev) {
                let input = parseInt(String(ev.target.value).replace(/\D+/g, ''));

                if(this.min && input < this.min) {
                    console.log('min', this.min);
                    this.$emit('update:modelValue', this.min);
                }else {
                    this.$emit('update:modelValue', input);
                }
                
            }
        }
    }
</script>

