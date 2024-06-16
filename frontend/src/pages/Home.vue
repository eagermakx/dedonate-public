<template>
  <div class="home-content">
      <h1 class="font-lexend">DeDonate</h1>
      <h2 class="font-lexend">Open source sponsorship for the new age</h2>
      <p class="font-lexend">Transparent way to fund open source project</p>

      <div class="row home_buttons">
        <router-link :to="{name: 'browse'}">
          <Button title="Become a sponsor" type="gold"></Button>
        </router-link>
        <router-link :to="{name: 'browse'}">
          <Button title="Raise funds now"></Button>
        </router-link>
        <router-link :to="{name: 'about'}">
          <Button title="Learn more" type="blank"></Button>
        </router-link>
      </div>
    </div>
</template>

<script>
    import Button from '../components/Button.vue';

    export default {
        components: {
            Button
        },
        name: 'Home'
    }
</script>

<style scoped>

  .home-content {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  h1 {
    color: #f6f6f6;
    font-size: 64px;
    font-weight: bold;
  }

  h2 {
    color: #f6f6f6;
    font-size: 64px;
    font-weight: 300;
    max-width: 850px;
    text-align: left;
    margin-top: 35px;
    line-height: 1.25em;
  }

  p {
    margin-top: 35px;
    font-size: 24px;
    font-weight: 400;
    color: #f6f6f6;
  }

  .home_buttons {
    margin-top: 48px;
  }

  .home_buttons .button {
    margin-right: 16px;
  }

</style>
