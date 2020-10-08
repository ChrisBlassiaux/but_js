notes :

.stopPropagation();
S'arrête après le premier écouteur (event)

Si écouteurs sur écouteurs,
Phase de capture et de bouillonement : (on peut les inverser, inverser la profondeur)
addEventListener(1, 2, 3); 3ème paramètre (true, false ou target)

! Les ids doivent être unique

AJAX: 
Garder les elements du form après reload 
event.preventDefault()
On peut faire ce que l'on veut

Steps : 
1- L'utilisateur soumet le formulaire rempli 
2- Nous utilisons les informations intercepté pour créer l'element dans le canva (en direct AJAX), 
    Avec les bonnes propriété 
    Et .appendChild() sur le bon parent
  => Créer un fonction qui prend les différents paramètre

3- Le parent apparaît dans la liste des parents 

4- On offre la possibilité à l'utilisateur de directement selectionner le parent sur le canva
      Phase de capture et de bouillonement 
