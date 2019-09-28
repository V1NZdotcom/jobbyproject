const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nunjucks = require('nunjucks');
require('dotenv').config();

// console.log(process.env)

const port = process.env.NODEJSPORT;


const app = express();
nunjucks.configure('src/views', {
  autoescape: true,
  express: app,
});


// debug all routes
// app.get('*', (req, res) => {
//   res.render('formular.html', { toto: "1" });
// });


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Resolution des fichier static
app.use('/img', express.static(`${__dirname}../../../assets/`));
app.use('/css', express.static(path.join(`${__dirname}/../css/`)));
app.use('/video', express.static(`${__dirname}../../../assets/video/`));
app.use('/mesjsclients', express.static(path.join(`${__dirname}../../../assets/js`)));
app.use('/bootstrap', express.static(path.join(`${__dirname}../../../node_modules/bootstrap/dist/`)));
app.use('/jquery', express.static(path.join(`${__dirname}../../../node_modules/jquery/dist/`)));
app.use('/flags', express.static(path.join(`${__dirname}../../../node_modules/flag-icon-css/`)));



// app.use('^/test', require('./routing/testDiffrentParametre/test.js'));
// app.use('^/css/', require('./routing/html/css.js'));
app.use('^/', require('./routing/html/home.js'));
app.use('^/categories.html', require('./routing/html/categories.js'));
// app.use('^/', require('../node/routing/html/formular.js'));
app.use('^/formular', require('../node/routing/html/formular.js'));
app.use('^/register', require('../node/routing/html/register.js'));
// app.use('^/mesjsclients', require('../node/routing/js-client/index.js'));

// ./mesjsclients/categorie-client.js

app.listen(port, () => { console.log(`je suis lancé sur le port : ${port}`); });
