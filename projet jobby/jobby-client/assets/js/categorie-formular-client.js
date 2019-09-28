// GENERATEUR SUBMIT
function inputSubmitGenerator(label,myQuestion) {
  // Retour html
  let myReturnHTML = '';
  const codeResponse = myQuestion.code
  // je template
  templateSubmit = ` <input name="${codeResponse}" value="${label}" type="submit"> `;
  // je concatene
  myReturnHTML += templateSubmit;
  return myReturnHTML;
}
// GENERATEUR SELECT
function inputSelectGenerator(myPossiblesResponses,myQuestion) {
  let myReturnHTML = '';
  const codeResponse = myQuestion.code
  const beginSelect = `<select name="${codeResponse}">`;
  myReturnHTML += beginSelect;
  for (let index = 0; index < myPossiblesResponses.length; index++) {
    const value = myPossiblesResponses[index];
    const label = value.label;
    const optionSelect = `<option value="${label}">${label}</option>`;
    myReturnHTML += optionSelect;
  }
  const endSelect = '</select>';
  myReturnHTML += endSelect;
  return myReturnHTML;
}
// GENERATEUR RADIO
function inputRadioGenerator(myPossiblesResponses,myQuestion) {
  // Retour html
  let myReturnHTML = '';
  // je boucle la data
  for (let index = 0; index < myPossiblesResponses.length; index++) {
    // je recup la valeur courante
    const possibleResponse = myPossiblesResponses[index];
    const labelResponse = possibleResponse.label;
    const codeResponse = myQuestion.code
    // je template
    templateResponse = `<label for="repairQuestions">${labelResponse}</label>  
    <input type="radio" value="${labelResponse}" name="${codeResponse}">
          `;
    // je concatene
    myReturnHTML += templateResponse;
  }
  return myReturnHTML;
}
// GENERATEUR CHECKBOX
function inputCheckboxGenerator(myPossiblesResponses,myQuestion) {
  let myReturnHTML = '';
  for (let index = 0; index < myPossiblesResponses.length; index++) {
    const value = myPossiblesResponses[index];
    const label = value.label;
    const codeResponse = myQuestion.code
    const template = `${label}<input type="checkbox" value="${value.label}" name="${codeResponse}">`;
    myReturnHTML += template;
  }
  return myReturnHTML;
}
// ALGO PRINCIPAL
function afficheMesForm(allMyQuestions) {
  let myReturnHTML = '';
  for (let index = 0; index < allMyQuestions.length; index++) {
    const myQuestion = allMyQuestions[index];
    const label = myQuestion.label;
    const type = myQuestion.type;
    const possiblesResponses = myQuestion.possiblesResponses;
    if (type === 'radio') {
      const mesInputsRadio = inputRadioGenerator(possiblesResponses,myQuestion);
      const templateRadio = `
              <section class=question-box>
                      <h3>${label}?</h3>
                    ${mesInputsRadio}
              </section>`;
      myReturnHTML += templateRadio;
    } else if (type === 'input') {
      const templateInput = `<section class=question-box>
                              <h3>${label}?</h3>
                              <input type="input">
                              </section>
          `;
      myReturnHTML += templateInput;
    } else if (type === 'checkbox') {
      const mesInputCheckbox = inputCheckboxGenerator(possiblesResponses,myQuestion);
      const templateCheckbox = `
          <section class=question-box><h3>${label}?</h3>${mesInputCheckbox}<section>
            `;
      myReturnHTML += templateCheckbox;
    } else if (type === 'select') {
      const inputSelect = inputSelectGenerator(possiblesResponses,myQuestion);
      const templateSelect = `${label}<section>${inputSelect}</section>`;
      myReturnHTML += templateSelect;
    } else if (type === 'submit') {
      const inputSubmit = inputSubmitGenerator(label,myQuestion);
      const templateSelect = `${label}`;
      myReturnHTML += templateSubmit;
    }
  }
  return myReturnHTML;
}
// affichage

function entryPoint() {
//  recup de mon script de data api / et text content recupere le contenu entre les balise script
  const myDataEnString = document.getElementById('myNodeData').textContent;
  // fonction de conversion de string à json avec le json parse
  const myDataEnJSON = JSON.parse(myDataEnString);
  // et j'utilise ma string convertie en json qui etait  dans ma balise script
  // pour récuperer la catégorie et appeler l'api avc la bonne catégorie
  const formularApiURL = `http://127.0.0.1:9998/api/formular/${myDataEnJSON.categoryId}`;
  // je filtre la data formularApiURL
  fetch(formularApiURL)
    .then(
      response => response.json(),

      // function (reponse){
      //   return response.json()
      // }
    )
    .then(
      (myData) => {
        // tu as ta data et tu execute l'algo qui sait faire l'affichage avec ta data
        const myForm = document.querySelector('#myForm');
        myForm.innerHTML = afficheMesForm(myData);
      },
    );
}
