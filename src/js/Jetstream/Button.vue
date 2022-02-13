<template>
    <button 
        v-if="!href"
        :type="type" 
        class="inline-flex items-center justify-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 dark:bg-gray-500 dark:hover:bg-gray-700 transition">
        <slot></slot>
    </button>
    <a v-else 
       class="inline-flex items-center justify-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 dark:bg-gray-500 dark:hover:bg-gray-700 transition"
       :href="href" 
       :title="title" 
       :alt="title">
        <slot></slot>
    </a>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                default: 'submit',
            },
            href: {
                type: String,
                default: null,
            },
            alt: {},
            title: {},
        }
    }
</script>
