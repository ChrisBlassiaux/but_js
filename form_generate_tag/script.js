// 1 : intercepter les informations du form
let form  = document.getElementById('form');

let parentInCanvaSelected = '';

// 2 : fonction qui créait et met l'element dans l'html
let setElementHtml = function (tag, parent, backgroundColor, id, content) {
  let element = document.createElement(tag);
  element.innerHTML = content;
  element.style.backgroundColor = backgroundColor;
  element.id = id;

  if (typeof parent === 'string') {
    document.getElementById(parent).appendChild(element); // ici y a une erreur à cause du parent, je n'ai pas l'id d'option
  } else {
    parent.appendChild(element);
  }
}

// 
let putElementInSelectParent = function (tag, id) {
  let containerParent = document.getElementById('formParent'); //what 
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

  //mettre setAttr selected sur celui qui est selectionné 
  if (parentInCanvaSelected == '') {
    formParent = form.elements[1].querySelector('option[selected]').id + '-1'; //il retourne l'id du select parent // id de l'option en cours ici ?  L'element créé ce met dans le parent d'option
  } else {
    formParent = parentInCanvaSelected;
  }

  setElementHtml(formTag, formParent, formBackgroundColor, formId, formContent);

  putElementInSelectParent(formTag, formId);

  // écouteurs dans parents dans le canva
  let parentsInCanva = document.querySelectorAll('.canva div, .canva span, .canva a');

  for (let i = 0; i < parentsInCanva.length; i++) {
    parentsInCanva[i].addEventListener('click', selectElement);
  }
});


function selectElement () {
  parentInCanvaSelected = this;
  this.style.border = '2px solid #f0ad4e';

  let selected = document.querySelector('option[selected]');
  selected.removeAttribute('selected');
  let goSelected = document.getElementById(this.id);
  goSelected.setAttribute('selected', 'selected');

  //deselectionner avec un click exterieur
  let canva = document.querySelector('.canva');

  canva.addEventListener('click', function () {
    let parentsInCanva = document.querySelectorAll('.canva div, .canva span, .canva a');

    for (let i = 0; i < parentsInCanva.length; i++) {
      parentsInCanva[i].style.border = 'none';
    }
    parentInCanvaSelected = '';

    let selected = document.querySelector('option[selected]');
    selected.removeAttribute('selected');
    document.querySelector('#canva').setAttribute('selected', 'selected');
  }, true);
}


// ID DOIT ÊTRE UNIQUE


//J'ai ajouté en HTML LE -1


//voir bouillonement



//PROBLEME DE SELECTION : les parents se selectionne