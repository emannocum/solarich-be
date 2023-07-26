const nodemailer = require('nodemailer')


export interface IEmailRequest {
  email: string
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
        user: 'nocumadoxx@gmail.com',
        pass: 'uxjqiirznctwhvlh'
      }
    });

    async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: emailRequest.email, // sender address
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
