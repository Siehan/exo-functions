/*
arrayUtils.js

Ecrivez une fonction biggest qui retourne le plus grand élément d'une liste de nombre.
biggest([99, 100, 101, 1]) // returns 101

arrayUtils.js
Ajouter au fichier précédent une fonction sortAscend qui prend comme paramètre une liste de nombres
et retourne une nouvelle liste dont les nombres sont classés par ordre croissant.
sortAscend([99, 100, 101, 1]) // returns [1, 99, 100, 101]

arrayUtils.js
Ajouter au fichier précédent une fonction makeUnique qui prend comme paramètre une liste de nombre
et retourne une nouvelle liste sans doublons, classée par ordre croissant.
makeUnique([1, 2, 1, 3, 2, 4, 5, 7, 5, 1]) //returns [1, 2, 3, 4, 5, 7]
*/

const biggest = [99, 100, 101, 1];
console.log(Math.max(...biggest));
// output: 101

const sortAscend = [99, 100, 101, 1];
sortAscend.sort((a, b) => a - b);
console.log(sortAscend);
// output: [ 1, 99, 100, 101 ]

const makeUnique = (item, index, array) => {
  return array.indexOf(item) === index;
};
const nbList = [1, 2, 1, 3, 2, 4, 5, 7, 5, 1];
console.log(nbList.filter(makeUnique));
// output: [ 1, 2, 3, 4, 5, 7]
