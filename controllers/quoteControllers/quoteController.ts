import {Request, Response} from 'express';
import {generateQuote} from '../../services/quoteServices/quoteServices'
import {sendQuoteUsingEmail,IEmailRequest} from '../../services/email/sendQuoteUsingEmail'

export const getQuote = (request : Request, response : Response) => {
    
    //services needed
    const quote = generateQuote()

    const data = {"response": quote}
    response.send(quote);
};

export const sendQuote = (request: Request, response: Response) =>{
    
    const requestBody : IEmailRequest = request.body;

    console.log(requestBody)
try{

    if(sendQuoteUsingEmail(requestBody)){
        response.send("sent succesfully")
    }else{
        response.send("send failed")
    }
}catch(Exception){
    response.status(500).json({ data: 'Internal Server Error: '+Exception, });
}

} 