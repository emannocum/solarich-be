import { Request, Response, NextFunction } from 'express';

interface UserLimitData {
  count: number;
  firstRequestTime: number;
}

// Store the user usage limit (you can use a database for more persistent storage)
const userLimits = new Map<string, UserLimitData>();

export const rateLimitMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { receiver } = req.body;
  console.log(receiver);
  if (!receiver) {
    return res.status(400).json({ error: 'Email is not provided.' });
  }

  const currentTime = Date.now();
  const limitData = userLimits.get(receiver);

  if (!limitData) {
    // First request from the user
    userLimits.set(receiver, { count: 1, firstRequestTime: currentTime });
    return next();
  }

  const { count, firstRequestTime } = limitData;
  const limit = 2; // The maximum number of requests allowed

  if (count >= limit) {
    const waitTimeInSeconds = Math.ceil((firstRequestTime + 3600000 - currentTime) / 1000);

    // Calculate wait time in hours and minutes
    const waitTimeInHours : number = Math.floor(waitTimeInSeconds / 3600);
    const remainingSeconds : number = waitTimeInSeconds % 3600;
    const waitTimeInMinutes : number = Math.floor(remainingSeconds / 60);

    return res.status(429).json({
      error: 'Too many requests. Please try again later.',
      waitTimeInSeconds,
      waitTimeInHours,
      waitTimeInMinutes
    });
  }

  userLimits.set(receiver, { count: count + 1, firstRequestTime });
  next();
};
