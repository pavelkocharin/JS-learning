//задача 1
"use strict";
var i = prompt("Каким браузером вы пользуетесь?", "");
if (i == "IE") {
  alert("O, да у вас IE!");
} else if (i == "Chrome"
  || i == "Firefox"
  || i == "Safari"
  || i == "Opera") {
  alert("Да, и эти браузеры мы поддерживаем");
} else {
  alert("Мы надеемся, что и в вашем браузере все ок!");
}

//задача 2
var a = +prompt('a?', '');
switch (a) {
  case 0:
    alert (0);
    break;
  case 1:
    alert (1);
    break;
  case 2:
  case 3:
    alert (2.3);
    break;
}
/*
for (var i = 1; i < 11; i++) {
    if (i % 2 == 1) continue;
    alert(i);
}

//задача 5*
var i = 0;
while (i < 3) {
    alert("номер " + i + "!");
    i++;
}

//задача 6
var value = "";
while (value < 100 && value != null) {
    var value = +prompt("Ввeдите число больше 100", " ");
}*/