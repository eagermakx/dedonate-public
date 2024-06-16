<script setup>
   import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/vue'

  const projectId = 'DeDonate';

  const siberium_testnet = {
    chainId: 111000,
    name: 'Siberium Testnet',
    currency: 'SIBR',
    explorerUrl: 'https://explorer.test.siberium.net',
    rpcUrl: 'https://rpc.test.siberium.net'
  }

  const metadata = {
    name: 'DeDonate',
    description: 'Opensource sponsorship',
  }

  const ethersConfig = defaultConfig({
    metadata,

    enableEIP6963: true, 
    enableInjected: true, 
    enableCoinbase: true, 
  })

  const modal = createWeb3Modal({
    ethersConfig,
    chains: [siberium_testnet],
    projectId,
    enableAnalytics: true, 
    enableOnramp: true
  })
</script>

<template>
  <div class="main-bg">
    <Nav/>
    <router-view></router-view>
  </div>
</template>

<script>
  import Nav from './components/Nav.vue';
  import Button from './components/Button.vue';

  export default {
    components: {
        Nav,
        Button,
    },
    name: 'App',
  }
</script>