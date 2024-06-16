<script setup>
import Badge from '../Badge.vue';
import Info from '../TextComponents/Info.vue';

const props = defineProps({
    proposal: Object,
    orgAddress: String
})

</script>

<template>
    <div class="proposal proposal_row">
        <div class="proposal_text column">
            <h4 class="font-roboto proposal_title">
                <router-link :to="{name: 'proposal', params: {project: props.orgAddress, proposal: proposal.address}}">
                    {{ proposal.title }}
                </router-link>
            </h4>
            <div class="row align-center">
                <Badge size="small" :type="proposal.state" :text="proposal.state" />
                <Info class="text-grey">{{ proposal.created_at }} {{ proposal.userVote ? '(you voted '+ proposal.userVote.vote + ')' : '' }}</Info>
            </div>
        </div>

        <div class="row align-center">
            <span class="font-roboto proposal_text"> {{ proposal.votesFor.length }} <span class="font-roboto proposal_currency"></span></span>
            <Info class="text-green">&nbsp; {{ (proposal.votesFor.length / proposal.totalVoters *  100).toFixed(2) }}%</Info>
        </div>

        <div class="row align-center">
            <span class="font-roboto proposal_text">{{ proposal.votesAgainst.length }} <span class="font-roboto proposal_currency"></span></span>
            <Info class="text-red">&nbsp; {{ (proposal.votesAgainst.length / proposal.totalVoters *  100).toFixed(2) }}%</Info>
        </div>

        <div class="proposal_votes text-right">
            <span class="font-roboto proposal_text"> {{ proposal.votesFor.length+ proposal.votesAgainst.length }} <span class="font-roboto proposal_currency"></span></span>
            <Info class="text-grey">{{ proposal.totalVoters }} addresses</Info>
        </div>
    </div>
</template>

<style scoped>
.proposal_title {
    font-size: 18px;
    font-weight: 500;
    color: var(--cream-primary);
    line-height: 1.1em;
    margin-bottom: 4px;
}

.proposal_title a {
    color: var(--cream-primary);
}

.proposal_title:hover {
    opacity: 0.8;
}

.proposal_votes {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.proposal_text {
    color: var(--cream-primary);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.15em;
}

.proposal_currency {
    color: var(--cream-primary);
    font-size: 14px;
    font-weight: 500;
}

.badge~.info-text {
    margin-left: 8px;
}
</style>
