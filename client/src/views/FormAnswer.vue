<template>
  <div>
    <br>
    <div class="news-item">
      <span class="title">
        <h2>Add Answer</h2>
      </span>
      <div>
        <label>Answer</label>
        <input type="text" v-model="text">
      </div>
      <button class="button" @click="postAnswer($route.params.id)">Add Answer</button>
      <br>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import swal from 'sweetalert'

export default {
  name: 'FormAnswer',
  data () {
    return {
      text: ''
    }
  },
  created () {
    let token = localStorage.getItem('overflow')
    if (!token) {
      this.$router.push({ name: 'login' })
    }
  },
  methods: {
    postAnswer: function (questionsId) {
      let token = localStorage.getItem('overflow')
      let payload = {
        text: this.text
      }
      axios.post(`http://localhost:3000/api/questions/${questionsId}/answers`, payload, { headers: { 'x-auth': token } })
        .then(() => {
          swal('Horrey', 'Answer created!')
          this.$router.push({ name: 'detail', params: { id: questionsId } })
        }).catch((e) => {
          swal('Oopss', e.response.data.message)
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
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}
input[type=text]:focus {
  border: 3px solid #555;
}
.button {
  border: none;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  background-color: #e7e7e7; color: black;
}
</style>
