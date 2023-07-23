/**
 * @swagger
 * /quote:
 *   get:
 *     summary: Get example data
 *     description: Get example data from the server
 *     responses:
 *       200:
 *         description: Success response with example data
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

const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteControllers/quoteController')

router.get('/quote', quoteController.getQuote);

module.exports = router;