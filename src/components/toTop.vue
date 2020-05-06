<template>
<div id="toTop">
  <a class="upIcon h3" href="#navBar">
    <b-icon icon="arrow-up">
    </b-icon>
  </a>
</div>
</template>
<script>
export default {
  name: "toTop",
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.upIcon {
    color: #eee;
    border-radius: 50%;
    background-color: #00acee;
    padding: 1rem;
    position: fixed;
    bottom: 10vh;
    right: 2rem;
    transition: all 0.1 ease;
}
.upIcon:hover {
    opacity: 0.7;
    color: #eee;
}
</style>
