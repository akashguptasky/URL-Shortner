const express = require('express');
const router = express.Router();

const shortUrlController = require('../controller/shortURL')
const getUrlController = require('../controller/getUrl')


router.post('/url/shorten',shortUrlController.shortUrl)

router.get('/:urlCode', getUrlController.getUrl)

module.exports= router;