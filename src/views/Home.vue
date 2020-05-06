<template>
<div class="home">
  <navbar id="navBar" />
  <landingComp />
  <postWrapper />
  <toTop />
</div>
</template>

<script>
import navbar from '../components/navber.vue'
import landingComp from '../components/landingComp.vue'
import postWrapper from '../components/postWrapper.vue'
import toTop from '../components/toTop.vue'


export default {
  name: 'Home',
  components: {
    navbar,
    landingComp,
    postWrapper,
    toTop
  }
}
</script>
