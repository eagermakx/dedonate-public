<template>
    <div class="rows-list_row rows-list_columns">
        <span v-for="column in columns" :class="['column-title font-roboto', column.customClass ?? '']" v-html="column.text"></span>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'TableColumn',
        props: {
            columns: Array,
        }
    }
</script>

<style>
    .column-title {
        color: var(--grey-bg-color);
        font-size: 16px;
        line-height: 1.1em;
    }

    .rows-list_columns {
        margin-bottom: 4px;
    }
</style>
