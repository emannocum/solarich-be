import {Request, Response} from 'express';
import {generateQuote} from '../../services/quoteServices/quoteServices'

export const getQuote = (request : Request, response : Response) => {
    
    //services needed
    const quote = generateQuote()


    response.send(quote);
};