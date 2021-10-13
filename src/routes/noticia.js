const router = require('express').Router();
const axios = require ('axios');
const apiKey = '5f869e794825494b846a6738bee04db2';
const {getnews,newsearch} = require('../controllers/noticia.controllers');



router.get('/', (req,res)=>{
    let seq;
    if(!req.query.s){
        seq=getnews();
    }
    else{
        seq=newsearch(req.query.s);
    }
    seq.then(response=>{
        let notis=response.data.articles;
        res.render('main',{layout:'index',noti:notis})
    })
});




module.exports = router;