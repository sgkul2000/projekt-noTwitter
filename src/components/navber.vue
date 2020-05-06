<template>
<div id="navbar">
  <b-navbar type="dark" variant="primary">
    <b-navbar-brand class="ml-2" href="#">
      <span class="fa-stack fa-1x">
        <i class=" fab fa-twitter fa-stack-1x twitterIcon"></i>
        <i class="fas fa-ban fa-stack-2x twitterIcon" style="color:Tomato"></i>
      </span>
    </b-navbar-brand>
    <div class="ml-auto mr-2 hashtag">
      #TwittersGotNoChill
    </div>
  </b-navbar>
</div>
</template>
<script>
export default {
  name: "navber",
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

.bg-primary {
    background-color: #00acee !important;
}

.hashtag {
    font-family: sans-serif;
    font-weight: 600;
    color: #eee;
    text-shadow: 1px 1px rgba(35, 37, 38, 0.6);
}
</style>
