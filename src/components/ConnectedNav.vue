<template>
  <div v-show="connected" class="row userid">
    <div class="row userbloc">
      <ol class="userlog">
        <li class="navFont">
          <router-link :to="'/userspages/myune/' + login" class="navbarre">
              <strong class="">My Une</strong>
          </router-link>
        </li>
        <li class="navFont">
          <router-link :to="'/userspages/alire/' + login" class="navbarre">
            <strong>A lire</strong>
          </router-link>
        </li>
        <li class="navFont navbarre disco" @click="disconnect">
          <strong>Déconnexion</strong>
        </li>
      </ol>
      <figure>
        <router-link :to="'/dashboard/' + login" class="">
          <img :src="avatarUrl" class="avatar">
        </router-link>
      </figure>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  const login = ref(null)
</script>

<style lang="scss" scoped>

</style>