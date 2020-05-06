<template>
<div id="tribute">
  <div class="container-fluid bgSet flexCenter">
    <div class="row">
      <div class="tributeTo">
        // Dedicated to X Æ A-12
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "tribute",
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
// #tribute {
//     position: fixed;
//     bottom: 0;
//     left: 0;
// }
.bgSet {
    width: 100vw;
    height: 8vh;
    background-color: #333;
    color: #ccc;
}
.flexCenter {
    display: flex;
    align-items: center;
    // justify-content: center;
}
.tributeTo {
    margin-left: 4rem;
}
</style>
