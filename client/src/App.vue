<template>
  <div id="app">
    <header class="header">
      <nav class="inner">
        <router-link to="/" exact>
        </router-link>
        <router-link to="/">Home</router-link>
        <router-link to="/newquestion">New Question</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
        <a @click="logout">Logout</a>
        <router-link class="github" to="/">HacktivOverflow</router-link>
      </nav>
    </header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import swal from 'sweetalert'

export default {
  methods: {
    logout: function () {
      let token = localStorage.getItem('overflow')
      if (token) {
        localStorage.removeItem('overflow')
        swal('Info!', 'Logout success', 'success')
      } else {
        swal('Info!', 'Login first to logout', 'info')
        // this.$router.push({ name: 'login' })
      }
    }
  }
}
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 15px;
  background-color: #f2f3f5;
  margin: 0;
  padding-top: 55px;
  color: #34495e;
  overflow-y: scroll;
}
a {
  color: #34495e;
  text-decoration: none;
}
.header {
  background-color: orange;
  position: fixed;
  z-index: 999;
  height: 55px;
  top: 0;
  left: 0;
  right: 0;
}
.header .inner {
  max-width: 800px;
  box-sizing: border-box;
  margin: 0px auto;
  padding: 15px 5px;
}
.header a {
  color: rgba(255,255,255,0.8);
  line-height: 24px;
  transition: color 0.15s ease;
  display: inline-block;
  vertical-align: middle;
  font-weight: 300;
  letter-spacing: 0.075em;
  margin-right: 1.8em;
}
.header a:hover {
  color: #fff;
}
.header a.router-link-active {
  color: #fff;
  font-weight: 400;
}
.header a:nth-child(6) {
  margin-right: 0;
}
.header .github {
  color: #fff;
  font-size: 0.9em;
  margin: 0;
  float: right;
}
.logo {
  width: 24px;
  margin-right: 10px;
  display: inline-block;
  vertical-align: middle;
}
 .view {
   max-width: 800px;
   margin: 0 auto;
   position: relative;
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
@media (max-width: 860px) {
  .header .inner {
    padding: 15px 30px;
  }
}
@media (max-width: 600px) {
  .header .inner {
    padding: 15px;
  }
  .header a {
    margin-right: 1em;
  }
  .header .github {
    display: none;
  }
}
</style>
