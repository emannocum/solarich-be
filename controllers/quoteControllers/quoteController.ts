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
    
    const requestBody : IEmailRequest = request.body;

    console.log(requestBody)
    try{

        if(sendQuoteUsingEmail(requestBody)){
            if(sendMessageOfClientUsingEmail(requestBody)){
                response.json({"responseMessage": "send succesfully"});
            }else{
                response.status(500).json({"responseMessage": "send failed"});
            }
           
        }else{
            response.status(500).json({"responseMessage": "send failed"});
        }
    }catch(Exception){
        response.status(500).json({ "responseMessage": 'Internal Server Error: '+Exception, });
    }

} 