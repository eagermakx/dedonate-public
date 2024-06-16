<template>
    <div :class="['vote-button', type]">

    </div>
</template>

<script>
    export default {
        name: 'VoteButton',
        props: {
            type: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped>
    .vote-button {
        width: 47px;
        height: 29px;
        border-radius: 8px;
        background: var(--black-text);
        position: relative;
        cursor: pointer;
    }

    .vote-button:hover {
        opacity: 0.9;
    }
    
    .vote-button::before {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .vote-button.approve::before {
        width: 16px;
        height: 14px;
        background-image: url('../assets/approve.svg');
    }

    .vote-button.deny::before {
        width: 15px;
        height: 15px;
        background-image: url('../assets/deny.svg');
    }
</style>
