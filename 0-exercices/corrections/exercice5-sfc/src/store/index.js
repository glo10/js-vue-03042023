import { createStore } from 'vuex'
import {users} from '@/assets/data/users.json'
const store = createStore({
  state: {
    currency: null,
    users: [],
    user: {}
  },
  mutations: {
    currency(state, newCurrency) {
      state.currency = newCurrency
    },
    changeCurrentUser(state, user) {
      state.user = user
    },
    users(state, users) {
      state.users = users
    }
  },
  actions: {
    setCurrency({ commit }, currency) {
      commit('currency', currency)
    },
    changeCurrentUser({ commit }, user) {
      commit('changeCurrentUser', user)
    },
    async getUsers({ commit }) {
        try {
          let i = 0
          const usersStore = []
          for (; i < users.length; i++) {
            let user = await fetch(`https://api.github.com/users/${users[i]}`)
            user = await user.json()
            usersStore.push(user)
          }
          commit('users', usersStore)
        }
        catch (error) {
          console.log('error', error)
        }
      },
  },
  getters: {
    users(state) {
      return state.users
    },
    totalUsers(state, getters) {
      return getters.users.length
    },
    current: state => state.user,
    currency: state => state.currency
  }
})
export default store
