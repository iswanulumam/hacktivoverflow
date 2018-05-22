require('dotenv').config()
const CronJob = require('cron').CronJob
const axios = require('axios')
const QuestionHasNoAnswerYet = require('./lib/question')
const channel = require('./lib/telegram')


const baseUrl = `http://api.hacktivoverflow.iamsuperpowers.com`

const config = {
  telegramToken: process.env.TELEGRAM_TOKEN,
  groupId: -260568771,
  interval: '*/30 * * * *'
}

let job = new CronJob(config.interval, function() {
  console.log(`cron execute at: ${new Date()}`)
  axios.get(`${baseUrl}/api/questions`)
  .then((response) => {
    let questions = response.data.data
    let total = QuestionHasNoAnswerYet(questions)
    if (total > 0) {
      let data = `Message from HacktivoverflowBot bot.\nMany question has not answered yet. total questions is (${total}).\n${new Date()}`
      channel.send(config.telegramToken, config.groupId, data)
    }
  }).catch((e) => {
    console.log(e)
  })
}, null, true)