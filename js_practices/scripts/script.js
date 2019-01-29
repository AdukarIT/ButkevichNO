//Task 1
console.log('Задание №1');

function getTriangel(hypotenuse, cathet1, cathet2){
	if ( hypotenuse ** 2 == cathet1 ** 2 + cathet2 ** 2) return true;
		return false;
}
console.log(getTriangel(2, 0, 2));
console.log(' ');


//Task 2
console.log('Задание №2');
let str = prompt('Задание 2. Введите строку', '');
let n = 2;

function repeatString(str) {
	for (i = 0; i < n; i++) {
		str += str;
		return str;
	}
}

console.log(repeatString(str));
console.log(' ');


//Task 4
console.log('Задание №4');

let point = +prompt('Задание 4. Введите оценку по 10-бальной системе', '');
console.log('Вы ввели оценку ' + point);

function getStudentPoint(point) {
	switch (point){
		case 10: 
			console.log('In Russian equivalent is  5+');
			console.log('In US equivalent is  A+'); 
			break;
		case 9: 
			console.log('In Russian equivalent is  5');
			console.log('In US equivalent is  A'); 
			break;
		case 8: 
			console.log('In Russian equivalent is  4+');
			console.log('In US equivalent is  A-'); 
			break;
		case 7: 
			console.log('In Russian equivalent is  4');
			console.log('In US equivalent is  B+'); 
			break;
		case 6: 
			console.log('In Russian equivalent is  4-');
			console.log('In US equivalent is  B'); 
			break;
		case 5: 
			console.log('In Russian equivalent is  3+');
			console.log('In US equivalent is  B-'); 
			break;
		case 4: 
			console.log('In Russian equivalent is  3');
			console.log('In US equivalent is  C+'); 
			break;
		case 3: 
			console.log('In Russian equivalent is  3-');
			console.log('In US equivalent is  C'); 
			break;
		case 2: 
			console.log('In Russian equivalent is  2');
			console.log('In US equivalent is  F+'); 
			break;
		case 1: 
			console.log('In Russian equivalent is  1');
			console.log('In US equivalent is  F'); 
			break;
		default: 
			console.log('Это уже не 10-бальная система :(');
	}
}
console.log(getStudentPoint(point));
console.log(' ');


//Task 5
console.log('Задание №5');
function entretZero() {
	do {
		numberZero = +prompt('Задание 5. Введите любое число ', '');
	} while ( !(numberZero == 0) );
}

console.log(entretZero());
console.log(' ');


//Task 6
console.log('Задание №6');

function zeroToHundred() {
	let numberSum = 0;
	let numberOfPromptUser = 0;
	do {
		numberPromptUser = +prompt('Задание 6. Введите любое число ', '');
		numberSum += numberPromptUser;
		numberOfPromptUser++
	} while ( numberSum < 100 );
	
	console.log(numberSum + ' сумма введенных чисел');
	return numberOfPromptUser + ' количество введенных чисел';
}

console.log(zeroToHundred());
console.log(' ');


//Task 7
console.log('Задание №7')
let simpleNumber = +prompt('Введите простое число', '');

function getSimpleNumber(simpleNumber) {
	if (simpleNumber == 2 || simpleNumber == 3) return simpleNumber + ' простое число';
		
		else if (simpleNumber % 2 == 0 || simpleNumber % 3 == 0) return simpleNumber + ' составное число';
		
		else return simpleNumber + ' простое число';
}

console.log(getSimpleNumber(simpleNumber));
console.log(' ');


//Task 8
console.log('Задание №8');
let month = +prompt('Задание 8. Введите номер месяца', '');

function getSeason(month) {
	switch (month){
		case 12:
		case 1:
		case 2: 
			console.log('Зима');
			break;
		case 3:
		case 4:
		case 5: 
			console.log('Весна');
			break;
		case 6:
		case 7:
		case 8: 
			console.log('Лето');
			break;
		case 9:
		case 10:
		case 11: 
			console.log('Осень');
			break;
		default: 
			console.log('Извините, но в году только 12 месяцев');
	}
}
console.log(getSeason(month));
console.log(' ');


//Task 9
console.log('Задание №9');

function getNumberSeven() {

	for (var i = 99; i > 10; i--) {
		if (i % 7 == 0 ) {
			console.log(i + ' число делящееся на 7');
		}

		if (i % 10 == 7 ) {
			console.log(i + ' число заканчивающееся на 7');
		}
	}
}

console.log(getNumberSeven());
console.log(' ');


//Task 10
console.log('Задание №10');

function getDeviders(number) {
	if (number > 20 || number < 2) return;
		
		var counter = 0;
		
		for (var i = 1; i <= number; i++) {
		    if (number % i === 0) {
		    console.log(i);
		    counter++;
		    }
		}
	return 'Количество делителей = ' + counter;
}

function getRange() {
	for (var i = 2; i <= 20; i++) {
		console.log('Номер #' + i + ' в диапозоне от 2 до 20');
		console.log(getDeviders(i));
		console.log(' ');
	}
}

console.log(getRange());
console.log(' ');


//Task 11
console.log('Задание №11');

let numberFrom = +prompt('Задание 11. Введите начальное число диапозона', '');
let numberTo = +prompt('Задание 11. Введите конечное число диапозона', '');

function getDevidersRange(number) {
	var counter = 0;
		
	for (var i = 1; i <= number; i++) {
	    if (number % i === 0) {
	    console.log(i);
	    counter++;
	    }
	}
	
	return 'Количество делителей = ' + counter;
}

function getRangeByUserNumbers(numberFrom, numberTo) {
	for (var i = numberFrom; i <= numberTo; i++) {
		console.log('Номер #' + i + ' в диапозоне от ' + numberFrom + ' до ' + numberTo);
		console.log(getDevidersRange(i));
		console.log(' ');
	}
}

console.log(getRangeByUserNumbers(numberFrom, numberTo));
console.log(' ');


//Task 12 
console.log('Задание №12');
let unit = prompt('Задание 12. Введите единицу измерения: «Кб», «Мб», «Гб»', '');
let size = +prompt('Задание 12. Введите размер в выбранном формате', '');

function getBite(unit, size) {
	switch (unit) {
		case 'Кб':
			console.log('В ' + size + ' Кб ' + size * 1024 + ' Байт');
			break;
		case 'Мб':
			console.log('В ' + size + ' Мб ' + size * 1048576 + ' Байт');
			break;
		case 'Гб':
			console.log('В ' + size + ' Гб ' + size * 1073741824 + ' Байт');
			break;
		default: 
			console.log('Не верно введина единица измерения!!!');
	}
}

console.log(getBite(unit, size));
console.log(' ');


//Task 15 
console.log('Задание №15');
let numberPencil = +prompt('Задание 15. Введите количество карандашей', '');

function pencilEnding(numberPencil) {
	if ( numberPencil == 11 || numberPencil % 100 == 11) return 'Вы ввели ' + numberPencil + ' карандашЕЙ';
	else if ( numberPencil % 10 == 1 ) return 'Вы ввели ' + numberPencil + ' карандаш';
	else if ( numberPencil % 10 == 2 || numberPencil % 10 == 3 || numberPencil % 10 == 4) return 'Вы ввели ' + numberPencil + ' карандашА';
	return 'Вы ввели ' + numberPencil + ' карандашЕЙ';
}

console.log(pencilEnding(numberPencil));
console.log(' ');