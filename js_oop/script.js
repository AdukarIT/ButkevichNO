//Task 1
//Реализуйте класс Student (Студент), который будет наследовать от класса User. 
//Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User),
// year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно
// вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий 
// курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. 
//Текущий год получите самостоятельно.
var nameStudent = {
	name: "Petre",
	surname: "Sixgklo"
}

var User = function(nameStudent){
	this.name = nameStudent.name;
    this.surname = nameStudent.surname;

    this.getFullName = function() {
      return this.name + ' ' + this.surname;
    }
}

var Student = function(){
	User.apply(this, arguments);

	var date = new Date(),
		dateYear = date.getFullYear();

	this.getCourse = function(year){
		var course = dateYear - year;

		switch (course) {
			case 0: 
				return ' на ' + 1 + ' курсе';
				break;
			case 1:
				return ' на ' + 2 + ' курсе';
				break;
			case 2:
				return ' на ' + 3 + ' курсе';
				break;
			case 3:
				return ' на ' + 4 + ' курсе';
				break;
			case 4:
				return ' на ' + 5 + ' курсе';
				break;
			default: 
				console.log('Год поступления не может быть больше текущего ' + dateYear + ' года или меньше ' + ( dateYear - 4 ) + ' года');
		}
	}
}

var studentName = new User(nameStudent),
	studentCourse = new Student(nameStudent);

console.log( studentName.getFullName() + studentCourse.getCourse(2017) );


//Task 2
//Напишите программу, расчиытвающую стоимость и калорийность гамбургеров (чисбургер, бигмак и тд), используя ООП подход.
//реализовал следующим образом, возможно это не так задумывалось
var burgerObject = {
	bun: 30,
	meat: 60,
	muskart: 5,
	ketchup: 10,
	onion: 12,
	cucumberm: 7
}

var Hamburger = function(ham){
	this.name = 'Hamburger';
	this.price = 2.50;
	this.bun = ( ham.bun * 297 ) / 100;
	this.meat = ( ham.meat * 187 ) / 100;
	this.muskart = ( ham.muskart * 143 ) / 100;
	this.ketchup = ( ham.ketchup * 112 ) / 100;
	this.onion = ( ham.onion * 43 ) / 100;
	this.cucumberm = ( ham.cucumberm * 13 ) / 100;
}

var Cheeseburger = function(ham, cheese){
	Hamburger.apply(this, arguments);
	this.name = 'Cheeseburger';
	this.price = 3.20;
	this.cheese = ( cheese * 300 ) / 100;
}

var BigMac = function(ham, salad){
	Cheeseburger.apply(this, arguments);
	this.name = 'BigMac';
	this.price = 4.50;
	this.salad = ( salad * 20 ) / 100;
}

var massHamburger = new Hamburger(burgerObject),
	massCheeseburger = new Cheeseburger(burgerObject, '15'),
	massBigMac = new BigMac(burgerObject, '30'),
	menu = document.forms.menu,
	menuHamburger = menu.elements.Hamburger,
	menuCheeseburger = menu.elements.Cheeseburger,
	menuBigMac = menu.elements.BigMac,
	calories = 0;

menuHamburger.addEventListener('click', function(){ 
	calories = massHamburger.bun + massHamburger.meat + massHamburger.muskart + massHamburger.ketchup + massHamburger.onion + massHamburger.cucumberm;
	alert('Вы выбрали ' + massHamburger.name + '. Каллорий: ' + calories + '. Стоимость ' + massHamburger.price + ' руб.');
});

menuCheeseburger.addEventListener('click', function(){ 
	calories = massCheeseburger.bun + massCheeseburger.meat + massCheeseburger.muskart + massCheeseburger.ketchup + massCheeseburger.onion + massCheeseburger.cucumberm + massCheeseburger.cheese;
	alert('Вы выбрали ' + massCheeseburger.name + '. Каллорий: ' + calories + '. Стоимость ' + massCheeseburger.price + ' руб.');
});

menuBigMac.addEventListener('click', function(){
	calories = massBigMac.bun + massBigMac.meat + massBigMac.muskart + massBigMac.ketchup + massBigMac.onion + massBigMac.cucumberm + massBigMac.cheese + massBigMac.salad;
	alert('Вы выбрали ' + massBigMac.name + '. Каллорий: ' + calories + '. Стоимость ' + massBigMac.price + ' руб.');
});