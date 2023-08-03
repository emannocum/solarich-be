import {Request, Response} from 'express';
import {generateQuote} from '../../services/quoteServices/quoteServices'
import {sendQuoteUsingEmail,IEmailRequest} from '../../services/email/sendQuoteUsingEmail'
import {sendMessageOfClientUsingEmail} from '../../services/email/sendMessageOfClientUsingEmail'


export const getQuote = (request : Request, response : Response) => {
    
    //services needed
    const quote = generateQuote()

    const data = {"response": quote}
    response.json(data);
};

export const sendQuote = (request: Request, response: Response) =>{
    // make a condition here for hr, sales, and direct to president
    const requestBody : IEmailRequest = request.body;

    console.log(requestBody)
    try{

        if(sendQuoteUsingEmail(requestBody)){
            if(sendMessageOfClientUsingEmail(requestBody)){
                response.json({response: "send succesfully"});
            }else{
                response.status(500).json({error: "send failed"});
            }
           
        }else{
            response.status(500).json({error: "send failed"});
        }
    }catch(Exception){
        response.status(500).json({ error: 'Internal Server Error: '+Exception, });
    }

} 