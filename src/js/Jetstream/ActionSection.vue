<template>
    <div class="md:grid md:grid-cols-3 md:gap-6" :class="{'lg:grid-cols-1 lg:gap-3': responsive}">
        <jet-section-title>
            <template #title><slot name="title"></slot></template>
            <template #description><slot name="description"></slot></template>
        </jet-section-title>

        <div class="mt-5 md:mt-0 md:col-span-2">
            <div class="px-4 py-5 sm:p-6 bg-white dark:bg-gray-900 text-gray-300 shadow"
                :class="hasActions ? 'sm:rounded-tl-md sm:rounded-tr-md' : 'sm:rounded-md'">
                <slot name="content"></slot>
            </div>

            <div class="flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md dark:bg-black dark:text-white" v-if="hasActions">
                <slot name="actions"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import JetSectionTitle from './SectionTitle'

    export default {
        components: {
            JetSectionTitle,
        },

        props: ['responsive'],

        computed: {
            hasActions() {
                return !! this.$slots.actions
            }
        }
    }
</script>
