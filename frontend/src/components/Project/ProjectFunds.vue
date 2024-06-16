<template>
    <TableColumn :columns="columns" class="funds"/>
    <TableRow class="funds funds-row align-center">
        <span class="funds-text">1354 <span class="medium">spUSD</span></span>
        <div class="column">
            <span class="funds-text">338.5 <span class="medium">spUSD</span></span>
            <Info class="text-grey">July 13th, 2024</Info>
        </div>
        
        <a href="https://explorer.test.siberium.net/address/0x1ae6a35a82947B38e3436A493bcbFddA276D4332#code" target="_blank" class="address">
            <span class="medium">0x45f5...b964 </span>
        </a>
        
        <a href="" target="_blank" class="address">
            <span class="medium">0x45f5...b964 </span>
        </a>
    </TableRow>
</template>

<script>
    import columns from '../../utils/columns/funds'

    import TableColumn from '../Table/TableColumn.vue';
    import TableRow from '../Table/TableRow.vue';
    import Info from '../TextComponents/Info.vue';

    export default {
        name: 'ProjectFunds',
        components: {
            TableColumn,
            TableRow,
            Info,
        },
        props: {},
        data() {
            return {
                columns: columns,
            }
        }
    }
</script>

<style scoped>

    .funds {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 0 16px;
    }

    .funds-text {
        color: var(--cream-primary);
        font-weight: bold;
        font-size: 20px;
    }

    .address {
        text-decoration: none;
        color: var(--cream-primary);
    }
    
    .medium {
        font-weight: 500;
        font-size: 16px;
        color: var(--cream-primary);
    }

</style>
