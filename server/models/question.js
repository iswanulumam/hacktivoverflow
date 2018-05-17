const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  upvoters: {
    type: Schema.Types.ObjectId, ref: 'User',
  },
  downvoters: {
    type: Schema.Types.ObjectId, ref: 'User',
  },
}, {
  timestamps: true
});

// questionSchema.statics.addAnswer = function(questionId, answerId) {
//   let questions = this;
//   questions.findById(questionId).then((question) => {
//     question.push({ answerId });
//     return question.save();
//   })
// }

const Question = mongoose.model('Question', questionSchema);

module.exports = { Question };

// Image.find().populate('userId', 'username')