<template>
  <div id="app">
    <h3>{{title}}</h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            title: 'xxx系统~~'
        }
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
