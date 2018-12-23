
// задача получить последний элемент массива
var goods = ["Товар", "Услуга", "Работа"];

var lastGoods = goods[goods.length - 1];

//задача добавить элемент в конец
var goods = ["Товар", "Услуга", "Работа"];
goods.push("Компьютер");

//задача на осздание массива
var styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[styles.length - 2] = "Классика";
alert( style.shift() );
style.unshift("Рэп", "Регги");

//задача на вывод случайного из массива
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

var rand = Math.floor(Math.random() * arr.length);

alert( arr[rand] );

//задача про калькулятор решение подсмотрено
var numbers = [];

while (true) {

  var value = prompt("Введите число", 0);

  if (value === "" || value === null || isNaN(value)) break;

  numbers.push(+value);
}

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

alert( sum );