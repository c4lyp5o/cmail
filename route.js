const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const cRoute = require('./controller');

router.get('/', cRoute.callingHome);
router.post('/', cRoute.comingHome);
router.get('/usedomain/:domain', cRoute.seeDomain);

module.exports = router;