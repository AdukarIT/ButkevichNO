//Çàäàíèå ¹1

console.log('Çàäàíèå ¹1. Ôóíêöèÿ ñ 3-ìÿ àðãóìåíòàìè'); // посмотрите вашу кодировку

var firstNumber = +prompt ('Enter first number', '');
var secondNumber = +prompt ('Enter second number', '');
var thirdNumber = +prompt ('Enter third number', '');

function firstArgument(firstNumber, secondNumber, thirdNumber) {
	if (firstNumber>secondNumber  && secondNumber>thirdNumber) {
		return (thirdNumber);
	} else if (secondNumber>thirdNumber && thirdNumber>firstNumber) {
		return (firstNumber);
	} else if (thirdNumber>firstNumber && firstNumber>secondNumber) { // проверка избыточна
		return (secondNumber);
	}
}

console.log('Íàèìåíüøåå çíà÷åíèå àðãóìåíòà ' + firstArgument(firstNumber, secondNumber, thirdNumber));
console.log('  ');



//Çàäàíèå ¹2

console.log('Çàäàíèå ¹2. Ôóíêöèÿ ñ àðãóìåíòàìè ñóòîê, ÷àñîâ è ìèíóò');
let day = +prompt ('Enter the day', '');
let hour = +prompt ('Enter the hour', '');
let minutes = +prompt ('Enter the minutes', '');

function secondArgument(day, hour, minutes) {
	if (day < 1 || day > 31) {
		console.log('do not correct write the day');
	} else {	
		console.log('seconds in the day');
		console.log(day *= 86400);
	}
	console.log(' ');
	if (hour < 1 || hour > 24) {
		console.log('do not correct write the hour');
	} else {
		console.log('seconds in the hour');
		console.log(hour *= 3600);
	}
	console.log(' ');
	if (minutes < 1 || minutes > 60) {
		console.log('do not correct write the minutes');	
	} else {
		console.log('seconds in the minutes');
		console.log(minutes *= 60);
	}
}

console.log(secondArgument(day, hour, minutes));
console.log('  ');


//Çàäàíèå ¹3 

console.log('Çàäàíèå ¹3. Ðåêóðñèâíàÿ ôóíêöèÿ äëÿ ïîäñ÷¸òà ôàêòîðèàëà');

let numb = +prompt ('Enter the number', '');

function fact(numb){
	if (numb == 1 || numb == 0) 
		return 1;
		else return numb * fact(numb-1); // следите пожалуйста за отступами и тут избыточен else		
	}

console.log(fact(numb));
console.log('  ');


//Çàäàíèå ¹4

console.log('Çàäàíèå ¹4. Ôóíêöèÿ êîòîðàÿ ðàçâîðà÷èâàåò ââåä¸ííîå ÷èñëî çàäîì íàïåð¸ä');

let numberNoRevers = +prompt('Enter the number', '');
console.log(numberNoRevers);

function numberReverse(numberNoRevers) {
	if (numberNoRevers < 10) { 
		return String(numberNoRevers); 
	} 
	else { 
		return String(numberNoRevers % 10 + numberReverse((numberNoRevers - (numberNoRevers % 10)) / 10)); 
	} 
} 

console.log(numberReverse(numberNoRevers));
console.log('  ');


//Çàäàíèå ¹5 

console.log('Çàäàíèå ¹5. Ôóíêöèÿ äëÿ ðåøåíèÿ êâàäðàòí óðàâíåíèé');

let a = +prompt ('Enter the number A', '');
let b = +prompt ('Enter the number B', '');
let c = +prompt ('Enter the number C', '');

function sqrt(a, b, c) {
	let disc = (b * b) - (4 * a * c); // b**2	

	if (disc > 0) {
		var x1 = -b + Math.sqrt(disc) / 2 * a;
		var x2 = -b - Math.sqrt(disc) / 2 * a;
		return ('Two roots ' + 'x1 = ' + x1 + '  x2 = ' + x2);
	} else if (disc == 0) {
		var x0 = -b / 2 * a;
		return ('One root' + 'x0 = ' + x0);
	} else if (disc < 0) { // проверка избыточна
		return ('No roots!');
	}
}

console.log(sqrt(a, b, c));
