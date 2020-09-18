<style lang="scss">

  .dev-env-app {
    width           : 100%;
    background-color: grey;
    color           : blue;
    font-weight     : bold;

    .dev-env-app-sub {
      width           : 100%;
      background-color: green;
      color           : red;
    }
  }

</style>

<template>
  <div class="dev-env-app">
    {{text}}

    <div class="dev-env-app-sub">
      {{text}}
    </div>
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