import Vue from 'vue'
import Vuex from 'vuex'
import storage from 'store'

Vue.use(Vuex)

const user = {
  state: {
    user: storage.get('user') || {}
  },
  mutations: {
    change_user (state, user) {
      state.user = user
      storage.set('user', state.user)
    }
  },
  actions: {
    exit (context) {
      context.commit('change_user', {})
    }
  }
}
export default new Vuex.Store({
  modules: {
    user: user
  }
})
