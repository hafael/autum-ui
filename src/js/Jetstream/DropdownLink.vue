<template>
    <div>
        <button type="submit" class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 text-left hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 transition" :class="{'font-semibold text-blue-500 border-b-2 border-blue-500': active}"  v-if="as == 'button'">
            <div class="w-full flex items-center">
                <div v-if="hasIcon" class="mr-2"><slot name="icon"></slot></div>
                <slot></slot>
            </div>
        </button>
        
        <a :href="href" class="block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 transition" v-else-if="as =='a'">
            <div class="w-full flex items-center">
                <div v-if="hasIcon" class="mr-2"><slot name="icon"></slot></div>
                <slot></slot>
            </div>
        </a>

        <inertia-link :href="href" class="block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 transition" v-else>
            <div class="w-full flex items-center">
                <div v-if="hasIcon" class="mr-2"><slot name="icon"></slot></div>
                <slot></slot>
            </div>
        </inertia-link>
    </div>
</template>

<script>
    export default {
        props: ['href', 'as', 'active'],
        computed: {
            hasIcon() {
                return !! this.$slots.icon
            }
        }
    }
</script>
