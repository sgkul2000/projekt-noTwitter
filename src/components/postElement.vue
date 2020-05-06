<template>
<div id="postElement" class="my-3">
  <div class="row flexCenter text-center">
    <div class="col-md-10">
      <b-card class="text-left mx-4" :title="post.title" :sub-title="'user: ' + post.userId.toString()">
        <b-card-text>
          {{ post.body }}
        </b-card-text>
      </b-card>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "postElement",
  props: ['post'],
  data() {
    return {

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
