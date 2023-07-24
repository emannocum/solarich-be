import {Request, Response, NextFunction } from 'express';

// a middleware that prints the request received
const loggerMiddleware = (request : Request, response : Response, next : NextFunction) => {
    console.log(`Request received: ${request.method} ${request.url}`);
    next();
};

module.exports = loggerMiddleware