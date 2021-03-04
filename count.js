/*
count.js

Ecrire une fonction count qui prend comme paramètre un nombre min, un nombre max et un nombre step.
L'exécution de cette fonction devra afficher sur le terminal tous les nombres de min jusqu'a max avec un intervale de step
*/

const count = (min, max, step) => {
  for (let i = min; i <= max; i += step) {
    console.log(i);
  }
};

count(2, 80, 20);
/* output:
2
22
42
62
*/

/*

count(3, 30, 3);
/* Output :
3
6
9
12
15
18
21
24
27
30
*/
