<template>
<div id="loading">
  <div class="loadingIcon flexCenter h4">
    <b-icon icon="arrow-clockwise" animation="spin" font-scale="2"></b-icon>
  </div>
</div>
</template>
<script>
export default {
  name: "loading",
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
#loading {
    width: 100vw;
}

.loadingIcon {
    margin-top: 2rem;
}
.flexCenter {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
