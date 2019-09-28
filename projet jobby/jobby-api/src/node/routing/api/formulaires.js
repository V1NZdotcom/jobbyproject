const express = require('express');

const router = express.Router();
const myQuestions = [{
  code: 'codeDeLaQuestion1',
  label: 'dans quel état est l\'equipement à réparer',
  categoryId: 1,
  multiple: false,
  type: 'radio',
  possiblesResponses: [
    {
      code: 'code de la réponse 1',
      label: 'hors service',
    },
    {
      code: 'code de la réponse 2',
      label: 'très défectueux',
    },
    {
      code: 'code de la réponse 3',
      label: 'un peu défectueux',
    },
  ],
},
{
  code: 'codeDeLaQuestion2',
  label: 'quelle est la taille de votre cuisine ?',
  categoryId: 2,
  multiple: false,
  type: 'input',
  possiblesResponses: [
  ],
},
{
  code: 'codeDeLaQuestion3',
  label: 'quels electomenager avez vous dans votre cuisine ?',
  categoryId: 2,
  multiple: true,
  type: 'checkbox',
  possiblesResponses: [
    {
      code: 'code de la réponse 4',
      label: 'frigo',
    },
    {
      code: 'code de la réponse 5',
      label: 'four',
    },
    {
      code: 'code de la réponse 6',
      label: 'mixeur',
    },
  ],
},
{
  code: 'codeDeLaQuestion4',
  label: 'quel est ton sport prefere ?',
  categoryId: 1,
  multiple: false,
  type: 'select',
  possiblesResponses: [
    {
      code: 'code de la réponse 4',
      label: 'foot',
    },
    {
      code: 'code de la réponse 5',
      label: 'baseball',
    },
    {
      code: 'code de la réponse 6',
      label: 'ping pông',
    },
  ],
},
{
  code: 'codeDeLaQuestion5',
  label: 'Soumettre',
  categoryId: 1,
  multiple: false,
  type: 'submit',
  possiblesResponses: [],
},
{
  code: 'codeDeLaQuestion6',
  label: 'Annuler',
  categoryId: 1,
  multiple: false,
  type: 'submit',
  possiblesResponses: [],
},
];
router.get('/', (req, res) => {
  res.json(myQuestions);
});

router.get('/:categoryId', (req, res) => {
  const myReturn = [];

  for (let index = 0; index < myQuestions.length; index++) {
    const myQuestion = myQuestions[index];
    if (myQuestion.categoryId === parseInt(req.params.categoryId)) {
      myReturn.push(myQuestion);
    }
  }

  res.json(myReturn);
});


module.exports = router;
