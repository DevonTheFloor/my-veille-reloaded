<script setup>
  import { RouterLink, RouterView, useRouter } from 'vue-router'
  import { ref } from 'vue';
  import LogoVeille from './LogoVeille.vue';
  import ConnectedNav from './ConnectedNav.vue';
  import GithubCnx from './GithubCnx.vue';

  const router = useRouter();
  const avatarUrl = ref(null);
  const login = ref(null);
  const connected = ref(false);

</script>

<template>
  <div class="row">
    <header class="bann">
      <ConnectedNav />
      <div class="home">
        <LogoVeille class="deco" />
        <div class="titrage">
          <router-link to="/">
            <div>
              <h1 class="dark titre">My Veille
                <!--<strong>My Veille</strong>-->
              </h1>
              <h2 class="dark sub-head-title">
                <!--<strong>Veille technologique sur le développement web et l'actualité de l'internet.</strong>-->Veille technologique sur le développement web et l'actualité de l'internet.
              </h2>
              <h2 class="sub-title-mobile">
                Dev Web
              </h2>
            </div>
          </router-link>
        </div>
      </div>
    </header>
  </div>
</template>



<style lang="scss" scoped>
  #github {
    width: 100%;
  }
  #btn-git {
    display:block;
    margin: auto;
  }
  .userlog {
    background-color: rgba(245, 233, 233, 0.829);
    border-radius: 5px;
  }
  .login {
    color: white;
  }
  .avatar {
    width: 60%;
    height: auto;
    border: 7px solid $bann-border;
    border-radius: 45%;
  }
  .sub-title-mobile {
    display:none;
  }
  header {
    background-color: $bg;
    padding: 2%;
    font-family: 'Cinzel Decorative', cursive;
    background-image: url('../assets/images/intra/internet-min.jpg');
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center;
  }
  .navFont {
    font-family: 'Fraunces', serif;
    inline-size: auto;
  }
  .home {
    padding-left:3%;
  }
  h1 {
    font-size: 5em;
  }
  .dark {
    color: white;
  }
  .home {
    transform: scale(1);
    transition: transform 1500ms cubic-bezier(.32, 0, .07, 1);
  }

  .sub-head-title {
    font-size: 1.4em;
    color: $color-linkhover;
    max-width: 25%;
  }
  .userid0 {
    border: 2px solid red;
  }
  .userbloc0 {
    border: 2px solid orange;
  }
  .disco {
    cursor: pointer;
  }
  @media screen and (max-width:997px) {
    header {
      background-image: url('../asserts/images/intra/internet-900.jpg');
      background-repeat: no-repeat;
      background-size: cover;
    }
    h1 {
      font-size: 4em;
    }
    .sub-head-title {
      font-size: 1.2em;
      max-width: 25%;
    }
  }
  @media screen and (max-width:767px) {
    header {
      background-image: url('../asserts/images/intra/internet-700.jpg');
      background-repeat: no-repeat;
      background-size: cover;
    }
    h1 {
      font-size: 3em;
    }
    .sub-head-title {
      font-size: 1.1em;
      max-width: 40%;
    }
    .avatar {
      width: 25%;
    }
  }

  @media screen and (max-width: 575px){
    header {
      background-image: url('../asserts/images/intra/internet-500.jpg');
      background-repeat: no-repeat;
      height: cover;
    }
    h1 {
      font-size: 4rem;
      padding: 6%;
      }
      .sub-title-mobile {
        color:white;
        font-size: 2em;
        display: block;
      }
    .sub-head-title {
      display: none;
    }
    .deco {
      display: none;
    }
    .userbloc {
      display: flex;
      flex-direction: column;
    }
    .avatar {
      width: 25%;
    }
  }
  @media screen and (max-width: 433px) {
    h1{
      font-size: 3.6em;
    }
    .avatar {
    width: 30%;
    border: 3px solid $bann-border;
    border-radius: 45%;
    }
  }
</style>