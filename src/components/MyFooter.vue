<template>
  <div class="row">
    <footer class="bann">
      <ul class="col-sm-12 d-flex justify-content-around menuf">
        <li><a href="https://fr.nuxtjs.org/guide/" target="_blank"> Nuxt.js</a> </li>
        <a href="#haut">
          <li><i class="fas fa-arrow-circle-up" ></i></li>
        </a>
      </ul>
      <div id="signature">Create with love by <a href="https://thierry-go-dev.fr">https://thierry-go-dev.fr</a></div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
  const url = ref('')
</script>

<style lang="scss" scoped>
  footer {
    color: whitesmoke;
    margin-top: 2%;
    width: 100%;
    background-color: $bann-color;
  }
  .fa-arrow-circle-up {
    line-height: 2.5em;
    font-size: 1.2em;
  }
  #signature {
    text-align: center;
  }
</style>
