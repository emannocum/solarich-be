import {Request, Response, NextFunction } from 'express';

// Store the user usage limit (you can use a database for more persistent storage)
const userLimits = new Map();

export const rateLimitMiddleware = (req : Request, res : Response, next : NextFunction) => {
  const { receiver } = req.body;
  console.log(receiver)
  if (!receiver) {
    return res.status(400).json({ error: 'Email is not provided.' });
  }

  const limit = userLimits.get(receiver) || 0;

  if (limit >= 2) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  userLimits.set(receiver, limit + 1);
  next();
};


