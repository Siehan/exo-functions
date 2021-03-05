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
console.log(add(10, 5));
// Output : 15

const sub = (nb1, nb2) => {
  return nb1 - nb2;
};
console.log(sub(10, 5));
// Output : 5

const mul = (nb1, nb2) => {
  return nb1 * nb2;
};
console.log(mul(10, 5));
// Output : 50

const div = (nb1, nb2) => {
  return nb1 / nb2;
};
console.log(div(10, 5));
// Output : 2

const calc = (plus, nb1, nb2) => {
  switch (plus) {
    case "+":
      add(nb1, nb2);
      breack;
    case "-":
      sub(nb1, nb2);
      breack;
    case "*":
      mul(nb1, nb2);
      breack;
    case "/":
      div(nb1, nb2);
      breack;
    default:
      Sorry;

      console.log(calc);
  }
};

console.log(calc(10, 5));
