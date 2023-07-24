import {Request, Response} from 'express';
const quoteServices = require('../../services/quoteServices/quoteServices')

exports.getQuote = (request : Request, response : Response) => {
    
    //services needed
    const quote = quoteServices.generateQuote()


    response.send(quote);
};