"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quoteServices = require('../../services/quoteServices/quoteServices');
exports.getQuote = (request, response) => {
    //services needed
    const quote = quoteServices.generateQuote();
    response.send(quote);
};