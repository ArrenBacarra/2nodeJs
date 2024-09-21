const express = require('express');
const router = express.Router();
const main= require('../controller/Arrenpogi');
router.get('/', main.index);
router.get('/about', main.about);
router.get('/contact', main.contact);
router.get('/info', main.info);
router.get('/settings', main.settings);



module.exports = router;

