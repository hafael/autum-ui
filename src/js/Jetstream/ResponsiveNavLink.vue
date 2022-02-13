<template>
    <div>
        <button :class="classes" class="w-full text-left" v-if="as == 'button'">
            <div class="w-full flex items-center">
                <div v-if="hasIcon" class="mr-2"><slot name="icon"></slot></div>
                <slot></slot>
            </div>
        </button>

        <inertia-link :href="href" :class="classes" v-else>
            <div class="w-full flex items-center">
                <div v-if="hasIcon" class="mr-2"><slot name="icon"></slot></div>
                <slot></slot>
            </div>
        </inertia-link>
    </div>
</template>

<script>
    export default {
        props: ['active', 'href', 'as'],

        computed: {
            hasIcon() {
                return !! this.$slots.icon
            },
            classes() {
                return this.active
                            ? 'block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 dark:border-indigo-500 dark:bg-black dark:text-indigo-500 dark:focus:text-indigo-500 transition'
                            : 'block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:bg-black dark:hover:border-gray-600 dark:focus:bg-black dark:focus:border-gray-600 transition'
            }
        }
    }
</script>
