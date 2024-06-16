<template>
    <div class="proposal proposal_row">
        <div class="proposal_text column">
            <h4 class="font-roboto proposal_title">
                <router-link to="/proposal">
                    Create fundraising campaign in 1200 USDT
                </router-link>
            </h4>
            <div class="row align-center">
                <Badge size="small" type="success" text="passed"/>
                <Info class="text-grey">June 13th, 2024 (you voted for)</Info>
            </div>
        </div>

        <div class="proposal_votes">
            <span class="font-roboto proposal_text"> 1345 <span class="font-roboto proposal_currency">USDT</span></span> 
            <Info class="text-green">89,7%</Info>
        </div>

        <div class="proposal_votes">
            <span class="font-roboto proposal_text">1354 <span class="font-roboto proposal_currency">USDT</span></span> 
            <Info class="text-red">10,3</Info>
        </div>

        <div class="proposal_votes text-right">
            <span class="font-roboto proposal_text">1510 <span class="font-roboto proposal_currency">USDT</span></span> 
            <Info class="text-grey">11 addresses</Info>
        </div>
    </div>
</template>

<script>
    import Badge from '../Badge.vue';
    import Info from '../TextComponents/Info.vue';

    export default {
        name: 'ProposalRow',
        components: {
            Badge,
            Info
        },
        props: {

        }
    }
</script>

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
        margin-bottom: 4px;
    }

    .proposal_currency {
        color: var(--cream-primary);
        font-size: 14px;
        font-weight: 500;
    }

    .badge ~.info-text {
        margin-left: 8px;
    }
</style>
