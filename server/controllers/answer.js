const { ObjectID } = require('mongodb');
const { Answer } = require('./../models/answer');
const { Question } = require('./../models/question');
const _ = require('lodash');

const AnswerController = {
  create(req, res) {
    const values = req.body;
    const questionId = req.params.question_id;
    const answer = new Answer({
      text: values.text,
      _question: questionId,
      _creator: req.user._id,
    });
    res.send(answer);
  },
}

module.exports = AnswerController;