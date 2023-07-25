import {Request, Response} from 'express';
import {generateQuote} from '../../services/quoteServices/quoteServices'
import {senQuoteUsingEmail} from '../../services/email/sendQuoteUsingEmail'

export const getQuote = (request : Request, response : Response) => {
    
    //services needed
    const quote = generateQuote()


    response.send(quote);
};

export const sendQuote = (request: Request, response: Response) =>{
     // Access the request body here
     try{
        const requestBody = request.body;

        console.log(requestBody)
        response.status(200).json({ data: 'Quote sent successfully' });
     }catch(Exception){
        console.log(Exception)
        response.status(200).json({ data: 'Internal Server Error' });
     }
   
// try{
//     const emailWasSend : boolean = false
   
//     console.log(senQuoteUsingEmail('webbello25@gmail.com', 'xxxydnimqcfgfceg','gmail',465,'nocumadoxx@gmail.com','test','test'))
//     if(emailWasSend){
//         response.send("sent succesfully")
//     }else{
//         response.send("send failed")
//     }
// }catch(Exception){
// console.log(`Error in route sendquote ${Exception}`)
// }
  
    // response.send(requestBody)
} 