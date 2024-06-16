<template>
    <div class="content-block">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ContentBlock',
    }
</script>

<style scoped>
    .content-block {
        margin-bottom: 24px;
    }
</style>