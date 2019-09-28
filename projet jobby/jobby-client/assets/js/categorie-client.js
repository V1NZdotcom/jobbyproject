function afficheLesCategories(mesCategories) {
  const categoriesBoxDOM = document.querySelector('.categories-box');
  let myReturnHTML = '';
  for (let index = 0; index < mesCategories.length; index++) {
    const value = mesCategories[index];
    const templateData = `
            <div class="categorie-box">
                        <a href="${value.link}">
                            <h4>${value.label}</h4>
                            <img src="${value.img}" class= categorie-img alt="">
                        </a>
                    </div>
            `;
    myReturnHTML += templateData;
  }
  categoriesBoxDOM.innerHTML = myReturnHTML;
}

function entryPoint() {
  const categoriesApiURL = 'http://127.0.0.1:9998/api/categories';
  fetch(categoriesApiURL)
    .then(
      response => response.json(),

      // function (reponse){
      //   return response.json()
      // }
    )
    .then(
      (myData) => {
        // tu as ta data et tu execute l'algo qui sait faire l'affichage avec ta data
        afficheLesCategories(myData);
      },
    );
}
