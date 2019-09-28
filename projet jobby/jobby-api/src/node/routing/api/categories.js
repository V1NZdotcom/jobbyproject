const express = require('express');

const router = express.Router();
const myData = [
  {
    label: 'Réparation',
    code: 'codeDeCatégorie2',
    categoryId: 1,
    type: 'category',
    img: '/img/reparation.jpg',
    link: '/formular/1',
  },
  {
    label: 'Cuisine',
    code: 'codeDeCatégorie3',
    categoryId: 2,
    type: 'category',
    img: '/img/service.jpg',
    link: '/formular/2',
  },
  {
    label: 'Transport',
    code: 'codeDeCatégorie3',
    categoryId: 3,
    type: 'category',
    img: '/img/transport.jpg',
    link: '/formular/3',
  },
  {
    label: 'Livraison',
    code: 'codeDeCatégorie4',
    categoryId: 4,
    type: 'category',
    img: '/img/buying.jpg',
    link: '/formular/4',
  },
];
router.get('/categories', (req, res) => {
  res.json(myData);
});
router.get('/categories/:monIdentifiantDeCategorie', (req, res) => {
  let error = false;
  // controle des parametres
  if (Number.isNaN(req.params.monIdentifiantDeCategorie) === true) {
    error = true;
  }
  // gestion d'erreur   des parametres
  if (error === true) {
    // reponse null
    res.json({});
    return;
  }
  // traitement de la data
  const myDataID = myData[req.params.monIdentifiantDeCategorie - 1];
  // retour de la data
  res.json(myDataID);
});

module.exports = router;
