const express = require('express');

const router = express.Router();


// router.get('*', (req, res) => {
//     res.json(req.params);
// });


// tout tester get post en meme temps 
// :coucou? ca veut dire il pet y avoir une interpolation ou non. Si interpolation alors creation d'une cle coucou dans req.params

// GET http://127.0.0.1:9999/test/all
// GET http://127.0.0.1:9999/test/all?hello=querystrings
// GET http://127.0.0.1:9999/test/all/125?hello=querystrings&toto=tata
// GET http://127.0.0.1:9999/test/all/125/8080?hello=querystrings&toto=tata

// POST http://127.0.0.1:9999/test/all/125/8080?hello=querystrings&toto=tata avec data coaching=agile
// reponse pour le post
// {
//     "params": {
//         "coucou": "125",
//         "kikoulol": "8080"
//     },
//     "body": {
//         "coaching": "agile"
//     },
//     "query": {
//         "hello": "querystrings",
//         "toto": "tataé"
//     },
//     "headers": {
//         "content-type": "application/x-www-form-urlencoded",
//         "cache-control": "no-cache",
//         "postman-token": "114784b0-3e05-40be-b5cb-b8c3a752e3bf",
//         "user-agent": "PostmanRuntime/7.4.0",
//         "accept": "*/*",
//         "host": "127.0.0.1:9999",
//         "accept-encoding": "gzip, deflate",
//         "content-length": "14",
//         "connection": "keep-alive"
//     }
// }
router.all('/all/:coucou?/:kikoulol?', (req, res) => {
  const myData = {
    params: req.params,
    body: req.body,
    query: req.query,
    headers: req.headers,
  };

  res.json(myData);
});


// test de l'interpolation de pattern
// ex http://127.0.0.1:9999/test/params/1/2
router.get('/params/:monId/:monGabarit', (req, res) => {
  res.json(req.params);
});


// serialisation des query string dans req.query
// ex http://127.0.0.1:9999/test/queryStrings?toto=1&tata=tata
router.get('/queryStrings', (req, res) => {
  res.json(req.query);
});


// test query parameters
// ex http://127.0.0.1:9999/test/faitUnPost
router.post('/faitUnPost', (req, res) => {
  res.json(req.body);
});


module.exports = router;
