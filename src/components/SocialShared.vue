<template>
  <div class="row justify-content-center un">
    <div class="col-lg-3 d-flex flex-row justify-content-around">
      Partager:
      <div class="fb-share-button" data-href="https://myveille.herokuapp.com" data-layout="button" data-size="small">
        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmyveille.herokuapp.com%2Famp;src=sdkpreparse" class="fb-xfbml-parse-ignore">
          <!--<i class="fab fa-facebook-square" />-->
          facebook
        </a>
      </div>
      <a href="https://twitter.com/intent/tweet?button_hashtag=share&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-show-count="false">
        <!-- <i class="fab fa-twitter-square" />-->
        twitter
      </a>
    </div>
  </div>
</template>

<script setup>
/*export default {
  head: {
    script: [

      { crossorigin: 'anonymous', src: 'https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v8.0', nonce: 'UFeKuvIL' },
      { src: 'https://platform.twitter.com/widgets.js', charset: 'utf-8' }
    ]
  }
}*/
</script>

<style lang="scss" scoped>
.shared-button {
  color: white;
}
.un {
  width: 100%;
  margin-bottom: 5%;
}
.deux {
  border: 2px solid green;
}
</style>
