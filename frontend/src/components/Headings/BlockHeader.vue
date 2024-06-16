<template>
    <h2 class="block-header font-lexend">
        {{ text }}
        <slot></slot>
    </h2>
</template>

<script>
    export default {
        name: 'BlockHeader',
        props: {
            text: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped>
    .block-header {
        font-size: 32px;
        line-height: 1.25em;
        margin-bottom: 12px;
        color: #fff;
        text-align: left;
        font-weight: 400;
    }
</style>
