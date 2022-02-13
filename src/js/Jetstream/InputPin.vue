<template>
    <div class="relative w-full">
        <input :type="attrType"
            :class="inputClass"
            class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm py-6 pr-10 w-full" 
            v-model="modelValue" 
            @input="onInput($event)" 
            @blur="visibility = false"
            :disabled="false"
            :required="true"
            :autocomplete="false"
            ref="input"
            inputmode="tel"
            :max="6"
            :min="6">

        <div class="absolute top-0.5 right-2 p-2 cursor-pointer" @click="togglePasswordVisibility">
            <EyeOffIcon class="w-5 h-5" v-if="!visibility" />
            <EyeIcon class="w-5 h-5" v-else />
        </div>
    </div>
</template>

<script>
    import JetInput from '@/Jetstream/Input'
    import { EyeOffIcon, EyeIcon } from '@heroicons/vue/outline'

    export default {
        components: {
            JetInput,
            EyeOffIcon,
            EyeIcon
        },
        props: {
            inputClass: '',
        },

        emits: ['update:modelValue'],

        computed: {
            attrType() {
                return this.visibility ? 'text' : 'password';
            }
        },

        data() {
            return {
                visibility: false,
                modelValue: ''
            }
        },

        methods: {
            togglePasswordVisibility() {
                this.visibility = !this.visibility;
            },

            onInput(ev) {
                this.modelValue = String(ev.target.value).substring(0, 6);
                this.$emit('update:modelValue', this.modelValue);
            }
        }
    }
</script>

