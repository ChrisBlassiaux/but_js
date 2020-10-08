// 1 : intercepter les informations du form
let form  = document.getElementById('form');

// 2 : fonction qui créait et met l'element dans l'html
let setElementHtml = function (tag, parent, borderColor, id, content) {
  let element = document.createElement(tag);
  element.innerHTML = content;
  element.style.border = 'solid 2px ' + borderColor;
  element.id = id;
  document.querySelector(parent).appendChild(element);
}

// 
let putElementInSelectParent = function (tag) {
  let containerParent = document.getElementById('formParent');
  let option = document.createElement('option');
  option.innerHTML = tag;
  containerParent.appendChild(option);
}

// écouteur du submit
form.addEventListener('submit', (event) => {

  event.preventDefault();
  let formTag = form.elements[0].value;
  let formParent = form.elements[1].value;
  let formBorderColor = form.elements[2].value;
  let formId = form.elements[3].value;
  let formContent = form.elements[4].value;
 
  setElementHtml(formTag, formParent, formBorderColor, formId, formContent);

  putElementInSelectParent(formTag);

  // stopPropagation() 
});




