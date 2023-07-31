import { EventEmitter } from 'events';
EventEmitter.defaultMaxListeners = 15;

const dotenv = require('dotenv');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const setupSwagger = require('./docs/swagger');
const bodyParser = require('body-parser')
const app = express();



//middlewares
const LoggerMiddleware = require('./middleware/loggerMiddleware/loggerMiddleware');


//load dotenv
dotenv.config();


// body-parser middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Using the middleware logger for all the request received
app.use(LoggerMiddleware);


//routes
const quoteRoutes = require('./routes/quoteRoutes');


// Use the routes here
app.use('/', quoteRoutes);

// Add the Swagger documentation
const swaggerSpecs = setupSwagger;
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// set the port
const port = process.env.PORT || 3000;

// check where the port we are listening
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
  console.log(`Visit http://localhost:${port}/api for available api`)
  console.log(`In liveserver it was running on ${process.env.BASE_URL}`)
});

export default app; // Export the express instance