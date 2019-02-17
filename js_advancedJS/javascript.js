'use strict'
var string = 'asdfghjklkjhgfdsertyjhnbvcdssdfmgkjuiyuteyrtegs;k';
var stringToArray = string.split('');

//Task 1
//Напишите функцию, которая принимает в качестве параметра номер символа в таблице Unicode. 
//Подсчитайте количество таких символов во всех элементах массива, как в задаче 3 из первой части практики.
function findUnicode(unicode) {
	var counter = 0;
	var numberOfUnicode = stringToArray.filter(function(index){
		if (index.charCodeAt() == unicode) counter++;
	});
	return counter;
}
console.log(findUnicode(100)); //100 = d


//Task 2
//Напишите функцию, которая будет возвращать частичную функцию от функции из задачи 1, 
//фиксируя искомый символ.
function count(stringToArray){
	const unic = function(unicode) {
		var counter = 0;
		var numberOfUnicode = stringToArray.filter(function(index){
			if (index.charCodeAt() == unicode) counter++;
		});
		return counter;
	}
	return unic;
}

var d = count(stringToArray);
console.log(d(97));


//Task 3
//Отфильтруйте массив городов так, чтобы в нём остались только города из штата Калифорния, 
//которые с 2000 по 2013 выросли в населении.
function onlyStateCalifornia(){
	let stateCalifornia = data.filter(function(elem){
		return elem.state == 'California';
		return elem.growth_from_2000_to_2013 > 0;
	});

	stateCalifornia.forEach(function(elem){
		console.log(elem.city);
	});
}
onlyStateCalifornia();


//Task 4
//Подсчитайте, сколько миллионов населения живёт во всех городах на широте от 25 до 30 градусов.
function populationByLatitude(){
	var population = 0;
	
	let latitudePopulation = data.forEach(function(elem){
		if (25 < elem.latitude && elem.latitude < 30) {
				population += +elem.population;
		}
	});

	console.log(population);
}
populationByLatitude();


//Task 5
//Создайте массив только из тех городов, которые начинаются на букву D, 
//при этом отсортируйте элементы этого массива по названию города.
function citiesD(){
	let nameCity = data.filter(function(elem){
		return elem.city[0] == "D";
	});

	function sortCities(first, second){
		if (first.city > second.city) return 1
			else return -1;
	}

	console.log(nameCity.sort(sortCities));
}
citiesD();