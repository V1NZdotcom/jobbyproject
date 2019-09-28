
function mesCategories(categories){
    
    // 1 Recherche et récupération de noeuds DOM
    var categoriesDisplayDOM = document.querySelector(".categories-box");

    // on prepare un resultat final que l'on injectera dans l'affichage
    var resultatFinal = ""

    // traitement et concatenation des categories
    // on recupere la data
    

    // boucle sur la data (les categories)
    for(index = 0; index < categories.length; index = index +1) {
    
        // recuperation des valeurs de la categorie courante
        var category = categories[index]; 
        labelCat = category.label
        // construction d'une ligne de categorie en html
        var catHtml = `
        <div class="categorie-box">
                <a href="./formular.html">
                    <h4>${labelCat}</h4>
                    <img src="./img/reparation.jpg" class="categorie-img" alt="">
                </a>   
            </div>
        `
        // concatenation de l'html produit dans le resultat final
        resultatFinal = resultatFinal + catHtml;
        

    }
    



    // Affichage 
    categoriesDisplayDOM.innerHTML = resultatFinal ;

    return
}


function entryPoint(){
    var myRequestURL = "http://127.0.0.1:5500/vincent-serieges/Jobby-front/data/categories.json"


    fetch(myRequestURL)
        .then(
            function(response) { 
                

                return response.json()
            }
        )
        .then(
            function(data) {
                mesCategories(data)
            }
        )
}