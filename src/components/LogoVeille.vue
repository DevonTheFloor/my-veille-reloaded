<template>
  <div>
    <figure>
      <img class="NuxtLogo" src="@/assets/images/intra/hubbleMini.jpg">
    </figure>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .NuxtLogo {
    animation: 3s appear;
    margin: auto;
    width: 10%;
    border-radius: 10px;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
  }
</style>