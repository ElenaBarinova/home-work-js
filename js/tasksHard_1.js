'use strict';

{
  const rainbow = 'padding: 0 3px; color: red;'
  console.log('%cПервый вариант налога',rainbow);

  const earnings = prompt('Введите  сумму дохода');
  let tax =  0;

  console.log('Доход:', earnings);

  if (earnings <= 15000 && earnings > 0) {
    tax = 0.13;
  } if ( earnings > 15000 &&  earnings < 50000) {
  tax = 0.2;
} if (earnings >= 50000) {
  tax = 0.3;
}

  const  taxAmount = earnings * tax

  console.log('Налоговая ставка', tax * 100 ,'%')
  console.log('Сумма налога:', taxAmount )
}


{
  const rainbow = 'padding: 5px 3px; color: red;'
  console.log('%cВторой вариант налога',rainbow)

  const earningsOther = prompt('Введите еще одну сумму дохода ');
  let excessTax = 1;
  let excessEarnings = 0
  let taxAmount = 0


  console.log('Доход:', earningsOther);

  if (earningsOther <= 15000 && earningsOther > 0) {
    taxAmount = earningsOther * 0.13;
  } if ( earningsOther > 15000 &&  earningsOther < 50000) {
    excessTax = 0.2;
    excessEarnings = earningsOther - 15000;
    taxAmount = 15000 * 0.13 + excessEarnings * excessTax;
  } if (earningsOther >= 50000) {
    excessEarnings = earningsOther - 50000;
    taxAmount = 15000 * 0.13 + excessEarnings * excessTax;
  }

  console.log('Сумма налога:', taxAmount )
}
