<template>
  <div>
    <br>
    <li class="news-item" v-for="question of questions" :key="question._id">
      <span class="score">{{ question.upvote.length - question.downvote.length }}</span>
      <span class="title">
        {{ question.text }}
      </span>
      <br>
      <span class="meta">
        <button><span>upvote</span></button>
        <button><span>downvote</span></button>
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

export default {
  name: 'home',
  computed: {
    questions () {
      return this.$store.state.questions
    }
  },
  created: function () {
    this.$store.dispatch('getQuestions')
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
