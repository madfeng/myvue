import Vue from 'vue'
import Vuex from 'vuex'

import menu from './module/menu'
import user from './module/user'
import status from './module/status'
Vue.use(Vuex)

export const store = new Vuex.Store({
  modules:{
    menu,
    user,
    status
  }
})
