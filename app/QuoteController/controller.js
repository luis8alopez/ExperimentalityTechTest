const saveQuote = require('../Quote/quote');


async function generateQuote(req, res) {
    try {
        let quote = await saveQuote();
        return res.status(200).send(quote);
    }
    catch (err) {
        console.log(err);
        return res.status(404).send({message: 'Something went wrong'});
    }
}

module.exports = generateQuote;