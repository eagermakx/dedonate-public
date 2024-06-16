<script setup>
import { defineProps } from 'vue';


const props = defineProps({
    text: String,
})

</script>

<template>
    <div class="header-block row">
        <h1 class="font-lexend">
            {{ text.trim() }}
            <slot></slot>
        </h1> 
    </div>
</template>

<style scoped>
    h1 {
        color: #fff;
        font-size: 48px;
        text-align: left;
        font-weight: 500;
    }

    .header-block {
        margin-bottom: 32px;
    }
</style>