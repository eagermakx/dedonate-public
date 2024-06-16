<template>
    <div class="page-content">
        <PageHeader text="DeDonate">
            <span class="subtitle font-lexend">Governance</span>
        </PageHeader>
        <ContentBlock>
            <BlockHeader text="Team"/>
            <div class="row">
                <Button type="disabled" title="Join"/>
                <Button type="blank" title="Become a maintainer"/>
            </div>
        </ContentBlock>
        
        <ContentBlock>
            <BlockHeader text="Funding"/>
            <div class="row">
                <Button title="Create campaign"/>
                <Button type="blank" title="Propose report"/>
            </div>
        </ContentBlock>

        <ContentBlock>
            <BlockHeader text="Vote"/>
            <div class="row">
                <Button type="gold" title="Vote for proposal"/>
            </div>
        </ContentBlock>
    </div>
</template>

<script>
    import PageHeader from '../components/Headings/PageHeader.vue';
    import BlockHeader from '../components/Headings/BlockHeader.vue'
    import ContentBlock from '../components/ContentBlock.vue';
    import Button from '../components/Button.vue';

    export default {
        name: 'Governance',
        components: {
            PageHeader,
            BlockHeader,
            ContentBlock,
            Button,
        }
    }
</script>

<style scoped>
    .subtitle {
        margin-left: 24px;
        font-size: 32px;
        font-weight: 400;
        color: #8B80AA;
    }

    .button ~.button {
        margin-left: 12px;
    }
</style>
