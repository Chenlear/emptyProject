import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '123456'
  },
  mutations: {
    setToken (state, value) {
      localStorage.setItem('token', value)
      state.token = value
    }
  }
})
