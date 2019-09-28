const express = require('express');

const app = express();
const cors = require('cors');

const port = 9998;

app.use(cors());
app.use('^/api', require('../node/routing/api/categories.js'));
app.use('^/api/formular', require('../node/routing/api/formulaires.js'));
app.use('^/api/menu', require('../node/routing/api/menu.js'));

app.use('^/api/flags', require('../node/routing/api/flags.js'));


// dernier routeur pour la gestion d'erreur
app.use((err, req, res, next) => {
  res.json(err);
  return
});

app.listen(port, () => { console.log(`je suis lancé sur le port : ${port}`); });
