

export function emailTemplate() : string {
    return(`<!DOCTYPE html>
    <html>
      <head>
        <title>Solar Quote Request</title>
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
            width: 100%;
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
          }
          .logo {
            max-width: 150px;
          }
          .social-media-logos img {
            max-width: 30px;
            margin-left: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <!-- Sample Placeholder Image -->
          <img
            src="https://via.placeholder.com/600x200"
            alt="Business Name Banner"
            class="banner"
          />
          <div class="header">Hello Joe Grayson,</div>
          <div class="message">
            We received your request for a solar quote! We are excited to work with
            you and help you save some money.
            <br /><br />
            One of our solar experts will be reaching out to you shortly. If you can
            have the following information readily available it will help speed up
            the process so you can see how much you will be saving.
          </div>
          <div class="list-item">
            <span class="info">Preparing for your solar quote:</span>
            <ul>
              <li>
                Electric Bills: If you have an online account with your utility, we
                can send you a request to get your exact usage. This allows for the
                most accurate design. We can also work off a year of electric bills
                or the graph from your current bill that depicts every month.
              </li>
              <li>
                Goals &amp; Plans: Think about your goals for going solar and future
                plans that will change the amount of energy you use.
              </li>
              <li>
                Questions &amp; Concerns: Most people have some initial questions
                and concerns when going solar. Write down any questions you may have
                so we can educate you properly.
              </li>
            </ul>
          </div>
          <div class="message">
            Thank you for considering solar energy. We look forward to assisting you
            with your solar needs and helping you make a positive impact on the
            environment while saving on your energy costs.
          </div>
          <div class="footer">
            <!-- Sample Business Logo -->
            <img
              src="https://via.placeholder.com/150x50"
              alt="Business Logo"
              class="logo"
            />
            <div class="social-media-logos">
              <!-- Sample Social Media Logos (Replace with actual social media icons and links) -->
              <img
                src="https://via.placeholder.com/30x30"
                alt="Social Media Icon 1"
              />
              <img
                src="https://via.placeholder.com/30x30"
                alt="Social Media Icon 2"
              />
              <img
                src="https://via.placeholder.com/30x30"
                alt="Social Media Icon 3"
              />
            </div>
          </div>
          <div class="footer">
            <!-- Sample Company Address -->
            <div>1234 Sample Street, City</div>
            <!-- Sample Contact Number -->
            <div>Phone: 123-456-7890</div>
            <!-- Sample Email -->
            <div>Email: info@example.com</div>
          </div>
        </div>
      </body>
    </html>`)
}