//задача 1
"use strict";
function sumTo (n) {
  if (n > 1) {
    return n + sumTo(n-1);
  } else {
    return n;
  }
}
alert (sumTo (100));

//задача 2
function factorial(n) {
    return (n != 1) ? n * factorial (n - 1) : 1;
  }
  
  alert( factorial(5) ); 
  
"use strict";
var age;
function checkAge(age) {
  return (age > 18) || confirm ("Родители ата-та!");
}

function checkAge(age) {
  return (age > 18) ? true: confirm ("Родители ата-та!");
}

//задача 3
function min(a,b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

//задача 4
function pow(x, n) {
  var result = x;
  for (var i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
var x = prompt("x?", '');
var n = prompt("n?", '');
if (n <= 1) {
  alert('Степень ' + n +
    'не поддерживается, введите целую степень, большую 1'
  );
} else {
  alert( pow(x, n) );
}