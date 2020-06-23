const { Router } = require('express');
const quoteRouting = require('../app/Quote/route');

let router = new Router();

router.use('/api/v1', quoteRouting);

module.exports = router;