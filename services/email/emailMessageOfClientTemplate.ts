import  {IEmailRequest} from './sendQuoteUsingEmail'


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