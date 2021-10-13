const router = require('express').Router();
const axios = require ('axios');
const apiKey = '5f869e794825494b846a6738bee04db2';
const getnews = require('../controllers/noticia.controllers');



router.get('/', getnews);




module.exports = router;