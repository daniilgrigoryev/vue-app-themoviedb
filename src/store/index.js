import Vue from "vue"
import Vuex from "vuex"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)

// eslint-disable-next-line import/prefer-default-export
export const store = new Vuex.Store({
  actions,
  mutations,
  state: {
    genres: [],
  },
  strict: true,
})
