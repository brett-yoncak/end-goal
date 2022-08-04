import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
        loggedIn: false,
        currentEndGoal: '',
        endGoals: [],
        tasks: [],
        archives: []
    }
  },

  getters: {

  },

  mutations: {
  },

  actions: {

  },
  modules: {

  }
})

export default store
