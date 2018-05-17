const { ObjectID } = require('mongodb');
const { Question } = require('./../models/question');
const _ = require('lodash');

const QuestionController = {
  create(req, res) {
    const values = req.body;
    const question = new Question({
      text: values.text,
      _creator: req.user._id,
    });
    question.save().then(question => {
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
    })
  },

  find(req, res) {
    Question.find({})
      .populate('_creator', 'username')
      .populate({
        path: 'answers',
        populate: {
          path: '_creator',
        }
      })
      .then((question) => {
      res.status(200).send({
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
  },

  findOne(req, res) {
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
      return res.status(404).send({
        status: 'error',
        data: [],
        message: 'not found',
      });
    }
    Article.findOne({
      _id: id
    }).then((article) => {
      if (!article) {
        return res.status(404).send({
          status: 'error',
          data: [],
          message: 'not found',
        });
      }
      res.status(200).send({
        status: 'oke',
        data: article,
        message: [],
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

module.exports = QuestionController;