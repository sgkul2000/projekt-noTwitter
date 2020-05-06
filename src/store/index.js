import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'


Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {},
  plugins: [createPersistedState({
    storage: {
      getItem: key => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value, {
        expires: 3,
        secure: true
      }),
      removeItem: key => Cookies.remove(key)
    }
  })],
})
