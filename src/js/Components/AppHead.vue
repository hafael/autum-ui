<template>
    <inertia-head :title="metaTitle">
        <meta head-key="description" name="description" content="Autum é uma empresa de serviços financeiros disruptivos em blockchain com sede na cidade do Rio de Janeiro." />
        <meta name="author" content="Autum" />
        <meta name="copyright" content="Autum" />
        <meta name="application-name" content="Wallet" />

        <meta property="og:title" :content="metaTitle" />
        <meta property="og:site_name" content="Autum Wallet" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content="/images/autum-og-image-default.jpg" />
        <meta property="og:url" :content="metaUrl" />
        <meta property="og:description" :content="metaDescription" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" :content="metaTitle" />
        <meta name="twitter:description" :content="metaDescription" />
        <meta name="twitter:image" content="/images/autum-og-image-default.jpg" />

        <slot />
    </inertia-head>
</template>

<script>
    
    export default {
        name: 'AppHead',
        props: {
            title: String,
        },
        computed: {
            metaDescription() {
                return `Autum é uma empresa de serviços financeiros com sede na cidade do Rio de Janeiro.`;
            },
            metaTitle() {
                return this.title ? `${this.title} – Autum Wallet` : 'Autum Wallet';
            },
            metaUrl() {
                return route('welcome');
            }
        }
    }
</script>