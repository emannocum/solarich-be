const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const setupSwagger = require('./docs/swagger');

//middlewares
const loggerMiddleware = require('./middleware/loggerMiddleware/loggerMiddleware');

// Using the middleware logger for all the request received
app.use(loggerMiddleware);

//routes
const quoteRoutes = require('./routes/quoteRoutes');

// Use the routes here
app.use('/', quoteRoutes);

// Add the Swagger documentation
const swaggerSpecs = setupSwagger;
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// set the port
const port = 3000;

// check where the port we are listening
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
  console.log(`Visit http://localhost:${port}/api for available api`)
});
