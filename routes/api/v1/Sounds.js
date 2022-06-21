const express = require('express');
const router = express.Router();

const SoundsController = require('./../../../controllers/api/public/Sounds');

router.post('/', SoundsController.create);

module.exports = router;