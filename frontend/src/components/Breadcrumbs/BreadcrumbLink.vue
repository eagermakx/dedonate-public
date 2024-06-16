<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        link: String,
        text: String,
        active: { type: Boolean, default: false }
    })
</script>

<template>
    <div class="row align-center">
        <router-link :to="link" class="breadcrumbs_link font-roboto" :data-active="active ? 'active' : 'inactive'">
            {{ text }}
        </router-link>
    </div>
    <span v-if="active == false" class="font-rooto breadcrumbs_divider">&nbsp;/&nbsp;</span>
</template>

<style>
    .breadcrumbs_link,
    .breadcrumbs_divider {
        font-weight: 400;
        font-size: 20px;
        color: var(--grey-bg-color);
    }

    .breadcrumbs_link:hover {
        opacity: 0.8;
    }

    .breadcrumbs_link[data-active='active'] {
        color: #fff;
    }
</style>
