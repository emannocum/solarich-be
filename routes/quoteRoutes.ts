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

import { Router } from 'express';
import {getQuote} from '../controllers/quoteControllers/quoteController'

const router = Router();
router.get('/quote', getQuote);

module.exports = router;