const express = require('express');
const router = express.Router();

const SoundsController = require('./../../../controllers/api/private/Sounds');
const { route } = require('./Suggestion');

router.get('/', SoundsController.findAll);
router.delete('/:id', SoundsController.remove);

module.exports = router;