//Task 1
console.log('Задание №1');

var city = {
	location: 'Europe',
	name: 'Paris',
	contry: 'France',
	population: 12220000
}

var stringPrompt = 'population'; // очень странное название для переменной

function findStringInObject(city, stringPrompt){
	if (stringPrompt in city) return true; // надеюсь вы помните про аптимизацию таких выражений 
	return false; // но если что, внутри достаточно return stringPrompt in city;
}

console.log(findStringInObject(city, stringPrompt));
console.log(' ');


//Task 2
console.log('Задание №2');

var recipe = {
	name: 'Драники',

	ingredients: {
		potato: 1,
		onion: 1/8,
		flour: 1/8,
		salt: 1/8,
		pepper: 1/8
	},

	portion: 1 // не выполнены условия задачи
}

var getPortion = +prompt('Введите количество порций', '');

function getRecipe(recipe, getPortion) {
	if (getPortion >= recipe.portion ) {
		console.log('Готовим ' + recipe.name + '. На ' + getPortion + ' порц(ию, ий, ии) нам понадобиться:');
		console.log('	Картошка: ' + recipe.ingredients.potato * getPortion + ' шт.');
		console.log('	Лук: ' + recipe.ingredients.onion * getPortion + ' шт.');
		console.log('	Мука: ' + recipe.ingredients.flour * getPortion + ' ст. л.');
		console.log('	Соль: ' + recipe.ingredients.salt * getPortion + ' щепотки');
		console.log('	Перец: ' + recipe.ingredients.pepper * getPortion + ' щепотки');
	} else return 'Не может быть меньше одной порции';
}

console.log(getRecipe(recipe, getPortion));
console.log(' ');


//Task 3
console.log('Задание №3');

var cylinder = {
	radius: 3,
	height: 5,
	volume: function() { // не выполнены условия задачи
		console.log('Обьем цилиндра равен = ' + 3.14 * (this.radius ** 2) * this.height); // такие выражения трудно читать, лучше разбивать
	}
}

console.log(cylinder.volume());
console.log(' ');


//Task 4
console.log('Задание №4'); // решение не соответствует задаче

var penguin = {
	name: 'Whiteblack',
	author: 'Margret Rey',
	origin: 'Whiteblack the Penguin Sees the World',
	canFly: false,

	sayHello: function(){
		console.log('Привет, дружок! Меня зовут ' + this.name + ' :)');
	},

	fly: function(){
		console.log('Я ' + this.name + ' и Я могу летаааать');
	}
}

function getPenguin(penguin){
	if (penguin.canFly == false) console.log(penguin.sayHello());
	else console.log(penguin.fly());
}

console.log(getPenguin(penguin));
