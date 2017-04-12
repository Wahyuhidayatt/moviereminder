<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <card></card>
  </div>
</template>

<script>
import Card from './components/Card'

export default {
  name: 'app',
  components : {
    Card
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
  margin-top: 60px;
}
</style>
