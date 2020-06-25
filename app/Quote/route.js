const Router = require('express').Router;

const { generateQuote, deleteById, getById } = require('../QuoteController/controller');

let router = new Router();

router.route('/generate-changing-life-quote')
    .post((req, res) => {
        generateQuote(req, res);
    });

router.route('/get-record-by-id/:id')
    .get((req, res) => {
        getById(req, res);
    });

router.route('/delete-record-by-id/:id')
    .delete((req, res) => {
        deleteById(req, res);
    });

module.exports = router;