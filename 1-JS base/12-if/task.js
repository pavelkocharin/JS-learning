/*задача 1*/
var nameJS = prompt("Каково «официальное» название JavaScript?", " ");
if (nameJS =="ECMAScript") {
    alert("Верно!");
} else {
    alert("Не знаете? «ECMAScript»!")
}

/*задача 2*/
var number = prompt("Введите число", " ");
if (number > 0) {
    alert("1");
} else if (number < 0) {
    alert("-1");
} else {
    alert("0");
}

/*задача 3*/
var login = prompt("Введите логин:", " ");
if (login == "Хуй") { 
    var password = prompt( "Введите пароль!" , " ");
    if (password == "Чёрный властелин" ) {
        alert ( "Добро пожаловать!" );
    } else if (password =="null") {
        alert( "Вход отменён" );
    } else {
        alert( "Пароль неверен" );
    }
} else if (login =="null") { 
    alert( "Вход отменён" );
} else {
    alert( "Я вас не знаю" );
}

/*задача 4*/
var sum = prompt("a + b", " ");
var message = (sum < 4) ? "Мало" :
    (sum > 4) ? "Много" :
    "Ровно";
alert( message );

/*задача 5*/
var login2 = prompt("Логин?", " ");
var message2 = (login2 == 'Вася') ? 'Привет' :
  (login2 == 'Директор') ? 'Здравствуйте' :
  (login2 == '') ? 'Нет логина' :
  '';
alert( message2 );