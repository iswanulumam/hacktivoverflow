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
  upvoters: {
    type: Schema.Types.ObjectId, ref: 'Question',
  },
  downvoters: {
    type: Schema.Types.ObjectId,  ref: 'Question',
  },
}, {
  timestamps: true
});

const Answer = mongoose.model('Answer', answerSchema);

module.exports = { Answer };