<template>
    <header class="header">
        <nav class="row">
            <Logo/>
            <ul class="nav_list">
                <li class="nav_list-item font-lexend">
                    <router-link :to="'/dashboard/'" class="nav_link">dashboard</router-link>
                </li>
                <li class="nav_list-item font-lexend">
                    <router-link to='/browse' class="nav_link">browse</router-link>
                </li>
                <li class="nav_list-item font-lexend">
                    <router-link to='/about' class="nav_link">about</router-link>
                </li>
            </ul>
        </nav>
        <w3m-button/>
        <!-- <router-link to="/dashboard">
            <Button title='Launch dApp'></Button>
        </router-link> -->
    </header>
</template>

<script>
    import { useWeb3ModalAccount  } from '@web3modal/ethers/vue';

    import Logo from './svg/Logo.vue';
    import Button from './Button.vue'
    import { ref } from 'vue';

    const address = ref(null)

    export default {
        components: {
            Logo,
            Button
        }
    }
</script>

<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 30px;
    }

    .nav_list {
        display: flex;
        align-items: center;
    }

    .nav_list-item {
        margin-left: 40px;
        font-size: 24px;
        font-weight: 300;
        transition: all 0.3s ease;
    }

    .nav_list-item a {
        text-decoration: none;
        color: var(--cream-primary);
    }
    
    .nav_list-item:hover {
        opacity: 0.7;
    }

</style>