<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        projectLink: String
    });
</script>

<template>
    <div class="dropdown text-center">
        <span class="table-text font-roboto">View project</span>
        <ul class="dropdown-list">
            <li>
                <router-link to="/contribute">
                    <span class="font-roboto table-text">Governance</span>
                </router-link>
            </li>
            <li>
                <router-link :to="'/project/' + props.projectLink">
                    <span class="font-roboto table-text">Become a sponsor</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .dropdown {
        cursor: pointer;
        position: relative;
    }

    .dropdown:hover .dropdown-list {
        display: flex;
    }

    .dropdown-list {
        position: absolute;
        width: 206px;

        right: -28px;
        bottom: 0;
        transform: translate(0, 100%);

        background: #39383A;
        border-radius: 12px;
        display: none;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px 6px;
        z-index: 998;
    }

    .dropdown-list li{
        padding: 2px 10px;
        width: 100%;
        text-align: left;
    }

    .dropdown-list li a{
        display: inline-block;
        width: 100%;
        text-decoration: none;
    }

    .dropdown-list li:hover {
        background: #f8f2e1;
        border-radius: 8px;
    }

    .dropdown-list li:hover .table-text {
        color: var(--table-row-bg);
    }
    
    .table-text {
        color: var(--cream-primary);
        font-weight: 400;
        font-size: 18px;
    }
</style>    