import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import QuestionDetail from './views/QuestionDetail.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import FormQuestion from './views/FormQuestion.vue'
import FormAnswer from './views/FormAnswer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/newquestion',
      name: 'newquestion',
      component: FormQuestion
    },
    {
      path: '/answer/:id',
      name: 'answer',
      component: FormAnswer
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: QuestionDetail
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
