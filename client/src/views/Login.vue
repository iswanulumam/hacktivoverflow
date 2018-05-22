<template>
  <div>
    <br>
    <div class="news-item">
      <span class="title">
        <h2>Login form</h2>
      </span>
      <div>
        <label>Email</label>
        <input type="text" placeholder="E-mail address" v-model="email">
        <label>Password</label>
        <input type="password" placeholder="Password" v-model="password">
      </div>
      <button class="button" @click="login">Login</button>
      <br>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios'
import swal from 'sweetalert'

const baseUrl = 'http://api.hacktivoverflow.iamsuperpowers.com'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      token: ''
    }
  },
  created () {
    let token = localStorage.getItem('overflow')
    if (token) {
      this.$router.push({ name: 'home' })
    }
  },
  methods: {
    login: function () {
      let payload = {
        email: this.email,
        password: this.password
      }
      axios.post(`${baseUrl}/api/users/login`, payload)
        .then(response => {
          this.token = response.data.data.tokens[0].token
          localStorage.setItem('overflow', this.token)
          this.$router.push({ name: 'home' })
        })
        .catch(() => {
          swal('Oops!', 'Something went wrong!')
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
input[type=password] {
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
input[type=password]:focus {
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
