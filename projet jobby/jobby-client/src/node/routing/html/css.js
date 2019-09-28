const express = require('express');

const router = express.Router();
const path = require('path');


// savoir si je suis dans le bon routeur
// router.get('*', function (req, res) {
//   res.send('ici')

// })


router.get('/:maCss.css', (req, res) => {
  const myPath = path.join(`${__dirname}/../../../css/${req.params.maCss}.css`);
  res.sendFile(myPath);
});


module.exports = router;
