const mongoose = require('mongoose');
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

const Answer = mongoose.model('Answer', answerSchema);

module.exports = { Answer };