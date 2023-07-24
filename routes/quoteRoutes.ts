/**
 * @swagger
 * /quote:
 *   get:
 *     summary: Get Quotes
 *     description: Get quotes from the server
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *       500:
 *         description: Internal server error
 */

import express from 'express';
const router = express.Router();
const quoteController = require('../controllers/quoteControllers/quoteController')

router.get('/quote', quoteController.getQuote);

module.exports = router;