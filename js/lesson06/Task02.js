'use strict';

//Простые числа - это натуральные числа больше единицы, которые делятся нацело только на единицу и на себя.

  const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};


console.log('Простое число?:' , isPrime(8));
