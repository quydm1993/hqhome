<template>
  <div id="app">
    <nav>
        <router-link to='/'>Overview</router-link>
        <router-link to='/model-listing'>Model Listing</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  margin-bottom: 10px;
}
</style>