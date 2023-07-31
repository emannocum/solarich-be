const nodemailer = require('nodemailer')
import { emailTemplate } from "./emailTemplate";

export interface IEmailRequest {
  receiver: string, 
  subject: string,
  text: string,
}


export function sendQuoteUsingEmail(emailRequest : IEmailRequest) : boolean{

  
  // async..await is not allowed in global scope, must use a wrapper
  try{

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: process.env.EMAIL_USERNAME, // sender address
          to: emailRequest.receiver, // list of receivers
          subject: emailRequest.subject, // Subject line
          text: emailRequest.text, // plain text body
          html: emailTemplate(), // html body
        });
      
        console.log("Message sent: %s", info.messageId);
    }
    main()
    return true
  }catch(Exception){
    console.log(`Error in sending message: error` +Exception)
    return false
  }
 
}
