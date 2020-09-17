<style>
  .dev-env-app {
    width           : 100%;
    background-color: grey;
    color           : blue;
    font-weight     : bold;
  }
</style>

<template>
  <div class="dev-env-app">
    {{text}}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        text: "Simple Development Environment Setup"
      }
    }
  }
</script>