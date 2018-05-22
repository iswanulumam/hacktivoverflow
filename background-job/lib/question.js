
const QuestionHasNoAnswerYet = (questions) => {
  let countQuestion = 0
  for (let q of questions) {
    if (q.answers.length == 0) {
      countQuestion++
    }
  }
  return countQuestion
};

module.exports = QuestionHasNoAnswerYet;