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
    answer.save().then((result) => {
      let newAnswerId = result._id.toHexString();
      return newAnswerId;
    }).then((answerId) => {
      return Question.addAnswer(questionId, answerId);
    }).then((resultAnswer) => {
      res.status(200).send({
        status: 'oke',
        data: resultAnswer,
        message: [],
      });
    })
    .catch((e) => {
      res.status(400).send({
        status: 'error!',
        data: [],
        message: e,
      });
    });
  },

  upvote(req, res) {
    const answerId = req.params.answer_id;
    if (!ObjectID.isValid(answerId)) {
      return res.status(404).send({
        status: 'error',
        data: [],
        message: 'not found',
      });
    }
    let votersId = req.user._id;
    Answer.upvote(answerId, votersId)
      .then((vote) => {
        res.status(200).send({
          status: 'oke',
          data: vote,
          message: [],
        });
      })
      .catch((e) => {
        res.status(400).send({
          status: 'error!',
          data: [],
          message: e,
        });          
      });
  },

  downvote(req, res) {
    const answerId = req.params.answer_id;
    if (!ObjectID.isValid(answerId)) {
      return res.status(404).send({
        status: 'error',
        data: [],
        message: 'not found',
      });
    }
    let votersId = req.user._id;
    Answer.downvote(answerId, votersId)
      .then((vote) => {
        res.status(200).send({
          status: 'oke',
          data: vote,
          message: [],
        });
      })
      .catch((e) => {
        res.status(400).send({
          status: 'error!',
          data: [],
          message: e,
        });          
      });
  },
}

module.exports = AnswerController;