<script setup>
import { defineProps } from 'vue';
import { tokenToDecimal } from '../../utils/helpers/helpers';

import Status from '../Status/Status.vue';

const props = defineProps({
    fund: Object,
    type: String,
    width: Number,
});

</script>
<template>
    <div :class="['funding_progress-text', 'funding-' + props.type]" :style="'width:' + props.width + '%'">
        <div class="funding-status" :style="'width:' + props.width + '%'">
            <Status :type="props.fund.fundingState" 
                    :state="props.type === 'black' ? 'active' : 'black'" 
                    :text-class="props.type === 'black' ? 'text-cream' : 'text-black'" />
        </div>
        <div class="funding_stats">
            <div class="row align-center just-center">
                <span class="font-roboto funding_amount">
                    {{ tokenToDecimal(props.fund.donationsTotal) }} / {{ tokenToDecimal(props.fund.donationsGoal) }}
                </span>
                <span class="font-roboto funnding_currency"> &nbsp;spUSD</span>
                <span class="font-roboto funding_convert">&nbsp;~{{ tokenToDecimal(props.fund.donationsTotal) }}$</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.funding_progress {
    width: 100%;
    height: 60px;
    border-radius: 8px;
    background-color: var(--table-row-bg);
    position: relative;
    overflow: hidden;
}

.funding-status {
    padding-left: 16px;
}

.funding-black,
.funding-light {
    position: absolute;
    height: 100%;
    left: 0%;
    top: 0;

    display: flex;
    align-items: center;
}

.funding-black {
    width: 100%;
}

.funding-light {
    width: 0%;
    background-color: var(--cream-primary);
    overflow: hidden;
}

.funding_stats {
    position: absolute;
    left: 470px;
    transform: translate(-50%);

    width: 50%;
    text-align: center;
}

.funding_amount,
.funnding_currency,
.funding_convert {
    font-size: 18px;
}

.funding-black {
    color: var(--cream-primary)
}

.funnding_currency {
    font-weight: bold;
}

.funding_convert {
    opacity: 0.6;
}

.funding-info {
    justify-content: space-between;
    margin-top: 12px;
}

.manage-button {
    max-height: 38px;
    padding: 8px 20px;
    min-width: 162px;
}

.statuses {
    margin-bottom: 12px;
}

.manage-button span {
    font-size: 20px;
}
</style>
