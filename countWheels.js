/*
countWheels.js

un garagiste vous demande de compter le nombre de roues qu'il y a dans son garage.
Les roues sont toutes montées sur des véhicules de types:
monocycle: 1 roue moto: 2 roues voiture: 4 roues limousine: 6 roues
Ecrivez une fonction countWheels qui prend 4 paramètres, qui correspondent au nombre
de chaque véhicules et qui retourne le nombre de roues totales:

countWheels(10, 20, 7, 2) //returns 90
countWheels(2, 3, 4, 5) // returns 54

les arguments de la fonction doivent être passés dans l'ordre suivant:
countWheels(nb_monocycle, nb_moto, nb_voiture, nb_limousine)
*/

const NB_WHEELS_CYCLE = 1;
const NB_WHEELS_MOTO = 2;
const NB_WHEELS_CAR = 4;
const NB_WHEELS_LIMOUSINE = 6;

const countWheels = (nb_monocycle, nb_moto, nb_voiture, nb_limousine) => {
  return (
    nb_monocycle * NB_WHEELS_CYCLE +
    nb_moto * NB_WHEELS_MOTO +
    nb_voiture * NB_WHEELS_CAR +
    nb_limousine * NB_WHEELS_LIMOUSINE
  );
};

console.log(countWheels(10, 20, 7, 2)); //returns 90
console.log(countWheels(2, 3, 4, 5)); // returns 54

console.log(countWheels(2, 3, 5, 7)); //
