/*
typeOf.js

Ecrire une fonction typeOf qui prend comme paramètre une variable,
et qui retourne une string qui sera le nom du type de cette variable passée en paramètre.
Vous devrez utiliser l'opérateur typeof pour cela
*/

const typeOf = (whoIam) => {
  return typeof whoIam;
};

console.log(typeOf(2));
// Output : number

/*
console.log(typeOf("Qui suis-je ?"));
// 2 Output : string
*/
