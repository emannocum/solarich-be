const nodemailer = require('nodemailer')

export function senQuoteUsingEmail(username: string, password: string, host: string, port: number, receiver: string, subject: string, text: string,) : boolean{
const transporter = nodemailer.createTransport({
    host: host,
    port: port,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: username,
      pass: password
    }
  });
  
  // async..await is not allowed in global scope, must use a wrapper
  try{
    async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: username, // sender address
          to: receiver, // list of receivers
          subject: subject, // Subject line
          text: text, // plain text body
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
