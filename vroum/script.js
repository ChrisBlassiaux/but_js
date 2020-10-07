/* pseudo-code 

récuperer le noeud car
récuperer la position du noeud car

à chaque fois que l'utilisateur click sur une fleche 
On modifie l'element en l'occurence 

*/

let car = document.querySelector('.car');
let bush = document.querySelector('.bush');

let collision = document.querySelector('.collision');

let carPos = car.getBoundingClientRect();
let bushPosX = bush.getBoundingClientRect().x;
let bushPosY = bush.getBoundingClientRect().y + bush.getBoundingClientRect().height;

let bushPosXWithoutWidthCar = bushPosX - car.getBoundingClientRect().width;

let y = car.getBoundingClientRect().y;
let x = car.getBoundingClientRect().x;

let xHtml = document.querySelector('.x');
let yHtml = document.querySelector('.y');

xHtml.innerHTML = x + 'px';
yHtml.innerHTML = y + 'px';

document.addEventListener('keypress', function (e) {
 
    switch (e.key) {
      case 'z':
        if (x < bushPosXWithoutWidthCar || y >= bushPosY || x >= bushPosX + bush.getBoundingClientRect().width - 1) {
          y--;
        } else {
          collision.style.display = "block";
        }
        break;
      case 's':
        y++;
        if (y === bushPosY - 1 || y > bushPosY) {
          collision.style.display = "none";
        } 
        break;
      case 'q':
        if (x <= bushPosXWithoutWidthCar || x >= bushPosX + bush.getBoundingClientRect().width || y >= bushPosY) {
          x--;
        } else {
          collision.style.display = "block";
        }
        if (x === bushPosXWithoutWidthCar - 1) {
          collision.style.display = "none";
        } 
        console.log(bushPosX);
        console.log(bush.getBoundingClientRect().height);
        break;
      case 'd':
        if (x < bushPosXWithoutWidthCar || y >= bushPosY || (x + 1) >= bushPosX + bush.getBoundingClientRect().width) {
          x++;
        } else {
          collision.style.display = "block";
        }
        if (x >= (bushPosX + bush.getBoundingClientRect().width)) {
          collision.style.display = "none";
        } 
        break;
      default:
        alert('Utilise les touches : Z, Q, S et D');
    }
    
    car.style.top = y + 'px';
    car.style.left = x + 'px';

    xHtml.innerHTML = x + 'px';
    yHtml.innerHTML = y + 'px';

});

    //Faire un schema pour gérer le tour du bush

//Mercredi 
// Faire le jeu du pendu en JS