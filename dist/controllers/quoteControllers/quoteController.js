"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quoteServices = require('../../services/quoteServices/quoteServices');
exports.getQuote = (request, response) => {
    const quote = quoteServices.generateQuote();
    response.send(quote);
};
//# sourceMappingURL=quoteController.js.map