const express = require('express');

const router = express.Router();

const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});


// router.get('/', (req, res) => {
//     // je coupe des carrottes
//     logger.info("un truc");


//     // je fait chauffer mes plats
//     res.json(req.query)
// });


// router.get('/',
//     (req, res, next) => {
//         // je coupe des carrottes
//         logger.info('un xxxxxx');
//         return next()
//     },

//     (req, res) => {
//     // je fait chauffer mes plats
//     res.json(req.query);
//     }
// );


router.get('/',
  (req, res, next) => {
    // je logge
    logger.info('un xxxxxx');

    req.toto = 1;

    return next();
  },);


router.get('/',
  (req, res, next) => {
    // je regarde si le gas est connecté

    next();
  },);


router.get('/',
  (req, res, next) => {
    // je prepare la data pour la base de donnée
    req.madtaToInsertInTheBaseDeDonne = { coucou: 'vincz', hello: ['thibaut'] };
    next();
  },);


router.get('/',
  (req, res, next) => {
    // j'enregistre en base

    next();
  },);

router.get('/',
  (req, res) => {
    // je fait chauffer mes plats

        res.json(req.toto);
        
    },);


module.exports = router;
