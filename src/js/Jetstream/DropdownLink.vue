<template>
    <div>
        <button type="submit" class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition" v-if="as == 'button'">
            <div class="w-full flex items-center">
                <div v-if="hasIcon" class="mr-2"><slot name="icon"></slot></div>
                <slot></slot>
            </div>
        </button>
        
        <a :href="href" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition" v-else-if="as =='a'">
            <div class="w-full flex items-center">
                <div v-if="hasIcon" class="mr-2"><slot name="icon"></slot></div>
                <slot></slot>
            </div>
        </a>

        <inertia-link :href="href" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition" v-else>
            <div class="w-full flex items-center">
                <div v-if="hasIcon" class="mr-2"><slot name="icon"></slot></div>
                <slot></slot>
            </div>
        </inertia-link>
    </div>
</template>

<script>
    export default {
        props: ['href', 'as'],
        computed: {
            hasIcon() {
                return !! this.$slots.icon
            }
        }
    }
</script>
