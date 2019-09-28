const express = require('express');

const router = express.Router();
const path = require('path');

router.get(['/home', '^/', '/home.html'], (req, res) => {
  console.log(process.env.NODEJSPORT);
  // const myPath = path.join(`${__dirname}/../../../views/home.html`);
  // res.sendFile(myPath);
res.render("home.html", {flags:process.env.API_FLAGS_URL})

});


module.exports = router;
