<template>
  <div>
    <a href="https://github.com/login/oauth/authorize?client_id=bea05b3f209c8e186302">
      <button v-show="btn_connexion" class="cnx-btn">
        Se connecter <img :src=githubImg>
      </button>
    </a>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  import githubImg from '../assets/images/intra/github-icon.png'
  const btn_connexion = ref(true);
/*export default {
  data () {
    return {
      btn_connexion: true
    }
  },
  created () {
  },
  beforeMount () {
  },
  mounted () {
    this.$nuxt.$on('login-nav', () => {
      this.btn_connexion = false
    })
  }
}*/
</script>

<style lang="scss" scoped>
.cnx-btn {
  border: 4px solid $bann-border;
  border-radius: 10px;
  padding: 3px;
  font-size: 1em;
  &:active {
    color: white;
    background-color: rgb(75, 70, 70);
    border: 4px solid white;
  }
}
.fa-github {
  font-size: 1.5em;
}
img {
  width: 35px;
  vertical-align: middle;
}
button {
  &:hover {
    cursor: pointer;
  }
}
</style>
