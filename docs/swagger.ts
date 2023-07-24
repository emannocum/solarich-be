import swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    swagger: '2.0', // Specify the version as '2.0'
    info: {
      title: 'Solarich-BE Swagger',
      version: '1.0.0',
      description: 'Solarich backend services API with Swagger documentation',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Update with your server URL
      },
    ],
  },
  apis: ['./routes/*.ts'], // Path to the API routes folder
};

const specs = swaggerJsdoc(options);

module.exports = specs;
