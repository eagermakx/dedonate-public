<script setup>
    import { defineProps } from 'vue';
    import Contributor from './Contributor.vue';

    const props = defineProps({
        contributors: Array
    })
</script>

<template>
    <div class="row">
        <Contributor v-for="user in props.contributors" :login="user.name" class="contributor"/>
    </div>    
</template>

<style scoped>
    .contributor ~.contributor {
        margin-left: 24px;
    }
</style>
