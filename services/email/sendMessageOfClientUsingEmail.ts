const nodemailer = require('nodemailer')
import { emailMessageOfClientTemplate } from "./emailMessageOfClientTemplate";


// const data = {
//   "name": name.value,
//   "receiver": email.value,
//   "phonenumber": phonenumber.value,
//   "subject": subject.value,
//   "text": message.value,
// };

export interface IEmailRequest {
  name: string,
  receiver: string, 
  subject: string,
  text: string,
  phonenumber: number
}


export function sendMessageOfClientUsingEmail(emailRequest : IEmailRequest) : boolean{

  
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
          html: emailMessageOfClientTemplate(emailRequest), // html body
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
