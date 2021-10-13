const axios = require ('axios');
const { response } = require('express');
const apiKey = '5f869e794825494b846a6738bee04db2';




module.exports = function getnews(req, res) {
    let url = `https://newsapi.org/v2/everything?q=$bitcoin&apiKey=${apiKey}`;
    axios.get(url).then(results=>{
        let noti=results.data.articles;
        res.render('main',{layout:'index', noti: noti});
    })
    .catch(err=>{
        console.log("error");
        res.send(results.data);

    })
};

