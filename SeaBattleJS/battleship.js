'use strict'
//helper блок предварительной информации
prompt("Готов повоевать за Родину, сынок?", "Так точно, сэр!");

/*
// model генерации игрового поля от размеров сетки
function generateField () {
	var row = prompt("Введите размеры игрового поля: количество строк (от 4 до 7):", "7");
	var column = prompt("Введите размеры игрового поля: количество столбцов (от 4 до 7):", "7");
	//условия корректоности введённых данных
	var isColumnCorrent = column && column >= 4 && column <= 7 && !isNaN(column);
	var isRowCorrent = row && row >= 4 && row <= 7 && !isNaN(row);
	if (isColumnCorrent && isRowCorrent) {
		var battleField = '<table class="battleField">';
		for (var i = 0; i <= row; i++) {
			battleField += '<tr class ="battleField__tr">';
			for (var j = 0; j <= column; j++) {
				battleField += '<td class = "battleField__td" data-id=" ' + i + j + ' ">' + '</td>';				
			}
			battleField += '</tr>';
		}
		battleField += '</table>';
		document.querySelector('.battle-board__field').innerHTML = battleField;
		//нанесение разметки на шкалы 
		var numbers = ['', '1', '2', '3', '4', '5', '6', '7'];
		var tdNumbers = document.querySelectorAll('.battleField__tr:first-child > .battleField__td');
		for (var i = 0; i < tdNumbers.length; i++) {
			tdNumbers[i].innerHTML = numbers[i];
		}
		var letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];
		var tdLetters = document.querySelectorAll('.battleField__tr > .battleField__td:first-child');
		for (var k = 0; k < tdLetters.length; k++) {
			tdLetters[k].innerHTML = letters[k];
		}
		//внесение в идентефикатор значения буквы вместо цифры, знаю, что лучше циклом - не сообразил
		var td = document.querySelectorAll('.battleField__td');
		for (var i = 0; i < td.length; i++) {
			var idValue = td[i].getAttribute('data-id');
			if (idValue.charAt(1) == 1) {
				td[i].setAttribute("data-id",  "A" + idValue.charAt(2));
			} else if (idValue.charAt(1) == 2) {
				td[i].setAttribute("data-id",  "B" + idValue.charAt(2));
			} else if (idValue.charAt(1) == 3) {
				td[i].setAttribute("data-id",  "C" + idValue.charAt(2));
			} else if (idValue.charAt(1) == 4) {
				td[i].setAttribute("data-id",  "D" + idValue.charAt(2));
			} else if (idValue.charAt(1) == 5) {
				td[i].setAttribute("data-id",  "E" + idValue.charAt(2));
			} else if (idValue.charAt(1) == 6) {
				td[i].setAttribute("data-id",  "F" + idValue.charAt(2));
			} else if (idValue.charAt(1) == 7) {
				td[i].setAttribute("data-id",  "G" + idValue.charAt(2));
			}
		}
	} else {
		alert('Встань в строй, сынок! Подумай кастрюлей на голове, что ты вводишь!');
		generateField();
	}
}

generateField()

*/
//модель объекта представления (сообщение, попадание, промах)
var view = {
	displayMessage: function(msg) {
		document.querySelector('.body-board__messageArea').innerHTML = msg;
	},
// координата выстрела, отбирается по атрибуту
	displayHit: function(id) {
		var cell = document.querySelector('[data-id="'+ id + '"]');
		cell.setAttribute ('class', 'hit');
	},

	displayMiss: function(id) {
		var cell = document.querySelector('[data-id="'+ id + '"]');
		cell.setAttribute ('class', 'miss');
	}
};


//модель текущего состояния игры
var model = {
	//число кораблей
	numShips: 3,
	// высота поля
	row: prompt("Введите размеры игрового поля: количество строк (от 4 до 7):", "7"),
	//длина поля
	column: prompt("Введите размеры игрового поля: количество столбцов (от 4 до 7):", "7"),
	//длина корабля
	shipLength: 3,
	//потоплено кораблей
	shipsSunk: 0,
	//корабли с локацией
	ships: [{ locations: ['0', '0', '0'], hits: ['', '', ''] },
			 { locations: ['0', '0', '0'], hits: ['', '', ''] },
			 { locations: ['0', '0', '0'], hits: ['', '', ''] }],

	//генерация игрового поля		 
	generateField: function () {
	//условия корректоности введённых данных
	var row = model.row;
	var column = model.column;
	var isColumnCorrent = column && column >= 4 && column <= 7 && !isNaN(column);
	var isRowCorrent = row && row >= 4 && row <= 7 && !isNaN(row);
	if (isColumnCorrent && isRowCorrent) {
		var battleField = '<table class="battleField">';
		for (var i = 0; i <= row; i++) {
			battleField += '<tr class ="battleField__tr">';
			for (var j = 0; j <= column; j++) {
				battleField += '<td class = "battleField__td" data-id=" ' + i + j + ' ">' + '</td>';				
			}
			battleField += '</tr>';
		}
		battleField += '</table>';
		document.querySelector('.battle-board__field').innerHTML = battleField;
		//нанесение разметки на шкалы 
		var numbers = ['', '1', '2', '3', '4', '5', '6', '7'];
		var tdNumbers = document.querySelectorAll('.battleField__tr:first-child > .battleField__td');
		for (var i = 0; i < tdNumbers.length; i++) {
			tdNumbers[i].innerHTML = numbers[i];
		}
		var letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];
		var tdLetters = document.querySelectorAll('.battleField__tr > .battleField__td:first-child');
		for (var k = 0; k < tdLetters.length; k++) {
			tdLetters[k].innerHTML = letters[k];
		}
		//внесение в идентефикатор значения буквы вместо цифры, знаю, что лучше циклом - не сообразил
		var td = document.querySelectorAll('.battleField__td');
		for (var i = 0; i < td.length; i++) {
			var idValue = td[i].getAttribute('data-id');
			if (idValue.charAt(1) == 1) {
				td[i].setAttribute("data-id",  "A" + idValue.charAt(2));
			} else if (idValue.charAt(1) == 2) {
				td[i].setAttribute("data-id",  "B" + idValue.charAt(2));
			} else if (idValue.charAt(1) == 3) {
				td[i].setAttribute("data-id",  "C" + idValue.charAt(2));
			} else if (idValue.charAt(1) == 4) {
				td[i].setAttribute("data-id",  "D" + idValue.charAt(2));
			} else if (idValue.charAt(1) == 5) {
				td[i].setAttribute("data-id",  "E" + idValue.charAt(2));
			} else if (idValue.charAt(1) == 6) {
				td[i].setAttribute("data-id",  "F" + idValue.charAt(2));
			} else if (idValue.charAt(1) == 7) {
				td[i].setAttribute("data-id",  "G" + idValue.charAt(2));
			}
		}
	} else {
		alert('Встань в строй, сынок! Подумай кастрюлей на голове, что ты вводишь!');
		generateField();
	}
	},

	//метод стрельбы по локациям
	fire: function(id) {
		var cell = document.querySelector('[data-id="'+ id + '"]');
		for (var i=0; i < this.numShips; i++) {
			var ship = this.ships[i];
			var index = ship.locations.indexOf(id);
			if (index >= 0) {
				ship.hits[index] = 'hit';
				view.displayHit(id);
				view.displayMessage('СНАЙПЕР ПОПАЛ!');
				if (this.isSunk(ship)) {
					view.displayMessage('Ты потопил, мать его, корабль!');
					this.shipsSunk++;
				}
				return true;
			}
		}
		view.displayMiss(id);
		view.displayMessage('Мазила косорукая.');
		return false;
	},
	//счётчик подтоплений кораблей
	isSunk: function(ship) {
		for (var i=0; i < this.shipLength; i++) {
			if (ship.hits[i] !== 'hit') {
				return false;
			}
		}
		return true;
	},
	//метод создания кораблей на поле боя, пока не будет нужное число кораблей
	generateShipLocations: function() {
		var locations;
		for (var i=0; i < this.numShips; i++) {
			do {
				locations = this.generateShip();
			} while (this.collision(locations));
			this.ships[i].locations = locations;
		}
	},

	
	//метод создания случайной позиции корабля,  1 - горизонт, 0 - верт
	generateShip: function() {
		var direction = Math.floor(Math.random()*2);
		var rows, cols;
		if (direction === 1) {
			//определение достаточной длины позиций
			rows = Math.floor(Math.random() * this.row);
			cols = Math.floor(Math.random() * (this.column - this.shipLength));
		} else {
			rows = Math.floor(Math.random() * (this.row - this.shipLength));
			cols = Math.floor(Math.random() * this.column);
		}
		//генерация позиций корабля с переводом на букву и исключением кол 0
		var newShipLocations = [];
		for (var i=0; i < this.shipLength; i++) {
			var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
			if (direction === 1) {
				newShipLocations.push(letters[rows] + '' + (cols + i + 1));
			} else {
				newShipLocations.push(letters[rows + i] + '' + (cols + 1));
			}
			console.log(newShipLocations);
		}
		return newShipLocations;
	},
	//проверка на перекрытие генерируемых позиций кораблей
	collision: function(locations) {
		for (var i=0; i < this.numShips; i++) {
			var ship = model.ships[i];
			for (var j=0; j < locations.length; j++) {
				if (ship.locations.indexOf(locations[j]) >= 0) {
					return true;
				}
			}
		}
		return false;
	},

};



//модель объекта - контроллера
var controller = {
	guesses: 0,
	processGuess: function(guess) {
		var id = parseGuess(guess);
		if (id) {
			//счётчик корректных выстрелов, передача данных на метод fire
			this.guesses++;
			var hit = model.fire(id);
			//проверка на окончание игры
			if (hit && model.shipsSunk === model.numShips) {
				view.displayMessage('Каррамба! Ты потопил весь мой флот, за ' + this.guesses + ' выстрелов');
			}
		}
	}
};

//вспомогательная функция, метод перевода координат выстрелов в данные сетки таблицы
//тут идет проверка на цифры, хотя первые буквы, убрать условия (ввести проверку на список литеров)
function parseGuess(guess) {
	
	if (guess === null || guess.length !== 2) {
		alert('Упс, пожалуйста введите букву и цифру сектора');
	} else {
		var row = guess.charAt(0);
		var column = guess.charAt(1);
		var cell = document.querySelector('[data-id="'+ guess + '"]');
	
		if (isNaN(column) || cell === null) {
			alert('Упс, введите корректные данные, это были не координаты!');
//добавить условия на соответствие row буквам и отсечь нулевую колонку
		} else if (column < 1 || column > model.column) {
			alert('Упс, эти координаты за пределами поля боя!');
		} else {
			return row + column;
		}
	}
	return null;
};

//обработчик событий (кнопки игры) + на enter
function init() {
	var fireButton = document.querySelector('.board-form__fireButton');
	fireButton.onclick = handleFireButton;
	var guessInput = document.querySelector('.board-form__guessInput');
	guessInput.onkeypress = handleKeyPress;
};

//передача координат на контроллер и очистка поля для следующего выстрела
function handleFireButton () {
	var guessInput = document.querySelector('.board-form__guessInput');
	var guess = guessInput.value;
	controller.processGuess(guess);
	guessInput.value = '';
};
//передача координат через Enter
function handleKeyPress(e) {
	var fireButton = document.querySelector('.board-form__fireButton');
	if (e.keyCode === 13) {
		fireButton.click();
		return false;
	}
};

//ответчик на клик мышой по ячейкам
function makeClickAll () {
	var td = document.querySelectorAll('.battleField__td');
	function makeClick() {
		var id = this.getAttribute('data-id');
		controller.processGuess(id);
	}
	for (var i = 0; i < td.length; i++) {
		td[i].addEventListener('click', makeClick);
	}
}



model.generateField();
model.generateShipLocations();
makeClickAll();
window.onload = init;