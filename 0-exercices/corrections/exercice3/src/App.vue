<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!--
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  -->
  <MyPresentation/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyPresentation from './components/MyPresentation.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    MyPresentation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
