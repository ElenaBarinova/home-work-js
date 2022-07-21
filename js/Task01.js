'use strict';

{
  const rainbow = 'padding: 0 3px; color: blue;'
  console.log('%cТипо конвертер',rainbow)

  const getRUB = (money) => {
  let moneyRUB = money;
  moneyRUB *= 1.2;
  moneyRUB *=75;
  return moneyRUB;
  };

  console.log('Стоимость покупки в рублях:',getRUB(80));
}

