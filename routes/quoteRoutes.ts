/**
 * @swagger
 * /quotes:
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
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       quote:
 *                         type: string
 *                     example:
 *                       quote: "This is a quote."
 *       500:
 *         description: Internal server error
 *   post:
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
 *       200:
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
 * 
 * /quotes/{id}:
 *   put:
 *     summary: Update a Quote
 *     description: Update an existing quote in the server
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the quote to update
 *     requestBody:
 *       description: Updated Quote object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quote:
 *                 type: string
 *             example:
 *               quote: "This is an updated quote."
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
 *                   description: The updated quote
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Quote not found
 *       500:
 *         description: Internal server error
 *   delete:
 *     summary: Delete a Quote
 *     description: Delete an existing quote from the server
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the quote to delete
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
 *                   description: The deleted quote
 *       404:
 *         description: Quote not found
 *       500:
 *         description: Internal server error
 */

import { Router } from 'express'
import {getQuote, sendQuote} from '../controllers/quoteControllers/quoteController'

const router = Router()

router.get('/quotes', getQuote)

router.post('/quotes', sendQuote)

router.put('/quotes/{id}', () =>{ return false})

router.delete('/quotes/{id}', () =>{return false})

module.exports = router;