function afficheLeMenu(myMenuData) {
  const menuItemsDOM = document.querySelector('.menu-items');
  let myReturnHTML = '';
  for (let index = 0; index < myMenuData.length; index++) {
    const value = myMenuData[index];
    const label = value.label;
    const link = value.link;
    const templateData = ` <a href="${link}">${label}</a>`;


    myReturnHTML += templateData;
  }
  menuItemsDOM.innerHTML = myReturnHTML;
}

function entryPointMenu() {
  var lang = localStorage.getItem("language")
  if(lang == null){
    lang = 'fr'
  }

  const menuApiURL = 'http://127.0.0.1:9998/api/menu?maLangue=' + lang;
  fetch(menuApiURL)
    .then(
      response => response.json(),

      // function (reponse){
      //   return response.json()
      // }
    )
    .then(
      (myData) => {
        // tu as ta data et tu execute l'algo qui sait faire l'affichage avec ta data
        afficheLeMenu(myData);
      },
    );
}
