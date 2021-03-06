const { saveQuote } = require('../Quote/quote');
const Quote = require('../Quote/model');

exports.generateQuote = (_, res) => {
  saveQuote()
    .then((quote) => res.status(201).send(quote))
    .catch((err) => res.status(404).send({ message: 'Something went wrong', error: err }));
}

exports.deleteById = (req, res) => {
  Quote.findByIdAndDelete({ _id: req.params.id })
    .then((doc) => {
      if (doc) {
        res.status(200).send({ message: 'Quote deleted succesfully' });
      }
      else {
        res.status(404).send({ message: 'Error deleting quote, id not found' });
      }
    })
    .catch((err) => {
      res.status(404).send({ message: 'Error deleting quote, id not found', error: err });
    })
};

exports.getById = (req, res) => {
  Quote.findById(req.params.id)
    .then((doc) => {
      if (doc) {
        res.status(200).send(doc);
      } else {
        res.status(404).send({message: 'Error finding the quote'});
      }
    })
    .catch((err) => {
      res.status(404).send({message: 'Error finding the quote',error: err});
    });
}