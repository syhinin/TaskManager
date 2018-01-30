<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <dashboard/>
  </div>
</template>

<script>
import dashboard from './components/Dashboard'

export default {
  name: 'App',
  components: {
    dashboard
  }
}
</script>

<style>
  body{
    background-color: #f4f3f0;
  }
#app {
  font-family: 'Open Sans', sans-serif;
  font-size:12px;
  color: #000000;
  margin: 0;
  padding: 0;
}
</style>
