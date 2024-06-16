<template>
    <router-link to="/">
        <svg viewBox="0 0 36 36" fill="none" preserveAspectRatio="xMinYMin" id="logo">
            <path d="M0 0H36V8.7764H0V18.2298H36V27.441H0V36H36" fill="url(#paint0_linear_89_166)"/>
            <defs>
                <linearGradient id="paint0_linear_89_166" x1="0" y1="18" x2="36" y2="18" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#3FFFF1"/>
                    <stop offset="1" stop-color="#5F00E9"/>
                </linearGradient>
            </defs>
        </svg>
    </router-link>
</template>

<script>
    export default {
        name: 'Logo'
    }
</script>

<style scoped>
    #logo {
        width: 36px;
    }
</style>