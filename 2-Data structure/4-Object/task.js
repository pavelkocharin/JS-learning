
// задача 
"use strict"
var user = {
  name: "Вася",
  surname: "Петров",
  name: "Сергей",
};
delete user.name;

//задача по перебору
function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}
var shedule = {};
alert( isEmpty(shedule) );
shedule["8:30"] = "подъём";
alert( isEmpty(shedule) );


//задача по суммированию
var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var sum = 0;

for (var name in solaries) {
  sum += solaries[name];
}

alert( sum );

//задача с наибольшим значением
var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var max = 0;
var maxName = "";
for (var name in salaries) {
  if (max < salaries[name]) {
    max = salaries[name];
    maxName = name;
  }
}

alert( maxName || "нет сотрудников" );