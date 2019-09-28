// Recuperer les noeud DOM
var categoryDOM = document.querySelector(".categories-box");

// je recupere la data 

var resultAff=""

// traitement bouclage d'element

for( var index=0; index < categories.length ; index ++ ){
    // la clé
    var cle = index
    // la valeur courante (focalise) 
    var value = categories[index]
    // extraction du label ( récuperation decortiquage)
    var label = value.label
    // generation d'une partie d'affichage
    var partiDeMonAffichage = label + "coucocu"
    // assemblage de la partie d'affichage dans un resultat global
    resultAff = resultAff + partiDeMonAffichage
}





// Affichage
categoryDOM.innerHTML = resultAff