'use strict';

/*
НОД(0, n) = n; НОД(m, 0) = m;НОД(m, m) = m;
НОД(1, n) = 1; НОД(m, 1) = 1;
Если m, n чётные, то НОД(m, n) = 2*НОД(m/2, n/2);
Если m чётное, n нечётное, то НОД(m, n) = НОД(m/2, n);
Если n чётное, m нечётное, то НОД(m, n) = НОД(m, n/2);
Если m, n нечётные и n > m, то НОД(m, n) = НОД((n-m)/2, m);
Если m, n нечётные и n < m, то НОД(m, n) = НОД((m-n)/2, n);


function NOD (x, y) {
	if (y > x) return NOD(y, x);
	if (!y) return x;
	return NOD(y, x % y);
}
console.log(NOD(10, 25));

*/


const NOD = (x,y) => {
  if (x===0 || y===0) {
    const fff = 0;
  }

  if (x===1 || y===1) {
    const fff =1;
  }
  return fff


}
