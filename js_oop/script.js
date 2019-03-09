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
var burger = function() {
	this.burgerIngridientCalories = {
		bun: 90,
		meat: 112,
		muskart: 7,
		ketchup: 12,
		onion: 5,
		cucumberm: 5
	};

	this.burgerSummCalories = function(){
		var summ = 0;

		for (var cat in this.burgerIngridientCalories){
			summ += this.burgerIngridientCalories[cat];
		}

		return summ;
	};
}

var Hamburger = function(){
	burger.call(this);
	this.name = 'Hamburger';
	this.price = 2.50;
}

var Cheeseburger = function(){
	burger.call(this);
	this.burgerIngridientCalories['cheese'] = 25;

	this.name = 'Cheeseburger';
	this.price = 3.20;
	
}

var BigMac = function(){
	burger.call(this);
	this.burgerIngridientCalories['cheese'] = 45;
	this.burgerIngridientCalories['salad'] = 10;

	this.name = 'BigMac';
	this.price = 4.50;
}

var caloriesHamburger = new Hamburger(),
	caloriesCheeseburger = new Cheeseburger(),
	caloriesBigMac = new BigMac(),
	menu = document.forms.menu,
	menuHamburger = menu.elements.Hamburger,
	menuCheeseburger = menu.elements.Cheeseburger,
	menuBigMac = menu.elements.BigMac
	;

menuHamburger.addEventListener('click', function(){ 
	alert('Вы выбрали ' + caloriesHamburger.name + '. Каллорий: ' + caloriesHamburger.burgerSummCalories() + '. Стоимость ' + caloriesHamburger.price + ' руб.');
});

menuCheeseburger.addEventListener('click', function(){ 
	alert('Вы выбрали ' + caloriesCheeseburger.name + '. Каллорий: ' + caloriesCheeseburger.burgerSummCalories() + '. Стоимость ' + caloriesCheeseburger.price + ' руб.');
});

menuBigMac.addEventListener('click', function(){
	alert('Вы выбрали ' + caloriesBigMac.name + '. Каллорий: ' + caloriesBigMac.burgerSummCalories() + '. Стоимость ' + caloriesBigMac.price + ' руб.');
});


//Task 3
