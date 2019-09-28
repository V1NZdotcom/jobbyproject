
function handleClickOnFlagAndSetLanguage() {
  const flagClientFrDOM = document.querySelector('#flagClientFr');
  flagClientFrDOM.addEventListener('click', function () {
    localStorage.setItem('language', flagClientFrDOM.dataset.malang);

   // doAnEffect(this);
    entryPointMenu()
    });

  const flagClientUSDOM = document.querySelector('#flagClientUs');
  // for(var item in flagClientUSDOM){
  //         console.log(item, flagClientUSDOM[item])
  //     }

  flagClientUSDOM.addEventListener('click', function () {
    localStorage.setItem('language', flagClientUSDOM.dataset.malang);
   // doAnEffect(this);
    entryPointMenu()

  });
}
function doAnEffect(flagClientDOM) {
  flagClientDOM.classList.add('sticky');
}

function entryPointFlag() {
  // var maData = [
  //   "fr", "us"
  //  ]

  //  fetch()

  const template = `
        <span id="flagClientFr" class="flag-icon flag-icon-fr" data-malang='fr'></span>
        <span id="flagClientUs" class="flag-icon flag-icon-us"  data-malang='us'></span>
    `;

  document.querySelector('#mesFlags').innerHTML = template;
  handleClickOnFlagAndSetLanguage();
 
}
