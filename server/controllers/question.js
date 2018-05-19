const { ObjectID } = require('mongodb');
const { Question } = require('./../models/question');
const _ = require('lodash');
const { duplicate } = require('./../lib/duplicate');

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
      // .select('_id text answers')
      .populate('_creator', 'username')
      .populate({
        path: 'answers',
        populate: {
          path: '_creator',
          select: 'username'
        },
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
    Question.findOne({
      _id: id
    }).then((question) => {
      if (!question) {
        return res.status(404).send({
          status: 'error',
          data: [],
          message: 'not found',
        });
      }
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
    })
  },

  upvote(req, res) {
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
      return res.status(404).send({
        status: 'error',
        data: [],
        message: 'not found',
      });
    }
    Question.findById(id)
      .then((question) => {
        let currentVoters = question.voters;
        if (duplicate(currentVoters, req.user._id)) {
          res.status(400).send({
            status: 'error',
            data: [],
            message: 'duplicate votes',
          });
        } else {
          Question.upvote(id, req.user._id)
            .then((vote) => {
              res.status(200).send({
                status: 'oke',
                data: vote,
                message: [],
              });
            })
            .catch((e) => {
              res.status(400).send({
                status: 'error',
                data: [],
                message: e.message,
              });          
            });
        }
      })
  },
}

module.exports = QuestionController;