// 1
let words = ['bleu', 'bizarre', 'difficile', 'malade', 'pauvre', 'possible', 'tranquille', 'table', 'avion', 'insoucient', 'gentleman', 'banane']
let word = words[Math.floor(Math.random() * words.length)];

let lives = 10;

let counterTrue = 0;

// 2
let createCaseOfWord = function (mot) {
  for (let i = 0; i < mot.length; i++) {
    let caseOfWord = document.createElement('li');
    caseOfWord.innerHTML = '_';
    document.querySelector('.word').appendChild(caseOfWord);
  }
}

createCaseOfWord(word);

// 3
let alphabet = document.querySelectorAll('.letters li');

for (let i = 0; i < alphabet.length; i++) {
  alphabet[i].addEventListener('click', selectLetter);
}

// 4
function selectLetter() {
  this.className = 'active';
  if (!(word.includes(this.innerHTML))) {
    document.querySelector(`.hangman span:nth-child(${lives})`).style.display = 'block';
    lives--;

     // si l'utilisateur n'a plus de vie
    if (lives == 0) {
      document.querySelector('.end').innerHTML = 'Tu as perdu la partie !';
    } 
  } else {
    for(let i = 0; i < word.length; i++) {
      let letter = word[i];
      
      if (letter == this.innerHTML) {
        document.querySelector(`.word li:nth-child(${i + 1})`).innerHTML = letter;
        counterTrue++;
      }
      
      // si l'alphabet n'a plus de '_'
      if (counterTrue == word.length) {
        document.querySelector('.end').innerHTML = 'Tu as gagné la partie !';
      }
    }
  }
}

//5
let reload = document.querySelector('.btn');
reload.addEventListener('click', function(){
  location.reload();
});
