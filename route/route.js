const express = require('express');
const router = express.Router();

const shortUrlController = require('../Controller/ShortURL')


router.post('/url/shorten',shortUrlController.shortUrl)