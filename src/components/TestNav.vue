<template>
  <div>
    <nav>
      <ol>
        <li v-for="page in listing" :key="page.titre">
          <router-link :to="page.uri" class="red">
            {{ page.titre }}
          </router-link>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import { RouterLink } from 'vue-router';
const listing = ref(
  [
    {titre: 'Première page', uri: '/premiere-page'},
    {titre: 'Deuxième page', uri: '/deuxieme-page'}
  ]
)

</script>

<style lang="scss" scoped>
.red {
  color: red;
}
</style>