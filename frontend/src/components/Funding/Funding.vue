<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import { useSystem } from '../../stores/system'
import { useWeb3ModalAccount } from '@web3modal/ethers/vue';
import { tokenToDecimal } from '../../utils/helpers/helpers';

import Button from '../Button.vue';
import StatusTimeline from '../Status/StatusTimeline.vue';
import FundingRow from './FundingRow.vue';

const props = defineProps({
    orgAddress: String,
    fundAddress: String,
});

const web3Account = useWeb3ModalAccount();
const store = useSystem();
const fund = store.orgs[props.orgAddress].funds[props.fundAddress];

const fundingLight = ref(null);
let percent = fund.donationsTotal / fund.donationsGoal * 100;
if (percent > 100) {
    percent = 100;
}

const userShare = fund.sponsors[web3Account.address.value] ?? 0

const emit = defineEmits(["modal-open"]);

</script>
<template>
    <div class="funding_progress">
        <FundingRow :fund="fund" type="black" ref="fundingBlack" :width="100" />
        <FundingRow :fund="fund" type="light" ref="fundingLight" :width="percent" />
    </div>
    <div class="row align-center funding-info">
        <div class="column">
            <div class="statuses">
                <StatusTimeline :statuses="fund.states" :current-state="fund.fundingState" />
            </div>
            <span class="font-roboto text-grey font-20" style="font-weight: 400;">Your share is {{ userShare / fund.donationsTotal }}% ({{tokenToDecimal(userShare)}} spUSD)</span>
        </div>
        <Button title="Manage" type="blank" class="manage-button" @click="$emit('modal-open')"/>
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

.funding-black,
.funding-light {
    position: absolute;
    height: 100%;
    left: 0%;
    top: 0;

    display: flex;
    align-items: center;
}

.funding-light {
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
