var express = require('express');
var router = express.Router();
var QuestionController = require('./../controllers/question');
var AnswerController = require('./../controllers/answer');
var { authenticate } = require('./../lib/auth');

// @ question router
router.post('/', authenticate, QuestionController.create);
router.get('/', QuestionController.find);
router.get('/:id', QuestionController.findOne);
router.delete('/:id', authenticate, QuestionController.destroy);
router.post('/:id/upvote', authenticate, QuestionController.upvote);
router.post('/:id/downvote', authenticate, QuestionController.downvote);

// @ answer router
router.post('/:question_id/answers', authenticate, AnswerController.create);
router.post('/answers/:answer_id/upvote', authenticate, AnswerController.upvote);
router.post('/answers/:answer_id/downvote', authenticate, AnswerController.downvote);

module.exports = router;