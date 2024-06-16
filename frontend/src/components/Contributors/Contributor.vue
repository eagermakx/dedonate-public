<template>
    <div class="row align-center">
        <div class="user-ava"></div>
        <a :href="'https://github.com/'+login" target="_blank" class="font-roboto user-name">
            {{ login }}
        </a>
    </div>    
</template>

<script>
    export default {
        name: 'Contributor',
        props: {
            login: String,
        }
    }
</script>

<style scoped>
    .user-ava {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #31B9A0;
        margin-right: 8px;
    }

    .user-name {
        font-size: 20px;
        color: var(--cream-primary)
    }
</style>
