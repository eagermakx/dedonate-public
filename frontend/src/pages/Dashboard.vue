<script setup>
    import { ref } from 'vue';
    import { useWeb3ModalAccount } from '@web3modal/ethers/vue';
    import { useSystem } from '../stores/system'
    import { formatProjects } from '../utils/helpers/helpers';

    import PageHeader from '../components/Headings/PageHeader.vue';
    import ContentBlock from '../components/ContentBlock.vue';
    import BlockHeader from '../components/Headings/BlockHeader.vue';
    import Button from '../components/Button.vue';
    import ProjectsList from '../components/Project/ProjectsList.vue';

    const activeTab = ref('sponsored');
    const store = useSystem();

    const switchTab = (tab) => {
        activeTab.value = tab;
    }
    const info = useWeb3ModalAccount();
    const userWalletAddress = info.address.value;

    const getSponsoredByMe = () => {
        const sponsoredByMe = Object.values(store.orgs).filter(org => {
            let funds = Object.values(org.funds).filter(fund => fund.sponsors[userWalletAddress] != undefined)

            return funds.length > 0;
        });

        return formatProjects(sponsoredByMe)
    }

    const getMyProjects = () => {
        const myProjects = Object.values(store.orgs).filter(org => Object.keys(org.contributors).includes(userWalletAddress));

        return formatProjects(myProjects)
    }

    const getLookingForFunding = () => {
        const lookingForFunding = Object.values(store.orgs).filter(org =>  Object.values(org.funds).filter(fund => fund.fundingState === 'collecting').length > 0);

        return formatProjects(lookingForFunding);
    }

    const getTrending = () => formatProjects(store.orgs)

    const sponsoredByMe = getSponsoredByMe()
    const myProjects = getMyProjects()
    const trending = getTrending()

</script>

<template>
    <div class="page-content">
        <PageHeader text="Dashboard"/>
    </div>
    <ContentBlock class="row buttons">
        <Button title="Trending" :type="activeTab === 'trending' ? '' : 'blank'"  @click="switchTab('trending')"></Button>
        <Button title="My projects" :type="activeTab === 'my' ? '' : 'blank'" @click="switchTab('my')"></Button>
        <Button title="Sponsored by me" :type="activeTab === 'sponsored' ? '' : 'blank'" @click="switchTab('sponsored')"></Button>
    </ContentBlock>

    <ContentBlock v-if="activeTab === 'sponsored'">
        <BlockHeader :text="'Sponsored by me - ' + sponsoredByMe.length"/>
        <ProjectsList :projects="sponsoredByMe"/>
    </ContentBlock>

    <ContentBlock v-if="activeTab === 'sponsored'">
        <BlockHeader text="Looking for funding"/>
        <ProjectsList :projects="trending"/>
    </ContentBlock>

    <ContentBlock v-if="activeTab === 'my'">
        <BlockHeader :text="'My Projects - ' + myProjects.length"/>
        <ProjectsList :projects="myProjects"/>
    </ContentBlock>

    <ContentBlock v-if="activeTab === 'trending'">
        <BlockHeader text="Trending"/>
        <ProjectsList :projects="trending"/>
    </ContentBlock>
</template>

<style scoped>
    .buttons .button {
        margin-right: 24px;
    }
</style>