<template>
    <button :class="['button', type]">
        <span class="button-title font-lexend">
            {{ title }}
        </span>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: {
            title: String,
            type: {
                type: String,
                default: ''
            }
        },
        name: 'Button',
    }
</script>

<style scoped>

    .button {
        display: flex;
        align-items: center;
        justify-content: center;

        min-width: 202px;
        height: 48px;
        padding: 0 32px;

        background: var(--cream-primary);
        border-radius: 50px;

        cursor: pointer;
        outline: none;
        border: none;
    }

    .button-title {
        color: var(--black-text);
        font-weight: 400;

        font-size: 18px;
    }

    .button:hover {
        background: #fff;
    }

    .button:active {
        background: #bbb;
    }

    /* GOLD BUTTON */

    .button.gold {
        background: #ead294;
    }

    .button.gold:hover {
        background: #ffd873;
    }

    .button.gold:active {
        background: #b49955;
    }

    /* BLANK BUTTON */

    .button.blank {
        background: none;
        border: 2px var(--cream-primary) solid;
        transition: all 0.1s ease;
    }

    .button.blank:hover,
    .button.blank-white:hover {
        border-width: 3px;
    }

    .button.blank .button-title {
        color: var(--cream-primary);
    }

    .button.blank:active {
        background: #fff;
    }

    .button.danger {background: var(--red-bg-color)}
    .button.danger span {color: #fff;}
    .button.danger:hover {background: #AA2D2D}
    .button.danger:active {background: #972c2c}

    .button.blank-white {
        background: none;
        border: 2px var(--black-text) solid;
        transition: all 0.1s ease;
    }
    .button.blank-white span {color: var(--black-text);}
    .button.blank-white:active {
        background: var(--black-text);
    }

    .button.blank-white:active span {
        color: #fff
    }


    .button.blank:active .button-title {
        color: var(--black-text);
    }

    .button:disabled,
    .button.disabled {
        background: #505050;
    }

    .button:disabled .button-title,
    .button.disabled .button-title {
        color: #838383;
    }

</style>