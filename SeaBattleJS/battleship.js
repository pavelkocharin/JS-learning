'use strict'

//helper блок предварительной информации
prompt("Готов повоевать за Родину, сынок?", "Так точно, сэр!")


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