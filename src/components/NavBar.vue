<template>
  <div v-show="listing = true " id="menu" class="row">
    <nav class="">
      <ol class="halfmenu">
        <li v-for="page in menu" :key="page.titre" class="navbarre text-center">
          <router-link :to="page.uri">
            <strong> {{ page.titre }} </strong>
          </router-link>
        </li>
      </ol>      
    </nav>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { RouterLink } from 'vue-router'
/*export default {
  data () {
    return {
      listing: ''
    }
  },
  mounted () {
    this.$nuxt.$on('falldown', () => {
      const menu = document.getElementById('menu')
      menu.style.display = 'block'
    })
  }
}*/
  const menu = ref([
    { titre: '01.net', uri: '/full/onenet' },
    { titre: 'Developpez.com', uri: '/full//developpez' },
    { titre: 'Numerama', uri: '/full//numerama' },
    { titre: 'Silicon.fr', uri: '/full/silicon' },
    { titre: 'Green IT', uri: '/full/greenit' },
    { titre: 'GauCode', uri: '/full/gaucode' },
    { titre: 'ZD.net', uri: '/full/zdnet' },
    { titre: 'Journal du Net', uri: '/full/jdn' },
    { titre: 'Je Suis Un Dev', uri: '/full/jsdev' },
    { titre: 'Codeur.com', uri: '/full/codeur' },
    { titre: 'Josh Deltener', uri: '/full/JDeltener' },
    { titre: 'Framablog', uri: '/full/framablog' },
    { titre: 'Webrank Info', uri: '/full/webrank' },
    { titre: 'David Parks', uri: '/full/davparks' },
    { titre: 'Alsa Creation', uri: '/full/alsa' },
    { titre: 'Courrier du hacker', uri: '/full/chackers' }
  ])
</script>

<style lang="scss" scoped>
.bar{
  width: 100vw;
}
nav {
  border: 1px solid pink;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.navbarre {
  color: $color-link;
  min-width: 10%;
  background-color: $bann-color;
  padding: 1%;
  border-radius: 10px;
  border: 2px solid $bann-border;
  &:hover {
    box-shadow: 1px 1px 1px green;
    background-color: $bann-border;
    color: $color-linkhover;
  }
}
.halfmenu {
  border: 1px solid green;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
ol {
  list-style: none;
  padding-left: 0px;
  width:40%;
}
li {
  margin: 1%;
  text-align: center;
}

router-link {
  color: $nuxtlink-color;
}
.linktitle {
  color: $linktitle-color;
}
@media screen and (max-width: 992px) {
  .halfmenu {
    flex-direction: column;
  }
}
@media screen and (max-width: 578px) {
  #menu {
    display: none;
  }
}

</style>
