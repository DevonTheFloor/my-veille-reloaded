<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import MyHeader from './components/MyHeader.vue'
  import MyFooter from './components/MyFooter.vue'
  import GithubCnx from './components/GithubCnx.vue'
  import TestNav from './components/TestNav.vue'
</script>

<template>
  <div id="main">
    <MyHeader />
    <TestNav />
    <GithubCnx />
    <RouterView />
    <MyFooter />
  </div>
</template>

<style lang="scss">
  html {
    width:100%;
    background-color: $bg;
  }
  body {
    margin: 0px;
    width: 100%;
  }
  #main {
    background-color: $bg;
    width: 100%;
  }
</style>
