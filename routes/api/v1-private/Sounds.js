const express = require('express');
const router = express.Router();

const SoundsController = require('./../../../controllers/api/private/Sounds');

router.get('/', SoundsController.findAll);
router.delete('/:_id', SoundsController.remove);

module.exports = router;