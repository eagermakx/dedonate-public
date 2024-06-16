<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        type: String,
        title: String,
        isOpen: Boolean,
    })
</script>

<template>
    <Modal :is-open="isOpen">
        <div class="vote-modal">
            <ModalTitle :title="title"/>
            <p class="subtitle font-lexend">Your vote power is 14,28% </p>
            <Button type="gold" title="Vote">
                <div :class="['vote-icon', type]"></div>
            </Button>
        </div>
    </Modal>
</template>

<script>
    import Modal from './Modal.vue';
    import ModalTitle from './ModalTitle.vue';
    import Button from '../Button.vue';
    import VoteButton from '../VoteButton.vue';

    export default {
        name: 'VoteModal',
        components: {
            Modal,
            ModalTitle,
            Button,
            VoteButton
        }
    }
</script>

<style scoped>
    .vote-modal {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .subtitle {
        font-size: 20px;
        color: #252327;
        margin-bottom: 16px;
    }

    .vote-icon {
        margin-left: 4px;
        display: inline-block;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .vote-icon.approve {
        width: 17px;
        height: 16px;
        background-image: url('../../assets/approve.svg');
    }

    .vote-icon.deny {
        width: 16px;
        height: 16px;
        background-image: url('../../assets/deny.svg');
    }

</style>
