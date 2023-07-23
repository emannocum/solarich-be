const quoteServices = require('../../services/quoteServices/quoteServices')

exports.getQuote = (req, res) => {
    
    //services needed
    const quote = quoteServices.generateQuote()


    res.send(quote);
};