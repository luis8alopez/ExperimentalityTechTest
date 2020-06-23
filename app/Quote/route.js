const Router = require('express').Router;

const { generateQuote} = require('../QuoteController');

let router = new Router();

router.route('/generate-changing-life-quote')
    .get((req,res) => {
        generateQuote(req, res);
    });

router.route('/get-record-by-id/:id')
    .get((req,res) => {
        getQuoteById(req, res);
    });

router.route('/delete-record-by-id/:id')
    .delete((req,res) => {
        deleteQuoteById(req, res);
    });

module.exports = router;