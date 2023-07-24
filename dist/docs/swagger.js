"use strict";
const swaggerJsdoc = require('swagger-jsdoc');
const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Solarich-BE Swagger',
            version: '1.0.0',
            description: 'Solarich backend services API with Swagger documentation',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./routes/*.js'],
};
const specs = swaggerJsdoc(options);
module.exports = specs;
//# sourceMappingURL=swagger.js.map