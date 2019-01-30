//Task 1
console.log('Задание №1');
var randomArray = [];
var secondRandomArray = [];
var len = 10; //длина массива

function getRandomArray(len) {
	for (var i = 0; i < len; i++) {
		randomArray.push(Math.random());
		secondRandomArray.push(Math.random());
	}
	console.log(randomArray);
}

console.log(getRandomArray(len));
console.log(' ');


//Task 2
console.log('Задание №2');
var average = 0;

function getAverage(randomArray, len, average) {
	for (var j = 0; j < len; j++) {
		average += randomArray[j] / len;
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

function findLessElement(randomArray) {
	var sortRandomArray = randomArray.sort();
	
	console.log(sortRandomArray);
	
	for (var i = 0; i <= 1; i++){
		console.log(sortRandomArray[i]);
	}
}

console.log(findLessElement(randomArray));
console.log(' ');


//Task 4
console.log('Задание №4');

function deleteElementArray(randomArray, len) {
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

function getSumElementArray(randomArray, secondRandomArray) {
	secondRandomArray.reverse();

	for (var i = 0; i < len; i++) {
		sum = randomArray[i] + secondRandomArray[i];
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

function arrayBubbleSort(randomArray, len) {
	for (var i = 0; i < len-1; i++) {
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

console.log(arrayBubbleSort(randomArray, len));