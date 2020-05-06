module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import './node_modules/bootstrap/scss/bootstrap';
        @import './node_modules/bootstrap-vue/src/index.scss';
        @import '@/styles/_variables.scss'
        `
      }
    }
  }
};
