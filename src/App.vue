
<template>

  <div id="app">
   <meta content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width" name="viewport">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html,
body {
  overflow: hidden;
  overflow-y: auto;
}
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  background: #f5f7fb;
}
</style>
