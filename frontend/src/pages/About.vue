<script setup>
import PageHeader from '../components/Headings/PageHeader.vue';
import BlockHeader from '../components/Headings/BlockHeader.vue';
import ContentBlock from '../components/ContentBlock.vue';

</script>

<template>
    <div class="page-content">
        <PageHeader text="About" />
        <p class="paragraph font-roboto text-left">
            DeDonate is the innovative way to organize open source development collaboration and sponsorship. 
            <br>
            <br>
            We bring open source maintainers and backers together to an integrated platform, which benefits everyone.
            <br>
            <br>
        </p>

        <ContentBlock>
            <BlockHeader text="For Developers and Maintainers"/>
            <p class="paragraph font-roboto text-left">
                Use our platform to convert your repository into a standalone Decentralized Autonomous Organization on the blockchain. Then use it to distribute voting power among project's participants, and secure sustainable funding from sponsors.
            </p>
            <br>
            <br>
        </ContentBlock>

        <ContentBlock>
            <BlockHeader text="For Sponsors, Backers and Donors"/>
            <p class="paragraph font-roboto text-left">
                Our development and finance flow allows to reduce risk of project abandonment, which is done by increasing sustainability for maintainers by the means of our long-lasting sponsorship model
                <br>
                <br>
                We empower the sponsors with control over the course of development by giving them voting power within funding rounds.
                <br>
                <br>
                In addition, we formalize the interaction between developers and sponsors, in which we consolidate agreements between the parties in the blockchain, in order to promote integrity.
            </p>
        </ContentBlock>
        
    </div>
</template>


<style scoped>
    .paragraph {
        font-size: 20px;
        line-height: 1.5em;
    }
</style>