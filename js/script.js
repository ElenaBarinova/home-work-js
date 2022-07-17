'use strict';


const nameProduct = prompt ('Введите, название, товара');
const countProduct = prompt ('Укажите, количество, товара');
const categoryProduct = prompt ('Укажите, категорию, товара');
const priseProduct = prompt ('Укажите, цену, товара');


if (countProduct > 0 && priseProduct > 0){
  console.log(`На складе ${countProduct} единиц товара "${nameProduct}" на сумму ${priseProduct*countProduct}
 рублей`);
}else{
  alert( "Вы ввели некорректные данные" );
}
