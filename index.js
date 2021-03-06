const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');
const router = express.Router();
const noticias = require('./src/routes/noticia');
const handlebars = require('express-handlebars');
const { serialize } = require('v8');
const noticiaControllers = require('./src/controllers/noticia.controllers');

app.set('view engine', 'handlebars');
app.engine('handlebars',handlebars({
    layoutsDir: `${__dirname}/views/layouts`
}));

app.use(express.static('public'));
router.get('/', (req, res) => {
    res.render('main',{layout:'index'});
})

if (process.env.NODE_ENV === 'dev') {
    require('dotenv').config();
}
 



app.listen(port, () => {
    console.log('App is listening in port: ' + port);
})

app.use(router);
app.use('/noticias', noticias);









module.exports = router;