/*
pyramid.js

En vous inspirant de la fonction showStars vue en cours, Ecrire une fonction pyramid qui prend 3 paramètres:

le nombre d'éléments qui sera la base de la pyramide
un boolean pour vérifier si la pyramide sera générée à l'envers ou à l'endroit
une string (un caractère) qui sera le motif à afficher contrairement à l'exemple du cours qui affiche
par défaut le caractère *.
*/

const pyramid = (nbBase, reverse, char) => {
  if (!reverse) {
    for (let i = 1; i <= nbBase; ++i) {
      console.log(char.repeat(i));
    }
  } else {
    for (let i = nbBase; i >= 1; --i) {
      console.log(char.repeat(i));
    }
  }
};

pyramid(13, false, "€");

/*
OUTPUT :
€
€€
€€€
€€€€
€€€€€
€€€€€€
€€€€€€€
€€€€€€€€
€€€€€€€€€
€€€€€€€€€€
€€€€€€€€€€€
€€€€€€€€€€€€
€€€€€€€€€€€€€
*/

/*
OUTPUT if pyramid(10, true, ";-)");

;-);-);-);-);-);-);-);-);-);-)
;-);-);-);-);-);-);-);-);-)
;-);-);-);-);-);-);-);-)
;-);-);-);-);-);-);-)
;-);-);-);-);-);-)
;-);-);-);-);-)
;-);-);-);-)
;-);-);-)
;-);-)
;-)

*/
