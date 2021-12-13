const express = require('express');
const router = express.Router();

const QuizController = require('./../../../controllers/api/public/Quiz');

router.get('/', QuizController.find);
router.get('/:_id', QuizController.findOneById);

module.exports = router;