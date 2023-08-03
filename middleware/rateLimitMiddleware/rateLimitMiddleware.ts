import {Request, Response, NextFunction } from 'express';

// Store the user usage limit (you can use a database for more persistent storage)
const userLimits = new Map();

export const rateLimitMiddleware = (req : Request, res : Response, next : NextFunction) => {
  const { user } = req.body;

  if (!user) {
    return res.status(400).json({ error: 'User information not provided.' });
  }

  const limit = userLimits.get(user) || 0;

  if (limit >= 3) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  userLimits.set(user, limit + 1);
  next();
};


