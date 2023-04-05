import {createStore} from 'vuex'
import state from '@/store/state.js'
const store = createStore({
  // state
  state,
  // mutations
  mutations: {
    increment(state) {
      state.total++
    },
    decrement(state) {
      state.total--
    },
    newUser(state, user) {
      state.users.push(user)
    }
  },
  // actions
  actions: {
    increment({commit}) {
      commit('increment')
    },
    decrement({commit}) {
      commit('decrement')
    },
    newUser({commit}, user) {
      commit('newUser', user)
    }
  },
  // [getters]
  getters: {
    totalToString(state) {
      return `Le total est de ${state.total}`
    },
    total(state) {
      return state.total
    }
  }
})
export default store