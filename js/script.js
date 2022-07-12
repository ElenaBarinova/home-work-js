'use strict';

/*const nameProduct = 'tomato';
const countProduct = 3;
const categoryProduct ='vegetable';
const priseProduct = 20;

console.log('Name Product: ', nameProduct);

console.log('Grand total:' , countProduct*priseProduct);*/

const nameProduct = prompt ('Введите, название, товара');
console.log('Название товара: ', nameProduct);
console.log('Название товара: ', typeof nameProduct);

const countProduct = prompt ('Укажите, количество, товара');
const countProduct2 =Number (countProduct)
console.log('Количество товара: ', countProduct2);
console.log('Количество товара: ',typeof countProduct2);
Number.isNaN(countProduct2)

const categoryProduct = prompt ('Укажите, категорию, товара');
console.log('Категория товара: ', categoryProduct);
console.log('Категория товара: ',typeof categoryProduct);

const priseProduct = prompt ('Укажите, цену, товара');
const priseProduct2 = Number (priseProduct);
console.log('Цена товара: ', priseProduct2);
console.log('Цена товара: ', typeof priseProduct2);
Number.isNaN(priseProduct2)


console.log(`На складе ${countProduct2} единиц товара "${nameProduct}" на сумму ${priseProduct2*countProduct2} рублей`)
