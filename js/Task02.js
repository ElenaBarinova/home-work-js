'use strict';


const rainbow4 = 'padding: 0 3px; color: orange;'
console.log('%cСтроки',rainbow4)

const modifyString = (string) => {
  const string1 = string;
  return string1[0].toUpperCase() + string1.substring(1).toLowerCase()
};

console.log('Строка:', modifyString('иногда я очень Долго тУплю'));
