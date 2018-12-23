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