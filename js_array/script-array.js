//Task 1
console.log('Задание №1');
var randomArray = [];
var secondRandomArray = [];
var len = 10; //длина массива

function getRandomArray(len) { // не соответствует заданию - у вас два массива
	for (var i = 0; i < len; i++) {
		randomArray.push(Math.random()); // изменять что-либо снаружи функции - очень плохая практика
		secondRandomArray.push(Math.random());
	}
	console.log(randomArray);
}

console.log(getRandomArray(len));
console.log(' ');


//Task 2
console.log('Задание №2');
var average = 0;

function getAverage(randomArray, len, average) { // зачем создавать переменную для внутреннего использования снаружи и передавать?
	for (var j = 0; j < len; j++) { // если где-то между ваш массив увеличится или уменьшится - функция будет работать некорректно
		average += randomArray[j] / len; // неверная формула
	}
	
	console.log(average + ' - среднее арифметическое всех элементов массива')

	console.log('Эти элемент больше среднего ариф. значения');
	for (var j = 0; j < len; j++) {
		if (randomArray[j] > average) console.log(randomArray[j]);
	}
}

console.log(getAverage(randomArray, len, average));
console.log(' ');


//Task 3
console.log('Задание №3');

function findLessElement(randomArray) { // почему такое название аргумента?
	var sortRandomArray = randomArray.sort();  // это строчная сортировка, в данном случае не подходит
	
	console.log(sortRandomArray);
	
	for (var i = 0; i <= 1; i++){
		console.log(sortRandomArray[i]);
	}
}

console.log(findLessElement(randomArray));
console.log(' ');


//Task 4
console.log('Задание №4');

function deleteElementArray(randomArray, len) { // ну вы поняли
	for (var i = 0; i <= len; i++) {
		if (randomArray[i] < 0.3) {
			randomArray.splice(i, 1);
			randomArray.unshift(0);
		}
	}
	
	console.log(randomArray);
}

console.log(deleteElementArray(randomArray, len));
console.log(' ');


//Task 5
var sumArray = [];
var sum = 0;

console.log('Задание №5');
console.log('Первый массив');
console.log(randomArray);
console.log('Второй массив');
console.log(secondRandomArray);

function getSumElementArray(randomArray, secondRandomArray) { // очень странные названия аргументов
	secondRandomArray.reverse();

	for (var i = 0; i < len; i++) {
		sum = randomArray[i] + secondRandomArray[i]; // очень правильно что вынесли вычисления в переменную и очень плохо что она без var
		sumArray.push(sum); 
	}

	console.log('Суммы обратных элементов двух массивов');
	console.log(sumArray);
}

console.log(getSumElementArray(randomArray, secondRandomArray));
console.log(' ');


//Task 6
console.log('Задание №6');
var interim = 0;

function arrayBubbleSort(randomArray, len) { // еще раз, просто получайте длинну массива по месту, для чего вы ее передаете?
	for (var i = 0; i < len-1; i++) { // для чего тут два цикла?
		for (var t = 0; t < len-1; t++) {
			if (randomArray[t] > randomArray[t+1]) {
				interim = randomArray[t];
				randomArray[t] = randomArray[t+1];
				randomArray[t+1] = interim;
			}
		}
	}
	console.log(randomArray);
}

console.log(arrayBubbleSort(randomArray, len)); // зачем столько консоль логов?
