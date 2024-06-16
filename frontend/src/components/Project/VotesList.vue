<template>
    <TableRow v-for="(vote, rank) in getVoters(votes)" class="voter row align-center">
        <span v-if="withIndex" class="rank font-lexend text-grey">{{ rank + 1 }}</span>
        <div class="profile-picture" :style="'background-color: #' + getBgColor(vote.address)"></div>
        <span class="font-roboto medium">{{ vote.addressShort }}</span>
        <div class="vote">
            <span class="font-roboto medium">{{ vote.balance + ' ' }} </span>
            <span class="font-roboto light">{{ vote.currency}}</span>
            <span :class="['font-robobo light percentage', votesColor ?? 'text-grey']"> ({{ vote.percentage }}%) </span>
        </div>   
    </TableRow>
</template>

<script>
    import { shortenHex } from '../../utils/helpers/helpers';
    import TableRow from '../Table/TableRow.vue';

    export default {
        name: "VotesList",
        components: {
            TableRow
        },
        props: {
            votes: Array,
            withIndex: Boolean,
            sum: Number,
            votesColor: String
        },
        methods: {
            getVoters(voters) {
                let result = [];

                for (let i = 0; i < voters.length; i++) {
                    const element = voters[i];
                    element.addressShort = shortenHex(element.address);
                    element.percentage = ((element.balance / this.sum) * 100).toFixed(2)

                    result.push(element);
                }

                result.sort((a, b) => b.balance - a.balance);

                return result;
            },
            getBgColor(hex) {
                const len = hex.length;
                return hex.substring(len-6, len);
            }
        }
    }
</script>

<style scoped>
    .voter {
        padding: 12px;
        margin-bottom: 6px;
    }

    .rank {
        font-size: 20px;
        font-weight: 300;
    }

    .profile-picture {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        background-color: var(--red-bg-color);
        margin: 0 16px;
    }

    .vote {
        margin-left: auto;
    }

    span {
        color: var(--cream-primary);
    }

    .medium {
        font-weight: 500;
        font-size: 20px;
    }

    .light {
        font-weight: 300;
        font-size: 16px;
    }

    .percentage {
        margin-left: 8px;
    }

</style>
