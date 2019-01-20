//Задание №1

var x = prompt ('Enter the flat number', '');

console.log('Задание №1');

console.log('Flat number #' + x);
if (x < 1) {
	console.log('Wrong flat number');
} else if (x <= 20) {
	console.log('Number of entrance 1');
} else if (x <= 40) {
	console.log('Number of entrance 2');
} else if (x <= 60) {
	console.log('Number of entrance 3');
} else if (x <= 80) {
	console.log('Number of entrance 4');
} else if (x <= 100) {
	console.log('Number of entrance 5');
} else if (x > 100) {
	console.log('Wrong flat number');
}
console.log(' ');


//Задание №2
var z = prompt ('Enter the car name', '');

console.log('Задание №2');

switch (z) {
	case 'BMW':
		console.log(z + ' - manufacturer by Germany');
		break;
	case 'Ford':
		console.log(z + ' - manufacturer by USA');
		break;
	case 'Peugeot':
		console.log(z + ' - manufacturer by France');
		break;
	case 'Toyota':
		console.log(z + ' - manufacturer by Japan');
		break;
	case 'Kia':
		console.log(z + ' - manufacturer by South Korea');
		break;
	case 'Fiat':
		console.log(z + ' - manufacturer by Italy');
		break;
	default: 
		console.log('some_input – country of manufacturer unknown');
		break;
}
console.log(' ');


//Задание №3
var y = prompt ('Enter the year', '');
console.log('Задание №3');

console.log('You enter ' + y + ' year');
if (y % 4 == 0) {
	console.log('This is LEAP YEAR');
} else {
	console.log('This is NOT LEAP YEAR');	
}
console.log(' ');


//Задание №4
var n = prompt ('Enter the number from 1 to 20', '');

console.log('Задание №4');
console.log(n + ':  ' + n + '*1=' + (n * 1) + '  ' + n + '*2=' + (n * 2) + '  ' + n + '*3=' + (n * 3) + '  ' + n + '*4=' + (n * 4)+ '  ' + n + '*5=' + (n * 5)+ '  ' + n + '*6=' + (n * 6)+ '  ' + n + '*7=' + (n * 7)+ '  ' + n + '*8=' + (n * 8)+ '  ' + n + '*9=' + (n * 9)+ '  ' + n + '*10=' + (n * 10));
console.log(' ');

//Задание №5
var s = 1;

console.log('Задание №5');
for (s; s < 50; s++) {
	console.log(s++);
}
console.log(' ');


//Задание №6
var f0 = 0;
var f1 = 1;

console.log('Задание №6');
for (f = 0; f < 15; f++) {
 	fn = f0 + f1;
 	f0 = f1;
 	f1 = fn;
 	console.log(fn)
}
console.log(' ');


//Задание №7
var h = ' ' + '#';
var j = '#' + ' ';

console.log('Задание №7');
for (i = 0; i < 4; i++) {
	console.log(h + h + h + h);
	console.log(j + j + j + j);
}