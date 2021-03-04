/*
calc.js
Ecrire une fonction add qui prend 2 paramètres et qui devra retourner la somme des 2 paramètres.

calc.js
Ajouter au fichier précédent une fonction sub qui prend 2 paramètres et qui devra retourner la soustraction des 2 paramètres.

calc.js
Ajouter au fichier précédent une fonction mul qui prend 2 paramètres et qui devra retourner la multiplication des 2 paramètres.

calc.js
Ajouter au fichier précédent une fonction div qui prend 2 paramètres et qui devra retourner la division des 2 paramètres.

calc.js
Ajouter au fichier précédent une fonction calc qui prend 3 paramètres:
un caractère parmi les 4 suivants: +, -, *, /. Ces caractères détermineront l'opération de calcul à effectuer.
un premier nombre
un deuxième nombre
En fonction du caractère passé en paramètre, l'opération de calcul correspondante devra être appliquée aux 2 autres paramètres,
et le résultat sera retourné Vous devrez absolument vous servir des 4 fonctions add, sub, mul et div écrites précédemment.

*/

const add = (nb1, nb2) => {
  return nb1 + nb2;
};
/*let result = add(10, 5);*/
console.log(add(10, 5));

const add = (nb1, nb2) => {
  return nb1 - nb2;
};
console.log(add(10, 5));

const add = (nb1, nb2) => {
  return nb1 * nb2;
};
console.log(add(10, 5));

const add = (nb1, nb2) => {
  return nb1 / nb2;
};
console.log(add(10, 5));
