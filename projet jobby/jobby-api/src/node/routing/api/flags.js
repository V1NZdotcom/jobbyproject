const express = require('express');

const router = express.Router();

const myFlags = [
 "fr", "us"
];

router.get('/', (req, res) => {
  res.json(myFlags);
});


module.exports = router;
