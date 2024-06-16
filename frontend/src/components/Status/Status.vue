<script setup>
    import { defineProps } from 'vue';
    import { capitalizeFirstLetter } from '../../utils/helpers/helpers';

    const props = defineProps({
        type: String,
        state: { type: String, default: 'inactive' },
        textClass: String,
    })

</script>

<template>
    <div :class="['row align-center', state === 'active' ? 'status-active' : '']">
        <div class="status-icon" 
            :data-type="props.type"
            :data-state="props.state"
            ></div>
        <span :class="['font-roboto status-text', 'status-text-'+type, textClass ?? '']">
            {{ capitalizeFirstLetter(type) }}
        </span>
    </div>
</template>

<style scoped>
    .status-icon {
        width: 24px;
        height: 24px;
        flex-shrink: 0;

        background-color: transparent;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;

        margin-right: 8px;
    }

    .status-text {
        font-size: 24px;
        color: var(--grey-bg-color);
    }

    .status-text-succeeded,
    .status-text-finished {
        color: var(--green-bg-color) !important;
    }

    .status-text-executed {
        color: #fff !important;
    }

    .status-text-canceled {
        color: var(--red-status-text) !important;
    }

    .status-active svg {
        stroke: var(--cream-primary);
    }

    .status-active span {
        color: var(--cream-primary);
    }

    .status-icon[data-type='active'][data-state='active'] {background-image: url('../../assets/status/active-active.svg');}
    .status-icon[data-type='active'][data-state='inactive'] {background-image: url('../../assets/status/active-inactive.svg');}

    .status-icon[data-type='canceled'][data-state='active'] {background-image: url('../../assets/status/canceled-active.svg');}
    .status-icon[data-type='canceled'][data-state='inactive'] {background-image: url('../../assets/status/canceled-inactive.svg');}

    .status-icon[data-type='collecting'][data-state='active'] {background-image: url('../../assets/status/collecting-active.svg');}
    .status-icon[data-type='collecting'][data-state='inactive'] {background-image: url('../../assets/status/collecting-inactive.svg');}
    .status-icon[data-type='collecting'][data-state='black'] {background-image: url('../../assets/status/collecting-black.svg');}

    .status-icon[data-type='executed'][data-state='active'] {background-image: url('../../assets/status/executed-active.svg');}
    .status-icon[data-type='executed'][data-state='inactive'] {background-image: url('../../assets/status/executed-inactive.svg');}

    .status-icon[data-type='finished'][data-state='active'] {background-image: url('../../assets/status/finished-active.svg');}
    .status-icon[data-type='finished'][data-state='inactive'] {background-image: url('../../assets/status/finished-inactive.svg');}
    .status-icon[data-type='finished'][data-state='black'] {background-image: url('../../assets/status/finished-black.svg');}

    .status-icon[data-type='published'][data-state='active'] {background-image: url('../../assets/status/published-active.svg');}
    .status-icon[data-type='published'][data-state='inactive'] {background-image: url('../../assets/status/published-inactive.svg');}

    .status-icon[data-type='succeeded'][data-state='active'] {background-image: url('../../assets/status/succeeded-active.svg');}
    .status-icon[data-type='succeeded'][data-state='inactive'] {background-image: url('../../assets/status/succeeded-inactive.svg');}

    .status-icon[data-type='vesting'][data-state='active'] {background-image: url('../../assets/status/vesting-active.svg');}
    .status-icon[data-type='vesting'][data-state='inactive'] {background-image: url('../../assets/status/vesting-inactive.svg');}
    .status-icon[data-type='vesting'][data-state='black'] {background-image: url('../../assets/status/vesting-black.svg');}

    .status-icon[data-type='pending'][data-state='active'] {background-image: url('../../assets/status/pending-active.svg');}
    .status-icon[data-type='pending'][data-state='inactive'] {background-image: url('../../assets/status/pending-inactive.svg');}
    .status-icon[data-type='pending'][data-state='black'] {background-image: url('../../assets/status/pending-black.svg');}

</style>
