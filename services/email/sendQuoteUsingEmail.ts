const nodemailer = require('nodemailer')


export interface IEmailRequest {
  username: string, 
  password: string, 
  host: string, 
  port: number, 
  receiver: string, 
  subject: string,
  text: string,
  
}


export function senQuoteUsingEmail(emailRequest : IEmailRequest) : boolean{
const transporter = nodemailer.createTransport({
    host: emailRequest.host,
    port: emailRequest.port,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: emailRequest.username,
      pass: emailRequest.password
    }
  });
  
  // async..await is not allowed in global scope, must use a wrapper
  try{
    async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: emailRequest.username, // sender address
          to: emailRequest.receiver, // list of receivers
          subject: emailRequest.subject, // Subject line
          text: emailRequest.text, // plain text body
          html: "<b>Hello world?</b>", // html body
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
