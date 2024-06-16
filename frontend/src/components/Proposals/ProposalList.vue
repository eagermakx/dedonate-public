<script setup>
import { defineProps } from 'vue';
import { useSystem } from '../../stores/system';
import { useWeb3ModalAccount } from '@web3modal/ethers/vue';
import { formatVoters, formatTimeStamp } from '../../utils/helpers/helpers';

import columns from '../../utils/columns/proposal'
import ProposalRow from './ProposalRow.vue';
import TableColumn from '../Table/TableColumn.vue';

const props = defineProps({
    orgAddress: String
})
const store = useSystem();
const web3Account = useWeb3ModalAccount();

const userWalletAddress = web3Account.address.value;
const org = store.orgs[props.orgAddress];

let formattedProposals = [];

for (let [address, proposal] of Object.entries(org.governance.proposals)) {
    let votes = formatVoters(proposal.voters);
    const votesFor =  Object.values(proposal.voters).filter(voter => voter.vote === "for")
    const votesAgainst =  Object.values(proposal.voters).filter(voter => voter.vote === "against")
    const userVote = votes.filter(vote => vote.address === userWalletAddress)

    let el = {
        address: address,
        title: proposal.title,
        description: proposal.description,
        created_at: formatTimeStamp(proposal.createdAt),
        totalVoters: Object.keys(org.contributors).length,
        votesFor: votesFor,
        votesAgainst: votesAgainst,
        state: proposal.proposalState,
        userVote: userVote.length > 0 ? userVote[0] : undefined
    }

    formattedProposals.push(el)
}

</script>

<template>
    <TableColumn :columns="columns" class="proposal" />
    <ProposalRow v-for="proposal in formattedProposals" :proposal="proposal" :org-address="props.orgAddress"/>
</template>


<style scoped>
.proposal {
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    padding: 0 16px;

}

.proposal_row {
    background: var(--table-row-bg);
    border-radius: 8px;
    padding: 12px 16px;
    margin-bottom: 6px;
}

.column-title {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 12px;
}
</style>
