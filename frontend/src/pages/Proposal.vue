<script setup>
import { useSystem } from '../stores/system';
import { useRoute } from 'vue-router';
import { shortenHex, formatTimeStamp, getExplorerLink } from '../utils/helpers/helpers';
import { useWeb3ModalAccount } from '@web3modal/ethers/vue';

import PageHeader from '../components/Headings/PageHeader.vue';
import BlockHeader from '../components/Headings/BlockHeader.vue';
import ContentBlock from '../components/ContentBlock.vue';

import Badge from '../components/Badge.vue';
import Button from '../components/Button.vue';
import VotesList from '../components/Project/VotesList.vue';
import StatusTimeline from '../components/Status/StatusTimeline.vue';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs.vue';
import BreadcrumbLink from '../components/Breadcrumbs/BreadcrumbLink.vue';

const store = useSystem();
const route = useRoute();
const account = useWeb3ModalAccount();

const org = store.orgs[route.params.project];
const proposal = org.governance.proposals[route.params.proposal]
const contributors = Object.keys(org.contributors);

const userVotePower = contributors.includes(account.address.value) ? 1 : 0;

let votes = [];
contributors.forEach(contributor => {
    const userVote = proposal.voters[contributor]

    votes.push({
        address: contributor,
        balance: 1,
        vote: userVote ? userVote.vote : undefined
    })
})

const votesFor = votes.filter((vote) => vote.vote === 'for');
const votesAgainst = votes.filter((vote) => vote.vote === 'against');
const votesAbstain = votes.filter((vote) => vote.vote === undefined);
</script>

<template>
    <div class="page-content">
        <Breadcrumbs>
            <BreadcrumbLink :text="org.title" :link="{name: 'project', params: {project: route.params.project}}"/>
            <BreadcrumbLink :text="proposal.title" :link="{name: 'proposal', params: {project: route.params.project, proposal: route.params.proposal}}" :active="true"/>
        </Breadcrumbs>

        <ContentBlock>
            <PageHeader :text="proposal.title" class="title">
                <Badge :type="proposal.proposalState" :text="proposal.proposalState" class="status" />
            </PageHeader>

            <div class="row proposal-info row align-center">
                <div class="proposal-creator row align-center">
                    <div class="pp"></div>
                    <span class="proposal-info_text font-roboto">by {{ shortenHex(proposal.createdBy) }}</span>
                </div>
                <div class="divider"></div>
                <span class="proposal-info_text font-roboto">Proposed on: {{ formatTimeStamp(proposal.createdAt) }}</span>
                <div class="divider"></div>
                <a target="_blank" :href="getExplorerLink(route.params.proposal)">
                    <span class="proposal-info_text font-roboto">Address: {{ shortenHex(route.params.proposal) }}</span>
                </a>
            </div>
        </ContentBlock>

        <ContentBlock>
            <StatusTimeline :statuses="proposal.states" :current-state="proposal.proposalState"/>
        </ContentBlock>

        <ContentBlock>
            <div class="row align-center">
                <Button :type="userVotePower > 0 ? blank : 'disabled' " title="Vote" />
                <p class="font-lexend vote-share text-grey">
                    Your vote power is {{ userVotePower }}
                </p>
            </div>
        </ContentBlock>

        <div class="row votes">
            <ContentBlock>
                <BlockHeader :text="'For - ' + votesFor.length">
                    <span class="votes-currency font-lexend"></span>
                    <span class="votes-percentage text-green">({{ (votesFor.length / votes.length * 100).toFixed(2) }}%)</span>
                </BlockHeader>
                <VotesList :votes="votesFor" :sum="votes.length" votesColor="text-green" />
            </ContentBlock>

            <ContentBlock>
                <BlockHeader :text="'Against - ' + votesAgainst.length">
                    <span class="votes-currency font-lexend"></span>
                    <span class="votes-percentage text-red">({{ (votesAgainst.length / votes.length * 100).toFixed(2) }}%)</span>
                </BlockHeader>
                <VotesList :votes="votesAgainst" :sum="votes.length" votesColor="text-red" />
            </ContentBlock>

            <ContentBlock>
                <BlockHeader :text="'Abstain - ' + votesAbstain.length">
                    <span class="votes-currency font-lexend"></span>
                    <span class="votes-percentage text-grey">({{ (votesAbstain.length / votes.length * 100).toFixed(2) }}%)</span>
                </BlockHeader>
                <VotesList :votes="votesAbstain" :sum="votes.length" />
            </ContentBlock>
        </div>
    </div>
</template>

<style scoped>
.title {
    max-width: 720px;
    margin-bottom: 12px;
}

.status {
    transform: translate(0, -10px);
    margin-left: 8px;
}

.pp {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--red-bg-color);
    margin-right: 12px;
}

.proposal-info_text {
    color: var(--cream-primary);
    font-weight: 500;
    font-size: 20px;
}

.divider {
    width: 1px;
    height: 36px;
    background-color: var(--grey-bg-color);
    margin: 0 24px;
}

.vote-share {
    font-weight: 500;
    font-size: 20px;
    margin-left: 24px;
}

.currency {
    font-size: 16px;
}

.votes {
    justify-content: space-between;
    flex-wrap: wrap;
}

.votes .content-block {
    flex-basis: 423px;
}

.vote {
    padding: 12px;
    margin-bottom: 6px;
}

.votes-currency {
    font-weight: 300;
    font-size: 20px;
    color: var(--cream-primary);
}

.votes-percentage {
    font-weight: 400;
    font-size: 20px;
}
</style>
