/*
stringUtils.js

Ecrire une fonction reverseStr qui prend en paramètre une string et qui retourne cette string inversée.
Si le paramètre passé est 'Hello!' la fonction devra retourné '!olleH'

stringUtils.js
Ajouter au fichier précédent une fonction isPalindrome qui prend une string en paramètre
et qui retourne true si la string est un palindrome, sinon la fonction devra retourner false.
Vous devrez utiliser la fonction reverseStr pour effectuer cette vérification.
*/

const reverseStr = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverseStr("Hello!"));
// Output : !olleH



const isPalindrome = (strUtils) => {
  for (const str of strUtils)
    if (isPalindrome.length === str.length) {
      //if (isPalindrome(str)) {
      console.log(`${str}) is a palindro`);
    } else {
      console.log(`${str}) is not a palindro`);
    }
};
isPalindrome("eye");

/*
  var re = /[\W_]/g;
  var lowRegStr = stringUtils.toLowerCase().replace(re, "");
  var reverseStr = lowRegStr.split("").reverse().join("");
  return reverseStr === lowRegStr;
};
