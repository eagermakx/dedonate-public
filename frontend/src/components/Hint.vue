<template>
    <div class="hint">
        <span class="tooltip">{{ text }}</span>
        <span class="hint_symbol font-roboto">?</span>
    </div>
</template>

<script>
    export default {
        name: "Hint",
        props: {
            text: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped>
    .hint {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        width: 18px;
        height: 18px;

        border: #909090 1px solid;
        border-radius: 50%;
        cursor: pointer;
        margin-left: 6px;
    }

    .hint_symbol {
        font-size: 16px;
        transform: translate(0, 1px);
        line-height: 1em;
        font-weight: 400;
        color: #909090;
    }

    .tooltip {
        position: absolute;
        left: 50%;
        top: 0;
        
        transform: translate(-50%, -105%);
        
        visibility: hidden;
        text-align: center;

        background: rgba(0, 0, 0, 0.6);
        border-radius: 5px;
        padding: 5px;
    }

    .hint:hover .tooltip {
        visibility: visible;
    }
</style>
