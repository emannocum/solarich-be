
// a middleware that prints the request received
const loggerMiddleware = (req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
};

module.exports = loggerMiddleware