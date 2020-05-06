<template>
<div id="landingComp">
  <div class="container-fluid">
    <div class="container text-left py-4">
      <h4 class="display-4">Posts</h4>
    </div>
    <div class="row flexCenter text-center">
      <div class="col-md-10">
        <b-alert v-model="sys.showDismissibleAlert" variant="success" dismissible>
          This is a simple project to implement Lazy Loaded pagination in Vue.js
        </b-alert>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "landingComp",
  data() {
    return {
      sys: {
        showDismissibleAlert: true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.flexCenter {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
