var express = require('express');
var router = express.Router();
var QuestionController = require('./../controllers/question');
var AnswerController = require('./../controllers/answer');
var { authenticate } = require('./../lib/auth');

// @ question controller
router.post('/', authenticate, QuestionController.create);
router.get('/', QuestionController.find);
router.get('/:id', QuestionController.findOne);
router.post('/:id/upvote', authenticate, QuestionController.upvote);
router.post('/:id/downvote', authenticate, QuestionController.downvote);

// @ answer controller
router.post('/:question_id/answers', authenticate, AnswerController.create);

module.exports = router;