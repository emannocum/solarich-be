import  {IEmailRequest} from './sendQuoteUsingEmail'


function htmlTemplateInquiry (data: IEmailRequest)  : string {
    return (`<!DOCTYPE html>
    <html>
      <head>
        <title>Thank you for you inquiry!</title>
        <style>
          body {
            font-family: Arial, sans-serif;
          }
          .container {
            max-width: 720px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          .message {
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 20px;
          }
          .info {
            font-weight: bold;
          }
          .list-item {
            margin-bottom: 10px;
          }
          .banner {
            width: 40%;
            max-height: 200px;
            object-fit: cover;
            margin-bottom: 20px;
          }
          .footer {
            font-size: 14px;
            color: #888;
            margin-top: 20px;
            border-top: 1px solid #ccc;
            padding-top: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-right: 2px;
          }
          .logo {
            max-width: 150px;
          }
          .social-media-logos a {
            display: inline-block;
            margin-left: 10px;
          }
          .social-media-logos svg {
            width: 30px;
            height: 30px;
            color: gray;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <!-- Your Banner Image -->
          <img
            src="https://res.cloudinary.com/dh3m4os9t/image/upload/v1690784108/solarich-email-template/logo-name-only_ba5r6o.png"
            alt="Business Name Banner"
            class="banner"
          />
          <div class="header">Hello `+data.name+`,</div>
          <div class="message">
            Thank you for considering Solarich for your inquiry. We appreciate you
            taking the time to get in touch with us.
            <br /><br />
            We've received your message and are thrilled to assist you with your
            recent inquiry. Rest assured, our team is already hard at work, gearing
            up to provide you with the best support possible.
          </div>
    
          <div class="message">
            Please rest assured that every detail you provided is vital to us. Your
            full name, email address, phone number, and message will help us tailor
            our response to precisely match your requirements.
            <br /><br />
            If you have any additional information or specific details you'd like to
            share, don't hesitate to let us know. The more we know, the better we
            can serve you.
          </div>
    
          <div class="message">
            At Solarich, we believe in being your trusted partner from the very
            beginning. We're excited to work with you and guide you through every
            step of the process.
            <br />
            <br />
            You can expect a prompt response from us, so stay tuned!
          </div>
    
          <div class="message">
            Once again, thank you for reaching out. We look forward to taking this
            forward together. <br /><br />
            Best regards, <br />
            <br />
            Solarich ECorp
          </div>
          <div class="footer">
            <!-- Sample Business Logo -->
            <img
              src="https://res.cloudinary.com/dh3m4os9t/image/upload/v1690784114/solarich-email-template/website-logo-solarich_f6c08s.png"
              alt="Business Logo"
              class="logo"
            />
            <div class="social-media-logos">
              <!-- Facebook Icon -->
              <a href="https://www.facebook.com/solarichecorp">
                <!-- https://feathericons.dev/?search=facebook&iconset=feather -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  class="main-grid-item-icon"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path
                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                  />
                </svg>
              </a>
              <!-- Instagram Icon -->
              <a href="https://www.instagram.com/solarich.ecorp">
                <!-- https://feathericons.dev/?search=instagram&iconset=feather -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  class="main-grid-item-icon"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
          <div class="footer">
            <!-- Sample Company Address -->
            <div>279 Malagasang Road 1C, Imus, Cavite</div>
            <!-- Sample Contact Number -->
            <div>(+63) 917 621 3201</div>
            <!-- Sample Email -->
            <div>solarichenterprisescorp@gmail.com</div>
          </div>
        </div>
      </body>
    </html>
    `)
}

function htmlTemplateForSales(data : IEmailRequest) : string{
    return (`<!DOCTYPE html>
    <html>
    <head>
        <title>User Request Information</title>
        <style>
            body {
                font-family: Arial, sans-serif;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
            }
            .header {
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 10px;
            }
            .info {
                font-weight: bold;
                margin-bottom: 5px;
            }
            .message {
                font-size: 16px;
                line-height: 1.5;
                margin-bottom: 20px;
            }
            .footer {
                font-size: 14px;
                color: #888;
                margin-top: 20px;
                border-top: 1px solid #ccc;
                padding-top: 20px;
            }
            .logo {
                max-width: 150px;
            }
            .banner {
                width: 100%;
                max-height: 100%;
                object-fit: cover;
            }
            table {
                width: 100%;
                border-collapse: collapse;
            }
            th, td {
                padding: 8px;
                text-align: left;
                border-bottom: 1px solid #ccc;
            }
            th {
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <table>
                <tr>
                    <td colspan="2">
                        <!-- Your Banner Image -->
                        <img src="https://res.cloudinary.com/dh3m4os9t/image/upload/v1690784108/solarich-email-template/logo-name-only_ba5r6o.png" alt="Banner Image" class="banner">
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="header">User Request Information</td>
                </tr>
                <tr>
                    <td colspan="2" class="message">
                        The following information was submitted by the user:
                    </td>
                </tr>
                <tr>
                    <th>Name:</th>
                    <td>`+data.name+`</td>
                </tr>
                <tr>
                    <th>Phone Number:</th>
                    <td>`+data.phonenumber+`</td>
                </tr>
                <tr>
                    <th>Email Address:</th>
                    <td>`+data.receiver+`</td>
                </tr>
                <tr>
                    <th>Subject:</th>
                    <td>`+data.subject+`</td>
                </tr>
                <tr>
                    <th>Message:</th>
                    <td>
                        `+data.text+`</td>
                </tr>
                <tr>
                    <td colspan="2" class="footer">
                        <!-- Sample Business Logo -->
                        <img src="https://res.cloudinary.com/dh3m4os9t/image/upload/v1690784114/solarich-email-template/website-logo-solarich_f6c08s.png" alt="Business Logo" class="logo">
                    </td>
                </tr>
            </table>
        </div>
    </body>
    </html>`)
}


export function emailMessageOfClientTemplate(data : IEmailRequest) : string {
    return htmlTemplateForSales(data)
}