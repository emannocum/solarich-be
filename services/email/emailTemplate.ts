

export function emailTemplate(){
    return(`<!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Request for Quote - Solarch Enterprises Corporation</title>
      <style>
        /* Your custom CSS styles go here */
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #f9f9f9;
        }
        .logo {
          text-align: center;
          margin-bottom: 20px;
        }
        .logo img {
          max-width: 200px;
          height: auto;
        }
        .quote-info {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background-color: #fff;
        }
        .quote-info p {
          margin: 0;
          padding: 5px;
        }
        .quote-footer {
          margin-top: 20px;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="logo">
          <img src="path-to-your-logo.png" alt="Solarch Enterprises Corporation">
        </div>
        <h2>Request for Quote</h2>
        <p>Dear Solarch Enterprises Corporation,</p>
        <p>We are interested in obtaining a quote for the following products/services:</p>
        <div class="quote-info">
          <p><strong>Product/Service 1:</strong> [Product/Service details here]</p>
          <p><strong>Product/Service 2:</strong> [Product/Service details here]</p>
          <!-- Add more products/services as needed -->
        </div>
        <p>Please provide us with the following information:</p>
        <ul>
          <li>Price per unit/service</li>
          <li>Minimum order quantity</li>
          <li>Lead time for delivery</li>
          <li>Terms of payment</li>
          <li>Any additional relevant details</li>
        </ul>
        <p>We would appreciate receiving the quote by [your desired date for receiving the quote].</p>
        <p>Thank you for your prompt attention to this request. If you have any questions or need further information, please feel free to contact us.</p>
        <div class="quote-footer">
          <p>Best regards,</p>
          <p>Your Name</p>
          <p>Your Company Name</p>
          <p>Email: your@email.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
    </body>
    </html>`)
}