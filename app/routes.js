const { Router } = require('express');

const router = new Router();
const quoteController = require('../app/QuoteController/controller')

router.use('/api/v1', quoteController);

module.exports = router;
