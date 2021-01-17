const express = require('express');
const router = express.Router();

const RecommendationController = require('./../../../controllers/api/private/Recommendation');

router.post('/', RecommendationController.create);
router.delete('/:_id', RecommendationController.remove);

module.exports = router;