/**
 * @swagger
 * tags:
 *   name: quotes
 *   description: The quotes managing API
 * /quotes:
 *   get:
 *     summary: Lists all the quotes
 *     tags: [quotes]
 *     responses:
 *       200:
 *         description: The list of the quotes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   description: The newly added quote
 *   post:
 *     summary: Create a new quote
 *     tags: [quotes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: string
 *                 description: The newly added quote
 *     responses:
 *       200:
 *         description: The created quote.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   description: The newly added quote
 *       500:
 *         description: Some server error
 * /quotes/{id}:
 *   get:
 *     summary: Get the quote by id
 *     tags: [quotes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The quote id
 *     responses:
 *       200:
 *         description: The quote response by id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   description: The newly added quote
 *       404:
 *         description: The quote was not found
 *   put:
 *     summary: Update the quote by the id
 *     tags: [quotes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The quote id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: string
 *                 description: The newly added quote
 *     responses:
 *       200:
 *         description: The quote was updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   description: The newly added quote
 *       404:
 *         description: The quote was not found
 *       500:
 *         description: Some error happened
 *   delete:
 *     summary: Remove the quote by id
 *     tags: [quotes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The quote id
 *     responses:
 *       200:
 *         description: The quote was deleted
 *       404:
 *         description: The quote was not found
 */




import { Router } from 'express'
import {getQuote, sendQuote} from '../controllers/quoteControllers/quoteController'

import {rateLimitMiddleware} from '../middleware/rateLimitMiddleware/rateLimitMiddleware'
const router = Router()

router.get('/quotes',rateLimitMiddleware, getQuote)

router.post('/quotes',rateLimitMiddleware, sendQuote)

// router.put('/quotes/{id}', () =>{ return false})

// router.delete('/quotes/{id}', () =>{return false})

module.exports = router;