/*
convertMiToKm.js

Ecrire une fonction convertMiToKm qui fait la conversion d'une distance exprimée en Milles, en Kilomètres.
1 Mille est à égal à 1.60934 Kilomètres.
*/

const convertMiToKm = (miles) => {
  return (kilometers = miles * 1.60934);
};

console.log(convertMiToKm(30).toFixed(2));
// Output : 48.28
// if 22 miles : Output = 35.41;
