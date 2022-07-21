'use strict';

{
  const rainbow = 'padding: 0 3px; color: green;'
  console.log('%cКалькулятор скидок',rainbow)

  const calculate = (price, quantityOfGoods, promo) => {
    let priceDiscounts = price;
    if (quantityOfGoods > 10) {
      priceDiscounts *= 0.97;

      console.log("1 действие: ", priceDiscounts)
    }

    if (priceDiscounts > 30000) {
      let priseAmount = priceDiscounts -30000
      priceDiscounts = priseAmount * 0.85 +30000;
      console.log("2 действие: ", priceDiscounts)
    }

    if (promo === 'METHED') {
      priceDiscounts *=0.9;
    }

    if (promo === 'G3H2Z1' && priceDiscounts > 2000 ) {
      priceDiscounts -= 500;
    }

    return priceDiscounts

}
console.log('Итого: ', calculate(39000, 11, 'METHED'));
}
