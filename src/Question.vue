<template>
  <div id="app">
    <renderless>
      <h4>What is my name?</h4>
      <h6>Answer:</h6>
      <input v-model="message" placeholder="Type Answer Here.">
    </renderless>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import Renderless from './Renderless'

export default{
  components:{
    Renderless
  }
}
</script>
