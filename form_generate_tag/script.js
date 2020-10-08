// 1 : intercepter les informations du form
let form  = document.getElementById('form');

let parentInCanvaSelected = '';

// 2 : fonction qui créait et met l'element dans l'html
let setElementHtml = function (tag, parent, backgroundColor, id, content) {
  let element = document.createElement(tag);
  element.innerHTML = content;
  element.style.backgroundColor = backgroundColor;
  element.id = id;

  console.log(parent);
  if (typeof parent === 'string') {
    document.querySelector(parent).appendChild(element);
  } else {
    parent.appendChild(element);
  }

}

// 
let putElementInSelectParent = function (tag, id) {
  let containerParent = document.getElementById('formParent');
  let option = document.createElement('option');
  option.innerHTML = tag;
  option.id = id;
  containerParent.appendChild(option);
}

// écouteur du submit
form.addEventListener('submit', (event) => {

  event.preventDefault();
  let formTag = form.elements[0].value;
  let formBackgroundColor = form.elements[2].value;
  let formId = form.elements[3].value;
  let formContent = form.elements[4].value;
  let formParent = '';

  //il faut socker l'id du option et faire l'element par rapport à ça
  //donc savoir quel option a été validé 
  // trouver le parent et go ! 

  if (parentInCanvaSelected == '') {
    formParent = form.elements[1].value;
  
    // PROBLEME DE .canva div 
    // parce que le tag seul c'est pas assé, il faut l'id
    // il faut mettre l'id sur l'option aussi
    // et se servir de l'id pour trouver le parent
  } else {
    formParent = parentInCanvaSelected;
  }

  setElementHtml(formTag, formParent, formBackgroundColor, formId, formContent);

  putElementInSelectParent(formTag, formId);

  // stopPropagation(); 

  // écouteurs dans parents dans le canva
  let parentsInCanva = document.querySelectorAll('.canva div, .canva span, .canva a');

  for (let i = 0; i < parentsInCanva.length; i++) {
    parentsInCanva[i].addEventListener('click', selectElement);
  }
});


function selectElement () {
  parentInCanvaSelected = this;
  this.style.border = '2px solid #f0ad4e';

  //deselectionner avec un click exterieur
  let canva = document.querySelector('.canva');

  canva.addEventListener('click', function () {
    let parentsInCanva = document.querySelectorAll('.canva div, .canva span, .canva a');

    for (let i = 0; i < parentsInCanva.length; i++) {
      parentsInCanva[i].style.border = 'none';
    }
    parentInCanvaSelected = '';
  }, true);
}
//voir bouillonement

// METTRE SELECTED SUR LE OPTION EN COURS PAR RAPPORT AU CANVA







// ajouter un écouteur pour chaque element du canva
// si l'element 


// avec la fonction et add if this. quelque chose
//choper l'id et le rechercher avec l'id => # + idtrouvé 


    // j'ai l'id maintenant utilise le pour
            //mettre un focus sur l'element
            //L'utiliser en tant que parent



/// ID UNIQUE !!!



