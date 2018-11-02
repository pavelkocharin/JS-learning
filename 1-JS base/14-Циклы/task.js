//задача 4
"use strict";
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
}

//задача 7
nextPrime:
    for (var i = 2; i <= 10; i++) {
        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        console.log( i );
    }