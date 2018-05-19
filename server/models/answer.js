const mongoose = require('mongoose');
const { duplicate } = require('./../lib/duplicate');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
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
  _question: {
    type: Schema.Types.ObjectId, ref: 'Question',
  },
  voters_answer: [{
    type: Schema.Types.ObjectId, ref: 'User',
    require: true,
  }],
  upvote_answer: [{
    type: Schema.Types.ObjectId, ref: 'User',
    require: true
  }],
  downvote_answer: [{
    type: Schema.Types.ObjectId, ref: 'User',
    require: true
  }],
}, {
  timestamps: true
});

answerSchema.statics.upvote = function(answerId, voterId) {
  let Answer = this;
  return Answer.findById(answerId)
    .then(answer => {
      if (answer._creator.toHexString() == voterId) {
        return Promise.reject(`You can't vote your own answer`);
      }
      let currentVoters = answer.voters_answer;
      if (duplicate(currentVoters, voterId)) {
        return Promise.reject('You have finished vote!');
      }
      answer.voters_answer.push(voterId);
      answer.upvote_answer.push(voterId);
      return answer.save();
  })
}

answerSchema.statics.downvote = function(answerId, voterId) {
  let Answer = this;
  return Answer.findById(answerId)
    .then(answer => {
      if (answer._creator.toHexString() == voterId) {
        return Promise.reject(`You can't vote your own answer`);
      }
      let currentVoters = answer.voters_answer;
      if (duplicate(currentVoters, voterId)) {
        return Promise.reject('You have finished vote!');
      }
      answer.voters_answer.push(voterId);
      answer.downvote_answer.push(voterId);
      return answer.save();
  })
}

const Answer = mongoose.model('Answer', answerSchema);

module.exports = { Answer };