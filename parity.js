/*
parity.js;

Ecrire une fonction isOdd qui prend un nombre en paramètre et qui devra retourner true
si le nombre passé en paramètre est impair, sinon la fonction retournera false.

parity.js;

Ajouter au fichier précédent une fonction isEven qui prend un nombre en paramètre et qui devra retourner
true si le nombre passé en paramètre est pair, sinon la fonction retournera false.
la fonction isEven devra absolument utiliser la fonction isOdd pour effectuer sa vérification de parité.
*/

const isOdd = (nb) => {
  if (nb % 2 !== 0) return true;
  else return false;
};
console.log(isOdd(2)); //let result = isOdd(3);
//Output : False

const isEven = (nb) => {
  if (nb % 2 !== isOdd) return true;
  else return false;
};

console.log(isEven(1)); //let result = isEven(3);
//Output : True
