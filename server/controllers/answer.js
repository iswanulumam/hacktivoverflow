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

    answer.save().then(answer => {
      let answerId = answer._id;
      Question.findById(questionId)
        .then(question => {
          question.answers.push(answerId);
          question.save();
          res.status(201).send({
            status: 'oke',
            data: question,
            message: [],
          });
        }).catch((e) => {
          res.status(400).send({
            status: 'error',
            data: [],
            message: e.message,
          });          
        });
    }).catch((e) => {
      res.status(400).send({
        status: 'error',
        data: [],
        message: e.message,
      });
    })
  },
}

module.exports = AnswerController;