<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import MyHeader from './components/MyHeader.vue'
  import MyFooter from './components/MyFooter.vue'
  import GithubCnx from './components/GithubCnx.vue'
  import NavBar from './components/NavBar.vue'
</script>

<template>
  <div id="main">
    <MyHeader />
    <NavBar />
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
