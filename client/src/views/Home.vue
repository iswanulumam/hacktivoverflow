<template>
  <div>
    <br>
    <li class="news-item" v-for="question of questions" :key="question._id">
      <span class="score">{{ question.upvote.length - question.downvote.length }}</span>

      <span class="title">
        <router-link :to="{ name: 'detail', params: { id: question._id }}">{{ question.text }}</router-link>
      </span>
      <br>
      <span class="meta">
        <button @click="upvote(question._id)"><span>upvote ({{ question.upvote.length }})</span></button>
        <button @click="downvote(question._id)"><span>downvote ({{ question.downvote.length }})</span></button>
        <span>
          Total vote: {{ question.voters.length }}
        </span>
        -
        <span>
          Question by: {{ question._creator.username }}
        </span>
      </span>
    </li>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import swal from 'sweetalert'

export default {
  name: 'home',
  computed: {
    questions () {
      return this.$store.state.questions
    }
  },
  created: function () {
    this.$store.dispatch('getQuestions')
  },
  methods: {
    upvote: function (questionId) {
      let token = localStorage.getItem('overflow')
      axios.post(`http://localhost:3000/api/questions/${questionId}/upvote`, {}, { headers: { 'x-auth': token } })
        .then(() => {
          swal('success upvote!')
          this.$store.dispatch('getQuestions')
        })
        .catch((e) => {
          swal('error', e.response.data.message)
        })
    },
    downvote: function (questionId) {
      let token = localStorage.getItem('overflow')
      axios.post(`http://localhost:3000/api/questions/${questionId}/downvote`, {}, { headers: { 'x-auth': token } })
        .then(() => {
          swal('success downvote!')
          this.$store.dispatch('getQuestions')
        })
        .catch((e) => {
          swal('error', e.response.data.message)
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
