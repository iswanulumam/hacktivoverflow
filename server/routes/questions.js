var express = require('express');
var router = express.Router();
var QuestionController = require('./../controllers/question');
var AnswerController = require('./../controllers/answer');
var { authenticate } = require('./../lib/auth');

router.post('/', authenticate, QuestionController.create);
router.get('/', QuestionController.find);
router.post('/:question_id/answers', authenticate, AnswerController.create);
router.get('/:id', QuestionController.findOne);
router.post('/:id/upvote', authenticate, QuestionController.upvote);
// router.get('/:id', QuestionController.findOne);
// router.patch('/:id', authenticate, QuestionController.update);
// router.delete('/:id', authenticate, QuestionController.delete);

module.exports = router;