import {Request, Response} from 'express';
import {generateQuote} from '../../services/quoteServices/quoteServices'
import {sendQuoteUsingEmail,IEmailRequest} from '../../services/email/sendQuoteUsingEmail'

export const getQuote = (request : Request, response : Response) => {
    
    //services needed
    const quote = generateQuote()

    const data = {"response": quote}
    response.json(data);
};

export const sendQuote = (request: Request, response: Response) =>{
    
    const requestBody : IEmailRequest = request.body;

    console.log(requestBody)
    try{

        if(sendQuoteUsingEmail(requestBody)){
            response.json({"responseStatus": "send succesfully"});
        }else{
            response.status(500).json({"responseStatus": "send failed"});
        }
    }catch(Exception){
        response.status(500).json({ data: 'Internal Server Error: '+Exception, });
    }

} 