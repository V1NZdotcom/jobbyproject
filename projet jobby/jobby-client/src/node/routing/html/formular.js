const express = require('express');

const router = express.Router();
const path = require('path');


router.get('/:categoryId', (req, res) => {
  // res.send(`formular-${req.params.idDuFormulaire}`);
  // const myPath = '/home/azerty/vincent-serieges/Jobby-client/src/views/formular-reparation.html';

  // home/azerty/vincent-serieges/Jobby-client/src/node/routing/html

//  const myPath = path.join(`${__dirname }/../../../views/formular.html`);
  // res.setHeader('maCategory', '1' )


  // res.render(myPath, {categoryId:req.params.idDuFormulaire})
  //res.sendFile(myPath);
  
  res.render('formular.html', {toto: req.params.categoryId, tata: process.env.API_PROCESS_FORM_URL });

  // res.sendFile(myPath);
  // console.log(`${req.params.idDuFormulaire}`)
});


module.exports = router;
