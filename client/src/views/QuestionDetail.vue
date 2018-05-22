<template>
  <div>
    <br>
    <div class="news-item" v-if="question">
      <span class="score">{{ question.upvote.length - question.downvote.length }}</span>
      <span class="title">
        {{ question.text }}
      </span>
      <br>
      <span class="meta">
        <span v-if="question.voters.length">
          Total vote: {{ question.voters.length }} -
        </span>
        <span>
          Question by: {{ question._creator.username }}
        </span>
        <router-link :to="{ name: 'answer', params: { id: question._id }}">Make Answer</router-link>
      </span>
      <br>
    </div>
    <br>
    <li class="news-item" v-for="answer of answers" :key="answer._id">
      <span class="score">{{ answer.upvote_answer.length - answer.downvote_answer.length }}</span>
      <span class="title">
        {{ answer.text }}
      </span>
      <br>
      <span class="meta">
        <span>
          By: {{ answer._creator.username }}
        </span>
        <button @click="upvoteAnswer(answer._id)"><span>upvote ({{ answer.upvote_answer.length }})</span></button>
        <button @click="downvoteAnser(answer._id)"><span>downvote ({{ answer.downvote_answer.length }})</span></button>
      </span>
    </li>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import swal from 'sweetalert'

const baseUrl = 'https://api.hacktivoverflow.iamsuperpowers.com'

export default {
  name: 'questionDetail',
  computed: {
    question () {
      return this.$store.state.questions_one
    },
    answers () {
      return this.$store.state.questions_one.answers
    }
  },
  beforeCreate: function () {
    let questionId = this.$route.params.id
    this.$store.dispatch('getQuestionsById', questionId)
  },
  methods: {
    upvoteAnswer: function (answerId) {
      let token = localStorage.getItem('overflow')
      axios.post(`${baseUrl}/api/questions/answers/${answerId}/upvote`, {}, { headers: { 'x-auth': token } })
        .then(() => {
          swal('success upvote answer!')
          this.$store.dispatch('getQuestionsById', answerId)
        })
        .catch((e) => {
          swal('Messages', e.response.data.message)
        })
    },
    downvoteAnser: function (answerId) {
      let token = localStorage.getItem('overflow')
      axios.post(`${baseUrl}/api/questions/answers/${answerId}/downvote`, {}, { headers: { 'x-auth': token } })
        .then(() => {
          swal('success downvote answer!')
          this.$store.dispatch('getQuestionsById', answerId)
        })
        .catch((e) => {
          swal('Messages', e.response.data.message)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.news-item {
  padding: 100px;
  background-color: #fff;
  padding: 20px 30px 20px 80px;
  border-bottom: 1px solid #eee;
  position: relative;
  line-height: 20px;
}
.news-item .score {
  color: #f60;
  font-size: 1.1em;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 0;
  width: 80px;
  text-align: center;
  margin-top: -10px;
}
.news-item .meta, .news-item .host {
  font-size: 0.85em;
  color: #828282;
}
.news-item .meta a, .news-item .host a {
  color: #828282;
  text-decoration: underline;
}
.news-item .meta a:hover, .news-item .host a:hover {
  color: #f60;
}
</style>
