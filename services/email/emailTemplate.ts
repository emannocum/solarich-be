import  {IEmailRequest} from './sendQuoteUsingEmail'


export function emailTemplate(data: IEmailRequest) : string {
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
          .social-media-logos a {
            display: inline-block;
            margin-left: 10px;
          }
          .social-media-logos svg {
            width: 30px;
            height: 30px;
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
              src="https://res.cloudinary.com/dh3m4os9t/image/upload/v1690784114/solarich-email-template/website-logo-solarich_f6c08s.png"
              alt="Business Logo"
              class="logo"
            />
            <div class="social-media-logos">
              <!-- Facebook Icon -->
              <a href="https://www.facebook.com/your_facebook_page_link">
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
              <a href="https://www.instagram.com/your_instagram_page_link">
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