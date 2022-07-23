'use strict';

const reverseString = (string) => {
  let newString = string;
  for (let x = newString.length - 1; x >= 0 ; x--){
    newString+= string[x];
  }
  return newString;
}

const result = reverseString('иногда я очень долго туплю');
console.log('Строка:', result);
