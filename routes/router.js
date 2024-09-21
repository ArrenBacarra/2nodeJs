const express = require('express');
const router = express.Router();
const main= require('../controller/Arrenpogi');
router.get('/', main.index);
router.get('/about', main.about);
router.get('/contact', main.contact);
router.get('/info', main.info);
router.get('/settings', main.settings);
router.get('/kikiam', main.kikiam);
router.get('/pisbol', main.pisbol);
router.get('/bananaq', main.bananaq);
router.get('/hotdog', main.hotdog);
router.get('/footlong', main.footlong);


module.exports = router;

