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

const Answer = mongoose.model('Answer', answerSchema);

module.exports = { Answer };