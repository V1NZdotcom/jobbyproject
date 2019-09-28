const express = require('express');
const winston = require('winston');

const port = 9997;
const app = express();


const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

app.use('^/formular', require('./routing/formular.js'));


app.listen(port, () => {
  console.log(`je suis lancé sur le port : ${port}`);
});
