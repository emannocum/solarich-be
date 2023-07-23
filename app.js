const express = require('express')
const app = express()
const port = 3000

//middlewares
const loggerMiddleware = require('./middleware/loggerMiddleware/loggerMiddleware')

//Using the middleware logger for all the request received
app.use(loggerMiddleware)

//routes
const quoteRoutes = require('./routes/quoteRoutes/quoteRoutes')


// Use the routes here
app.use('/', quoteRoutes);


//check where the port we are listening
app.listen(port, () =>{
    console.log(`App is listening on port ${port}`)
})