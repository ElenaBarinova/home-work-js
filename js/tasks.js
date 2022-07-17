'use strict';

{
  const rain = Math.round(Math.random());

  console.log('rain:', rain);

  if (rain === 1) {
    alert('Пошёл дождь. Возьмите зонт!');
  }
  if (Math.round(rain) === 0) {
    alert("Дождя нет");
  }
}


{
  const mathematics = prompt ('Введите полученные баллы по математике');
  const russianLanguage = prompt ('Введите полученные баллы по Русскому языку');
  const informatics = prompt ('Введите полученные баллы по информатике');
  const passingScore = ((+mathematics) + (+russianLanguage) + (+informatics));

  console.log(passingScore);
  console.log(typeof passingScore)

  if (passingScore >= 265){
    alert('Поздравляю, вы поступили на бюджет!');
  }else{
    alert( "Не набран проходной балл" );
  }
}


{
  const money = prompt ('Укажите сумму, которую хотите снять. Доступны купюры  номиналом 100, 200, 500, 1000 руб ');

  if (money % 100 ){
    console.log('Нет доступных купюр');
  }else{
    console.log('Сумма доступна к снятию');
  }

}
