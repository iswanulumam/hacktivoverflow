import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert'

Vue.use(Vuex)

const baseUrl = 'http://api.hacktivoverflow.iamsuperpowers.com'

export default new Vuex.Store({
  state: {
    questions: [],
    questions_one: []
  },
  getters: {
    questions: state => {
      return state.questions
    }
  },
  mutations: {
    'SET_QUESTION' (state, payload) {
      state.questions = payload
    },
    'SET_QUESTION_ONE' (state, payload) {
      state.questions_one = payload
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
    },
    getQuestionsById ({ commit }, questionsId) {
      axios.get(`${baseUrl}/api/questions/${questionsId}`)
        .then(response => {
          commit('SET_QUESTION_ONE', response.data.data)
        }).catch(() => {
          swal('Oops!', 'Something wrong!')
        })
    }
  }
})
