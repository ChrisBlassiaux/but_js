/**
Lorsque je clique sur le bouton dans la class spoiler
alors 
  ajoute la clas visible à l'element suivant


nextElementSibling => le premier element suivant enfant
parentNode => envoie le parent du nœud spécifié dans l'arborescence de DOM .
.removeChild() => retire un nœud enfant de l'arbre DOM et retourne le nœud retiré.
**/


//first try
// let button = document.querySelector('.spoiler button');

// button.addEventListener('click', function () {
//   this.nextElementSibling.classList.add('visible');
//   this.parentNode.removeChild(this);
// })

(function() {
  let elements = document.querySelectorAll('.spoiler');

  let createSpoilerButton = function (element) {
    //créer la span.spoiler-content
    let span = document.createElement('span');
    span.className = "spoiler-content"; //classname quand il n'y a pas encore de class
    span.innerHTML = element.innerHTML

    //créer le bouton
    let button = document.createElement('button');
    button.textContent = 'Afficher le spoiler';

    //on ajout les elements au DOM
    element.innerHTML = ''; //Netoyer l'elements
    element.appendChild(button);
    element.appendChild(span);

    //On met l'écouteur au click 
    button.addEventListener('click', function () {
      button.parentNode.removeChild(button);
      span.classList.add('visible');
    })
  }

  for(let i = 0; i <= elements.length; i++) {
    createSpoilerButton(elements[i]);
  }
})()

//Englober par un function qui s'auto execute, ne peut pas être
// lu par le reste du JS


//ajouter un écouteur en hover pour cacher les spoilers ! 
//DEMAIN MATIN ! 


//essayer de réflechir de manière général, est-ce que je ne peux pas améliorer les choses

