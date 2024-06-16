<template>
    <span class="info-text font-lexend">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: 'Info',
    }
</script>

<style scoped>
    .info-text {
        font-size: 12px;
        font-weight: 300;
        letter-spacing: 0.05em;
    }
</style>
