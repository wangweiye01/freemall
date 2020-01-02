import Vue from 'vue'
import Vuex from 'vuex'
import settings from './modules/settings'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    settings
  },
  getters
})

export default store