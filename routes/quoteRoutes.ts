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
 * /quotes:
 *   get:
 *     summary: Add a new Quote
 *     description: Add a new quote to the server
 *     requestBody:
 *       description: Quote object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quote:
 *                 type: string
 *             example:
 *               quote: "This is a new quote."
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   description: The newly added quote
 *       500:
 *         description: Internal server error
 */
import { Router } from 'express';
import {getQuote, sendQuote} from '../controllers/quoteControllers/quoteController'

const router = Router();

router.get('/quote', getQuote);

router.get('/quotes', sendQuote);

module.exports = router;