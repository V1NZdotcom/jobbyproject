const express = require('express');

const router = express.Router();
const { check, validationResult, body } = require('express-validator/check');

const myMenuDatas = [
  {
    label: 'Enregistrement',
    link: '/register',
    lang: 'fr',
  },
  {
    label: 'Connexion',
    link: '/login',
    lang: 'fr',
  },
  {
    label: 'À Propos',
    link: '/about',
    lang: 'fr',
  },
  {
    label: 'Contact',
    link: '/contact',
    lang: 'fr',
  },
  {
    label: 'save',
    link: '/register',
    lang: 'us',
  },
  {
    label: 'login',
    link: '/login',
    lang: 'us',
  },
  {
    label: 'about',
    link: '/about',
    lang: 'us',
  },
  {
    label: 'Contact',
    link: '/contact',
    lang: 'us',
  },
];
/**
router.get('/', (req, res, next) => {
  const myReturn = [];
  // controle de parametre
  let error = true;
  if (req.query.maLangue === 'fr') {
    error = false;
  } else if (req.query.maLangue === 'us') {
    error = false;
  }
  if (error === false) {
    return next();
  }
  throw { error: 3000, detail: 'il na pas de parametre dans le routeur', monRouteur: 'menu.js/api' };
});
* */

router.get('/',
  [
    check('maLangue')
      .isString()
      .isIn(["fr", "us"])
      .not()
      .isEmpty()
      .withMessage('ma langue ne peut etre vide'),
  ],
  (req, res, next) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (errors.isEmpty() === true) {
      return next();
    }
    throw errors.array();
  },e
    for (let index = 0; index < myMenuDatas.length; index++) {
      const myMenuData = myMenuDatas[index];
      if (myMenuData.lang === req.query.maLangue) {
        myReturn.push(myMenuData);
      }
    }

    res.json(myReturn);
  }
);






router.post('/',
  [
    query('maLangue')
      .isString()
      .isIn(["fr", "us"])
      .not()
      .isEmpty()
      .withMessage('ma langue ne peut etre vide'),
  ],
  (req, res, next) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (errors.isEmpty() === true) {
      return next();
    }
    throw errors.array();
  },
  (req, res) => {
    const myReturn = [];

    for (let index = 0; index < myMenuDatas.length; index++) {
      const myMenuData = myMenuDatas[index];
      if (myMenuData.lang === req.query.maLangue) {
        myReturn.push(myMenuData);
      }
    }

    res.json(myReturn);
  }
);




router.get('/:lang', (req, res) => {
  const myReturn = [];

  for (let index = 0; index < myMenuDatas.length; index++) {
    const myMenuData = myMenuDatas[index];
    if (myMenuData.lang === req.params.lang) {
      myReturn.push(myMenuData);
    }
  }

  res.json(myReturn);
});


module.exports = router;
