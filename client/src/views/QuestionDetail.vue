<template>
  <div>
    <br>
    <div class="news-item">
      <span class="title">
        What is your name ?
      </span>
      <br>
      <span class="meta">
        <span>
          By: Iswanul Umam
        </span>
        <button>New Answer</button>
      </span>
      <br>
    </div>
    <br>

    <li class="news-item">
      <span class="score">8</span>
      <span class="title">
        What is your name ?
      </span>
      <br>
      <span class="meta">
        <span>
          By: Iswanul Umam
        </span>
        <button><span>upvote</span></button>
        <button><span>downvote</span></button>
      </span>
    </li>
    <li class="news-item">
      <span class="score">8</span>
      <span class="title">
        What is your name ?
      </span>
      <br>
      <span class="meta">
        <span>
          By: Iswanul Umam
        </span>
        <button><span>upvote</span></button>
        <button><span>downvote</span></button>
      </span>
    </li>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'question detail',
  components: {

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
