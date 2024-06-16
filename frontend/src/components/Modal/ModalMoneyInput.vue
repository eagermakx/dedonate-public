<template>
    <div class="row modal_money-input">
        <div class="modal_money-input-container row">
            <div class="modal_money-input_dropdown row">
                <ul class="modal_money-input">
                    <li class="modal_money-input_item">
                        <span class="font-roboto">USDT</span>
                    </li>
                </ul>
                <div class="dropdown_arrow">
                    <!-- <DropdownArrow/> -->
                </div>
            </div>
            <input type="number" step="0.000001" min="0" class="font-roboto" placeholder="0.000000">
        </div>
        <Button title="Donate" type="gold"/>
    </div>    
</template>

<script>
    import DropdownArrow from '../svg/DropdownArrow.vue';
    import Button from '../Button.vue';

    export default {
        name: 'ModalMoneyInput',
        components: {
            DropdownArrow,
            Button,
        }
    }
</script>

<style scoped>
    .modal_money-input {
        justify-content: space-between;
    }

    .modal_money-input-container {
        background-color: #252327;
        border-radius: 100px;
        height: 48px;

        flex-direction: row;
        align-items: center;
        padding: 11px 24px;
        color: var(--cream-primary);
    }

    .modal_money-input_dropdown {
        align-items: center;
        cursor: pointer;
        max-height: 28px;
    }

    .modal_money-input_item span {
        font-size: 20px;
        font-weight: 400;
    }

    .dropdown_arrow {
        margin-left: 8px;
        cursor: pointer;
    }

    input {
        margin-left: 24px;
        width: 160px;
        background: none;
        font-size: 20px;
        color: var(--cream-primary);
        border: none;
        outline: none;
        text-align: right;

        appearance: textfield;
        -webkit-appearance: textfield;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

</style>
