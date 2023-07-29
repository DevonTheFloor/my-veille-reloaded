<template>
  <div class="row">
    <div class="col-sm-12 bann">
      <i class="fas fa-align-justify icon" @click="seemenu" />
    </div>
  </div>
</template>

<script setup>
/*export default {
  methods: {
    seemenu () {
      this.$nuxt.$emit('falldown')
    }
  }
}*/
</script>

<style lang="scss" scoped>
.icon {
  cursor: pointer;
  display: none;
  font-size: 1.5em;
  color: $bann-border;
  margin: 1%;
}

@media screen and (max-width: 578px) {
  .icon {
    display: block;
  }
}
</style>
