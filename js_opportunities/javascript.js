//Task 1
//Напишите функцию, которая принимает массив случайных чисел (см. задачу 2 в практике) 
//и создаёт на его основе новый. Элементы нового массива – объекты вида {initial: num1, 
//sqrt: num2, floor: boolean1, ceil: boolean2}. initial – значение элемента исходного 
//массива с тем же индексом, sqrt – корень квадратный из этого значения. Если округление 
//числа по обычным математическим правилам сходится с его округлением через floor, то 
//floor = true, а ceil = false. Если сходится с округлением через ceil - наоборот. 
//Например, пусть у исходного массива arr[0] = 19, тогда в новом массиве newArr[0] 
//= {initial: 19, sqrt: 4.358898943540674, floor: true, ceil: false}
function getArray() {
	let arrayObject = [];
	let max = 50;	

	for (var i = 0; i < 10; i++) {
		let randomNumber = Math.floor(Math.random() * Math.floor(max) + 1);
		let randomObject = {
			initial: randomNumber,
			sqrt: Math.sqrt(randomNumber),
			floor: 'boolean1',
			ceil: 'boolean2'
		}
		randomObject.sqrtHund = Math.sqrt(randomNumber).toFixed(2);  //Task #2
		arrayObject.push(randomObject);
	}

	console.log(arrayObject);
}
console.log(getArray());


//Task 3
//Напишите функцию, которая определяет, является ли строка палиндромом.
function palindrome(){
	let userString = prompt('Enter the string', '');

	let userStringRevers = userString.split("").reverse().join("");
	
	if (userString == userStringRevers) console.log('It is a palindrome');
		else console.log('Not a palindrome');
}
console.log(palindrome());

//Task 5
//Напишите функцию, которая получает в аргументы три строки – str, search, replace.
//Функция ищет ВСЕ вхождения search в str, заменяет каждую подстроку search на подстроку replace и возвращает результат.
var str = prompt('Введите строку');
var search = prompt('Введите подстроку поиска');
var replace = prompt('Введите заменяемый елемент');

function replaceFindElement(str, search, replace){
	var arr = str.split('');

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == search) {
			arr[i] = replace;
		}
	}

	str = arr.join('');

	console.log(str);
}
console.log(replaceFindElement(str, search, replace));

//Task 6
//Напишите функцию, которая замяняет первую букву каждого слова в строке на такую же большую.
function getFirstWordLetterToUpperCase(){
	var string = prompt('Введите предложение', '');
	var stringToArray = string.split('');
	
	stringToArray[0] = stringToArray[0].toUpperCase();

	for (var i = 0; i < stringToArray.length; i++) {
		if (stringToArray[i] == ' ') {
			stringToArray[i+1] = stringToArray[i+1].toUpperCase();
		}
	}
	
	string = stringToArray.join('');

	console.log(string);
}
console.log(getFirstWordLetterToUpperCase());


//Task 8
//Напишите функцию, которая возвращает текущий день недели на русском языке.
function getWeekDay(){
	var day = new Date();
	var numberOfDay = day.getDay();

	switch (numberOfDay){
		case 0: 
			alert('Воскресенье');
			break;
		case 1: 
			alert('Понедельник');
			break;
		case 2: 
			alert('Вторник');
			break;
		case 3: 
			alert('Среда');
			break;
		case 4: 
			alert('Четверг');
			break;
		case 5:
			alert('Пятница');
			break;
		case 6: 
			alert('Суббота');
			break;
		default:
    			alert('Нет такого дня недели');
	}
}

console.log(getWeekDay());


//Task 9
//Напишите функцию, которая принимает у пользователя дату в формате "ДД-ММ-ГГГГ" и,
// используя функцию из задачи 8, выдаёт в консоль день недели для этой даты.
function getDate(){
	var userDate = prompt('Введите день рождения в формате "ДД-ММ-ГГГГ"', '');;
	var userDay = userDate.slice(0, 2);
	var userMonth = userDate.slice(2, 4);
	var userYear = userDate.slice(4, 8);
	var userEnterDate = new Date(userYear, userMonth-1, userDay );

	var numberWeekDay = userEnterDate.getDay();

	switch (numberWeekDay){
		case 0: 
			console.log('Воскресенье');
			break;
		case 1: 
			console.log('Понедельник');
			break;
		case 2: 
			console.log('Вторник');
			break;
		case 3: 
			console.log('Среда');
			break;
		case 4: 
			console.log('Четверг');
			break;
		case 5:
			console.log('Пятница');
			break;
		case 6: 
			console.log('Суббота');
			break;
		default:
    		console.log('Нет такого дня недели');
	}
}
console.log(getDate());


//Task 10
//Примите у пользователя день его рождения в формате "ДД-ММ-ГГГГ". Напишите функцию, которая выводит в консоль количество дней,
//оставшихся до его дня рождения. Напишите функцию, которая возвращает дату, в которую пользователь отметит ближайший 1000-дневный
//юбилей (например, 11000 дней).
function getDateBirthday(){
	var nowDate = new Date();

	var DateBirthday = prompt('Введите день рождения в формате "ДД-ММ-ГГГГ"', '');
	var DayBirthday = DateBirthday.slice(0, 2);
	var MonthBirthday = DateBirthday.slice(2, 4);
	var YearBirthday = DateBirthday.slice(4, 8);
	
	var userDateBirthday = new Date(nowDate.getFullYear(), MonthBirthday-1, DayBirthday);

	var p = Math.round((userDateBirthday - nowDate) / 8.64e+7) + 1;

	if (p < 1) p += 365;

	console.log('До вашего дня рождения осталось: ' + p + ' дней');
	
	var userDateHundreds = new Date(YearBirthday, MonthBirthday-1, DayBirthday);
	var a = 10000 - Math.round((nowDate - userDateHundreds) / 8.64e+7);
	
	console.log('До 10000-дневный юбилея осталось: ' + a + ' дней');

}
console.log(getDateBirthday());


//Task 11
//Напишите функцию, которая принимает число, проверяет, является ли оно квадратом целого числа. 
//Если это так, функция возвращает квадратный корень исходного числа; в ином случае генерирует ошибку.
// Используя задачу 2 из практики, создайте массив целых чисел. Вызовите написанную функцию для каждого элемента,
//  отлавливая ошибки и выводя в консоль сообщения и о них, и об успешных результатах. Массив должен быть пройден 
//  до конца, несмотря на ошибки!
var arrayRandom = [];

function randomArray(arrayRandom){
	var arrayLength = +prompt('Введите длину массива', '');
	var min = +prompt('Введите минимальное число', '');
	var max = +prompt('Введите максимальное число', '');

	for (var i = 0; i < arrayLength; i++) {
		var randomNumber = Math.round(Math.random() * (max - min) + min);
		arrayRandom[i] = randomNumber;
	}
}
console.log(randomArray(arrayRandom));
console.log(arrayRandom);

function getMathSQRT(number){
	var numberSqrt = Math.sqrt(number);
	if (numberSqrt - Math.round(numberSqrt) == 0) return numberSqrt;
		else return 'Ошибка!';
}

function findError() {
	for (var i = 0; i < arrayRandom.length; i++) {
		try {
			getMathSQRT(arrayRandom[i]);
		} catch (e) {
			console.log(e.message);
		} finally {
			console.log(getMathSQRT(arrayRandom[i]));
		}
	}
}
console.log(findError());