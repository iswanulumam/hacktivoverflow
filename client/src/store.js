import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert'

Vue.use(Vuex)

const baseUrl = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    questions: []
  },
  getters: {
    questions: state => {
      return state.questions
    }
  },
  mutations: {
    'SET_QUESTION' (state, payload) {
      state.questions = payload
    }
  },
  actions: {
    getQuestions ({ commit }) {
      axios.get(`${baseUrl}/api/questions`)
        .then(response => {
          commit('SET_QUESTION', response.data.data)
        }).catch(() => {
          swal('Oops!', 'Something wrong!')
        })
    }
  }
})
