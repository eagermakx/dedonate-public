<script setup>

import { defineProps } from 'vue';
import { formatTimeStamp } from '../../utils/helpers/helpers';

import Status from './Status.vue';
import Info from '../TextComponents/Info.vue';

const props = defineProps({
    statuses: Array,
    currentState: { type: String, default: '' },
})

const formatStatusList = (statuses) => {
    statuses.sort((a, b) => a.at - b.at);
    for (let i = 0; i < statuses.length; i++) {
        const status = statuses[i];
        status.date = formatTimeStamp(status.at)
    }

    return statuses
}

const formattedStatuses = formatStatusList(props.statuses)

</script>

<template>
    <div class="row align-center">
        <div v-for="(status, i) in formattedStatuses" class="row align-center">
            <div class="column align-center">
                <Status :type="status.state" :state="props.currentState == status.state ? 'active': 'inactive'" />
                <Info class="text-grey">{{ status.date }}</Info>
            </div>
            <div v-if="i < formattedStatuses.length - 1" class="divider"></div>
        </div>
    </div>
</template>

<script>
import Status from './Status.vue';

export default {
    name: 'StatusTimeline',
    components: {
        Status,
    },
    props: {
        statuses: Array
    },
    data() {
        return {
            formattedStatuses: this.formatStatusList(this.statuses),
        }
    },
    methods: {
        formatStatusList(statuses) {
            statuses.sort((a, b) => a.at - b.at);
            for (let i = 0; i < statuses.length; i++) {
                const status = statuses[i];
                let date = new Date(status.at)

            }

            return statuses
        }
    }
}
</script>

<style scoped>
.divider {
    width: 30px;
    height: 1px;
    background-color: var(--grey-bg-color);
    margin: 0 12px;
    transform: translate(0, -6px);
}
</style>
