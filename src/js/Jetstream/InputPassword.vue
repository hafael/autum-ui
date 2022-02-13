<template>
    <div class="relative w-full">
        <input :type="attrType"
            :class="inputClass"
            class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm pr-10 w-full dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:focus:ring-indigo-400" 
            :value="modelValue" 
            @input="$emit('update:modelValue', $event.target.value)" 
            @blur="visibility = false"
            :disabled="disabled"
            :required="required"
            :autocomplete="autocomplete"
            ref="input">

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
            disabled: false,
            modelValue: {},
            autocomplete: '',
            inputClass: '',
            required: false
        },

        emits: ['update:modelValue'],

        computed: {
            attrType() {
                return this.visibility ? 'text' : 'password';
            }
        },

        data() {
            return {
                visibility: false
            }
        },

        methods: {
            togglePasswordVisibility() {
                this.visibility = !this.visibility;
            }
        }
    }
</script>

