import Vue from  'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  step: 0
}

const mutations = {
  INCREMENT (state, amount) {
    state.step = state.step + amount
  },

  DECREMENT (state, amount) {
      state.step = state.step - amount
  }

}

export default new Vuex.Store({
  state,
  mutations
})
