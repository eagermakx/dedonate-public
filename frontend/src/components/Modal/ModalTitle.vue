<template>
    <h2 class="modal-title font-lexend"> {{ title }} </h2>
</template>

<script>
    export default {
        name: 'ModalTitle',
        props: {
            title: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped>
    .modal-title {
        text-align: center;
        font-size: 32px;
        font-weight: 500;

        line-height: 1.2em;
        color: #252327;

        margin-bottom: 24px;
    }
</style>