const express = require('express');
const router = express.Router();
const quoteController = require('../../controllers/quoteControllers/quoteController')

router.get('/quote', quoteController.getQuote);

module.exports = router;