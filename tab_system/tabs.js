
  /*
  Si on click sur un li de la ul.tabs
    Enlever la class active de l'onglet actif
    Lui mettre la class active => onglet cliqué

  On retire la class actif sur le contenu 
  on ajoute la class active sur le contenu correspondant à mon clique

  */


(function() {

  let afficherOnglet = function (a) {
    let li = a.parentNode;
    let div = a.parentNode.parentNode.parentNode;

    if (a.parentNode.classList.contains('active')) {
      return false
    }

    //on retire la class active sur l'onglet(tab) actif
    div.querySelector('.tabs .active').classList.remove('active');

    //On ajoute la class active à l'onglet actuel 
    li.classList.add('active');

    //On retire la class active du content actif
    div.querySelector('.tab-content.active').classList.remove('active');

    //On ajoute la class active à au content actuel
    div.querySelector(a.getAttribute('href')).classList.add('active');

  }

  let tabs = document.querySelectorAll('.tabs a');

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function (e) {
      afficherOnglet(this)
    })
  }

  /*
    Je recup le hash
    ajouter la class active sur le lien qui aura comme href le hash
    enlever la class active sur les autres elements
    AFFICHER / masquer les contenus
  */

  let hash = window.location.hash
  let a = document.querySelector("a[href='" + hash + "']");
  if (a !== null && !a.classList.contains('active')) {
    afficherOnglet(a);
  }

})();