<template>
  <div v-show="listing = true " id="menu" class="row">
    <nav class="">
      <div class="halfmenu">
        <ol class="">
            <li v-for="page in listing" :key="page.titre" class="navbarre text-center">
              <router-link :to="page.uri">

              <strong> {{ page.titre }} </strong>
            </router-link>
            </li>
          </ol>
        <!--<ol class="">
          <router-link to="/onenet">
            <li class="navbarre text-center">
              <strong> 01.NET </strong>
            </li>
          </router-link>
          <router-link to="/developpez">
            <li class="navbarre text-center">
              <strong> Developpez.com </strong>
            </li>
          </router-link>
          <router-link to="/numerama">
            <li class="navbarre text-center">
              <strong> Numerama </strong>
            </li>
          </router-link>
          <router-link to="/silicon">
            <li class="navbarre text-center">
              <strong> Silicon.fr </strong>
            </li>
          </router-link>
          <router-link to="/greenit">
            <li class="navbarre text-center">
              <strong> Green IT </strong>
            </li>
          </router-link>
          <router-link to="/gaucode">
            <li class="navbarre text-center">
              <strong> GauCode </strong>
            </li>
          </router-link>
        </ol>-->
        <!-- second quater -->
        <ol class="">
          <router-link to="/zdnet">
            <li class="navbarre text-center">
              <strong> ZD Net </strong>
            </li>
          </router-link>
          <router-link to="/jdn">
            <li class="navbarre text-center">
              <strong> Journal Du Net </strong>
            </li>
          </router-link>
          <router-link to="/jsdev">
            <li class="navbarre text-center">
              <strong> Je Suis Un Dev </strong>
            </li>
          </router-link>
          <router-link to="/evenement">
            <li class="navbarre text-center">
              <strong> Evenement/Webinar </strong>
            </li>
          </router-link>
          <router-link to="/codeur">
            <li class="navbarre text-center">
              <strong> Codeur.com </strong>
            </li>
          </router-link>
        </ol>
      </div><!-- halfmenu-->

      <div class="halfmenu">
        <ol class="">
          <router-link to="/JDeltener">
            <li class="navbarre">
              <strong> Josh Deltener </strong>
            </li>
          </router-link>
          <router-link to="/framablog">
            <li class="navbarre">
              <strong> Framablog </strong>
            </li>
          </router-link>
          <router-link to="/webrank">
            <li class="navbarre">
              <strong> Webrank Info </strong>
            </li>
          </router-link>
          <router-link to="/mylink">
            <li class="navbarre">
              <strong> My Link </strong>
            </li>
          </router-link>
          <router-link to="/davparks">
            <li class="navbarre">
              <strong> David Parks </strong>
            </li>
          </router-link>
        </ol>
        <!-- last quater -->
        <ol class="">
          <router-link to="/encrypt">
            <li class="navbarre">
              <strong> Let's Encrypt </strong>
            </li>
          </router-link>
          <router-link to="/alsa">
            <li class="navbarre">
              <strong> Alsa Création </strong>
            </li>
          </router-link>
          <router-link to="/vuejs">
            <li class="navbarre">
              <strong> Vue.Js </strong>
            </li>
          </router-link>
          <router-link to="/podcastvue">
            <li class="navbarre">
              <strong> Podcast Vue </strong>
            </li>
          </router-link>
          <router-link to="/chackers">
            <li class="navbarre">
              <strong> Courrier du hacker </strong>
            </li>
          </router-link>
        </ol>
      </div><!--halfmenu-->
    </nav>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
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
const listing = ref([
  {titre: '01.net', uri: '/full/onenet'},
  {titre: 'Developpez.com', uri: '/full//developpez'},
  {titre: '01.net', uri: '/full/onenet'},
  {titre: '01.net', uri: '/full/onenet'},
  {titre: '01.net', uri: '/full/onenet'},
  {titre: '01.net', uri: '/full/onenet'},
  {titre: '01.net', uri: '/full/onenet'},
  {titre: '01.net', uri: '/full/onenet'},
  {titre: '01.net', uri: '/full/onenet'},
  {titre: '01.net', uri: '/full/onenet'},
  {titre: '01.net', uri: '/full/onenet'},
  {titre: '01.net', uri: '/full/onenet'},
  {titre: '01.net', uri: '/full/onenet'},
  {titre: '01.net', uri: '/full/onenet'},
  {titre: '01.net', uri: '/full/onenet'},
])
</script>

<style lang="scss" scoped>
.bar{
  width: 100vw;
}
nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.navbarre {
  color: $color-link;
  background-color: $bann-color;
  padding: 2%;
  border-radius: 10px;
  border: 2px solid $bann-border;
  &:hover {
    box-shadow: 1px 1px 1px green;
    background-color: $bann-border;
    color: $color-linkhover;
  }
}
.halfmenu {
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  width: 50%;
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
