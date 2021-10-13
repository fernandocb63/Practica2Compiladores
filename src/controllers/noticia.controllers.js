const axios = require ('axios');
const { response } = require('express');
const apiKey = '5f869e794825494b846a6738bee04db2';




async function getnews(req, res) {
    let url = `https://newsapi.org/v2/everything?q=$bitcoin&apiKey=${apiKey}`;
    return axios.get(url);
};


async function newsearch(title) {
    let url = `https://newsapi.org/v2/everything?q=${title}&apiKey=${apiKey}`;
    return axios.get(url);
};

module.exports={getnews, newsearch}




