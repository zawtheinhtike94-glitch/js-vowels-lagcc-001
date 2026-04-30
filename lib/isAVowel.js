'use strict';

var isAVowel = function(letter) {
  return letter === "a" ||
         letter === "e" ||
         letter === "i" ||
         letter === "o" ||
         letter === "u";
};

module.exports = isAVowel;
 