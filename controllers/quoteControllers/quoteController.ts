import {Request, Response} from 'express';
import {generateQuote} from '../../services/quoteServices/quoteServices'
import {senQuoteUsingEmail} from '../../services/email/sendQuoteUsingEmail'
export const getQuote = (request : Request, response : Response) => {
    
    //services needed
    const quote = generateQuote()


    response.send(quote);
};

export const sendQuote = (request: Request, response: Response) =>{
try{
    const emailWasSend : boolean = false
   
    console.log(senQuoteUsingEmail('webbello25@gmail.com', 'xxxydnimqcfgfceg','gmail',465,'nocumadoxx@gmail.com','test','test'))
    if(emailWasSend){
        response.send("sent succesfully")
    }else{
        response.send("send failed")
    }
}catch(Exception){
console.log(`Error in route sendquote ${Exception}`)
}
  
    
}