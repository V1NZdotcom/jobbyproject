const express = require('express');

const router = express.Router();
const path = require('path');


router.get(['/'], (req, res) => {
  const myPath = path.join(`${__dirname}/../../../views/register.html`);
  res.sendFile(myPath);
});


module.exports = router;
