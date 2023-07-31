import {Request, Response, NextFunction } from 'express';

function corseMiddleware(app : any){
    app.use((req : Request, res : Response, next: NextFunction) => {
        // Set appropriate headers to allow all requests (CORS)
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        // Optionally, you can allow credentials if you are dealing with cookies or authentication
        // res.setHeader('Access-Control-Allow-Credentials', 'true');
      
        // Proceed to the next middleware/route handler
        next();
      });
}

module.exports = corseMiddleware