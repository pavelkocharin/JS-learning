'use strict'

//helper блок предварительной информации
prompt("Готов повоевать за Родину, сынок?", "Так точно, сэр!")


// model генерации игрового поля от размеров сетки
function generateField () {
	var row = prompt("Введите размеры игрового поля: количество строк (от 4 до 7):", "7");
	var column = prompt("Введите размеры игрового поля: количество столбцов (от 4 до 7):", "7");
	var battleField = '<table class="battleField">';
	//условия корректоности введённых данных
	if (row < 4 || row > 7 || row === null || isNaN(row) || column < 4 || column > 7 || column === null || isNaN(column)) {
		alert('Встань в строй, сынок! Подумай каструлей на голове, что ты вводишь!');
		generateField();
	} else {
		for (var i = 0; i <= row; i++) {
			battleField += '<tr class ="battleField__tr">';
			for (var j = 0; j <= column; j++) {
				battleField += "<td class = 'battleField__td'>" + i + j + "</td>";				
			}
			battleField += "</tr>";
		}
		battleField += "</table>";
		document.querySelector(".battle-board__field").innerHTML = battleField;
		// запись в data-атрибут значений ячеек с очисткой значений
		var makeDataAttr = document.querySelectorAll('.battleField__td');
		for (var i = 0; i < makeDataAttr.length; i++) {
			makeDataAttr[i].setAttribute('data-id', makeDataAttr[i].innerHTML);
			makeDataAttr[i].innerHTML = '';
		}
		//нанесение разметки на шкалы 
		var numbers = ['', '1', '2', '3', '4', '5', '6', '7'];['', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];
		var tdNumbers = document.querySelectorAll('.battleField__tr:first-child > .battleField__td');
		for (var i = 0; i < tdNumbers.length; i++) {
			tdNumbers[i].innerHTML = numbers[i];
		}
		var letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G']
		var tdLetters = document.querySelectorAll('.battleField__tr > .battleField__td:first-child');
		for (var k = 0; k < tdLetters.length; k++) {
			tdLetters[k].innerHTML = letters[k];
		}
	}
}

generateField()