<template>
    <div class="table-row">
            <slot></slot>
        </div>
</template>

<script>
    export default {
        name: 'TableRow',
    }
</script>

<style>
    .table-row {
        min-height: 60px;
        width: 100%;
        background: var(--table-row-bg);
        border-radius: 8px;
        padding: 12px 16px;
    }
</style>