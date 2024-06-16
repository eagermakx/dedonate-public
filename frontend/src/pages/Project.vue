<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import { useSystem } from '../stores/system';
import { useWeb3ModalAccount } from '@web3modal/ethers/vue';
import { shortenHex, getExplorerLink, tokenToDecimal } from '../utils/helpers/helpers';

import PageHeader from '../components/Headings/PageHeader.vue';
import BlockHeader from '../components/Headings/BlockHeader.vue';

import Button from '../components/Button.vue';
import Modal from '../components/Modal/Modal.vue';
import ModalTitle from '../components/Modal/ModalTitle.vue';
import ContentBlock from '../components/ContentBlock.vue'
import ModalMoneyInput from '../components/Modal/ModalMoneyInput.vue';
import Contributors from '../components/Contributors/Contributors.vue';
import ProposalList from '../components/Proposals/ProposalList.vue';
import ProjectDescription from '../components/Project/ProjectDescription.vue';
import VotesList from '../components/Project/VotesList.vue';
import Document from '../components/Document.vue';
import Funding from '../components/Funding/Funding.vue'

const route = useRoute()
const store = useSystem();
const web3Account = useWeb3ModalAccount();

const projectAddress = route.params.project;
const project = store.orgs[projectAddress]
const userWalletAddress = web3Account.address.value;

const isDonationOpen = ref(false);
const openDonation = () => { isDonationOpen.value = true};
const closeDonation = () => {isDonationOpen.value = false};

const isManageOpen = ref(false);
const openManage = () => {isManageOpen.value = true};
const closeManage = () => {isManageOpen.value = false};

const contributors = Object.keys(project.contributors).map(contributorWallet => {
    let contributor = project.contributors[contributorWallet];
    contributor.address = contributorWallet;

    return contributor;
});

let funds = [];
for (let [address, fund] of Object.entries(project.funds)) {
    fund.address = address;
    funds.push(fund);
}
const fund = funds[funds.length - 1];

let documents = [];
for(let[key, doc] of Object.entries(fund.documents)) {
    if (Array.isArray(doc)) {
        for (let i = 0; i < doc.length; i++) {
            const address = doc[i];
            documents.push({
                title: key + '_' + i+1,
                url: getExplorerLink(address)
            })
            
        }
    } else {
        documents.push({
            title: key,
            url: getExplorerLink(doc)
        })
    }
}

const currency = 'spUSD'

let sponsors = [];
for (let [addr, value] of Object.entries(fund.sponsors)) {
    sponsors.push({
        address: addr,
        balance: tokenToDecimal(value),
        currency: currency
    })
}

</script>

<template>
    <Modal :is-open="isDonationOpen" @modal-close="closeDonation">
        <div class="donation-modal_container">
            <ModalTitle title="Make a donation" />
            <ModalMoneyInput />
        </div>
    </Modal>

    <Modal :is-open="isManageOpen" @modal-close="closeManage">
        <div class="row align-center mange-header">
            <ModalTitle title="Manage funding"/>
            <a :href="getExplorerLink(fund.address)" target="_blank" class="manage-link font-roboto">{{ shortenHex(fund.address) }}</a>
        </div>
        
        <div class="buttons">
            <Button type="gold" title="Propose reschedule"></Button>
            <Button type="danger" title="Propose cancellation of funding"></Button>
            <Button type="blank-white" title="Custom proposal"></Button>
        </div>
    </Modal>

    <div class="page-content">
        <div class="row project-header">
            <PageHeader :text="project.title" />
            <Button title="Donate now" type="gold" @click="openDonation"></Button>
        </div>

        <ContentBlock>
            <BlockHeader text="Description" />
            <ProjectDescription 
                :description="project.description"
                :git-hub-link="project.githubUrl"
                :homepage="project.homepage"/>
        </ContentBlock>

        <ContentBlock>
            <BlockHeader text="Contributors" />
            <Contributors :contributors="contributors" />
        </ContentBlock>

        <ContentBlock>
            <BlockHeader text="Proposals" />
            <ProposalList :org-address="projectAddress"/>
        </ContentBlock>

        <ContentBlock>
            <BlockHeader text="Funds" />
            <Funding 
                :org-address="projectAddress" 
                :fund-address="fund.address"
                @modal-open="openManage"
                />
            <!-- <ProjectFunds /> -->
        </ContentBlock>

        <div class="row project-bottom">
            <ContentBlock>
                <BlockHeader text="Voting power" />
                <VotesList :votes="sponsors" :withIndex="true" :sum="tokenToDecimal(fund.donationsTotal)" />
            </ContentBlock>

            <ContentBlock>
                <BlockHeader text="Documents" />
                <div class="documents">
                    <Document v-for="doc in documents" :title="doc.title" :url="doc.url" />
                </div>
            </ContentBlock>
        </div>

    </div>

</template>

<style scoped>
.mange-header {
    display: flex;
    align-items: center;
    justify-content: center;
}

.manage-link {
    margin-bottom: 12px;
    margin-left: 24px;
    text-decoration: underline;
    color: var(--black-text);
    font-weight: 500;
    letter-spacing: 0.1em;
}

.manage-link:hover { 
    opacity: 0.8;
}

.header-block {
    align-items: flex-end;
}

.content-block {
    text-align: left;
}

.header-block~.button {
    margin-left: 16px;
    transform: translate(0, 6px);
}

.table-vesting {
    grid-template-columns: 4fr 4fr 4fr 4fr 5fr 5fr;
}

.vesting-documents {
    display: flex;
    flex-wrap: wrap;
}

.document-block {
    margin-right: 16px;
}

.project-bottom .content-block {
    flex-basis: 50%;
    padding-right: 32px;
}

.buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.buttons .button {
    margin-bottom: 12px;
}

.documents {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>