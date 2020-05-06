<template>
<div id="postWrapper">
  <div class="container-fluid">
    <transition-group tag="div" name='listAnime'>
      <div class="forLoop" v-for="post in postList" :key="post.id">
        <postElement :post='post' />
      </div>
    </transition-group>
  </div>
  <loading v-if="this.sys.isloading" />
  <tribute />
</div>
</template>
<script>
import postElement from './postElement.vue'
import loading from './loading.vue'
import tribute from './tribute.vue'
import getAPIData from '../getAPIData'

export default {
  name: "postWrapper",
  data() {
    return {
      sys: {
        index: 0,
        isloading: false,
        end: false,
        maxLength: 10,
      },
      postList: [],
    }
  },
  components: {
    postElement,
    loading,
    tribute
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight > document.documentElement.offsetHeight - 20
        if (bottomOfWindow && !this.sys.end && !this.sys.isloading) {
          this.lazyLoader()
        }
      }
    },
    async lazyLoader() {
      this.sys.isloading = true
      let tempList = await getAPIData.getPosts(this.sys.index)
      if (this.sys.index === this.sys.maxLength) {
        this.sys.end = true
      }
      this.sys.index = this.sys.index + 10
      this.postList.push(...tempList)
      this.sys.isloading = false
    }
  },
  async created() {
    this.postList = await getAPIData.getPosts(this.sys.index)
    this.sys.maxLength = await getAPIData.getPostsLen()
    this.sys.index = this.sys.index + 10
  },
  mounted() {
    this.scroll();
  }
}
</script>
<style lang="scss" scoped>
.listAnime-enter-active,
.listAnime-leave-active {
    transition-delay: 0.5s;
    transition: all 0.8s ease;
}
.listAnime-enter,
.listAnime-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

.flexCenter {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
