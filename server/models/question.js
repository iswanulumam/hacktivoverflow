const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { duplicate } = require('./../lib/duplicate');

const questionSchema = new Schema({
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  _creator: {
    type: Schema.Types.ObjectId, ref: 'User',
    required: true
  },
  answers: [{
      type: Schema.Types.ObjectId, ref: 'Answer',
      required: true,
  }],
  voters: [{
    type: Schema.Types.ObjectId, ref: 'User',
    require: true,
    unique : true,
  }],
  upvote: [{
    type: Schema.Types.ObjectId, ref: 'User',
    unique : true,
    require: true
  }],
  downvote: [{
    type: Schema.Types.ObjectId, ref: 'User',
    unique : true,
    require: true
  }],
}, {
  timestamps: true
});

questionSchema.statics.upvote = function(questionId, voterId) {
  let Question = this;
  return Question.findById(questionId)
  .then(question => {
    if (question._creator.toHexString() == voterId) {
      return Promise.reject(`You can't vote your own question`);
    }
    let currentVoters = question.voters;
    if (duplicate(currentVoters, voterId)) {
      return Promise.reject('You have finished vote!');
    }
    question.voters.push(voterId);
    question.upvote.push(voterId);
    return question.save();
  })
}

questionSchema.statics.downvote = function(questionId, voterId) {
  let Question = this;
  return Question.findById(questionId)
  .then(question => {
    if (question._creator.toHexString() == voterId) {
      return Promise.reject(`You can't vote your own question`);
    }
    let currentVoters = question.voters;
    if (duplicate(currentVoters, voterId)) {
      return Promise.reject('You have finished vote!');
    }
    question.voters.push(voterId);
    question.downvote.push(voterId);
    return question.save();
  })
}

questionSchema.statics.addAnswer = function(questionId, answerId) {
  let Question = this;
  return Question.findById(questionId)
    .then(question => {
      question.answers.push(answerId);
      return question.save();
    })
}

const Question = mongoose.model('Question', questionSchema);

module.exports = { Question };