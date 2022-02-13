<template>
  <label :for="id" class="text-sm text-gray-700 flex content-center" :class="{'text-gray-400 mouse-disabled': disabled}">
    <input type="radio" :value="value" :id="id" :name="name" v-model="proxyChecked" :disabled="disabled"
           class="rounded-full border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mr-1"
           :class="{'opacity-50': disabled}">
    <span v-if="placeholder">{{ placeholder }}</span>
  </label>
</template>

<script>
export default {
    emits: ['update:modelValue'],

    props: {
        checked: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            default: null,
        },
        value: {
            default: null,
        },
        name: {
            default: null,
        },
        id: {
            default: null,
        },
        modelValue: {}
    },

    computed: {
        proxyChecked: {
            get() {
                return this.modelValue;
            },

            set(val) {
                this.$emit("update:modelValue", val);
            },
        },
    },
}
</script>
