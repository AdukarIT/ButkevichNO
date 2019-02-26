//Task 1
//Дана форма, напишите проверку: на правильность заполнения двух текстовых полей: имя (id="name") и минут (id="minutes").
//Используйте проверку на оставление поля пустым ("") и правильного формата. заполнения числового поля (isNaN).
function placeOrder(){
	var form = document.forms.formFirst,
		formElements = form.elements,
		formElementsName = formElements.name,
		formElementsMinutes = formElements.minutes.value;

	if ( formElementsName.value == '' ) alert('Введите Ваше Имя');

	if ( isNaN(formElementsMinutes) ) alert('Введите корректно количество минут');
}


//Task 2
//Создать страницу с текстовым полем и двумя кнопками. При нажатии одной из них происходит передача данных содержимого 
//текстового поля по электронной почте (action="mailto:address@domen.domen"), при нажатии другой – происходит очистка текстового поля.
function sendEmail(){
	var emailForm = document.forms.formSecond,
		textMessage = emailForm.elements.text,
		sendButton = emailForm.elements.submit,
		resetButton = emailForm.elements.reset;

	if ( textMessage.value != '' ){	
		emailForm.action = 'mailto:address@domen.domen';
	}

	resetButton.addEventListener('click', function(e){
		textMessage.value = '';
	});
}

//Task 3
//Напишите универсальную функцию для прохождения по полям формы с возможностью проверки введенных данных,
//для тектовых полей - на текст, для имейла - на имейл и тд.

//на мой взгляд универсальня функция она подойдет для любого случая проверки, но если применять ее для формы, то:
	// 1. форм на сайте может быть множество от 2 и боллее, т.е. в любом случае нужно будет вностить изменения в код функции
	// 2. полей в форме также может быть можество, и они могут быть разного типа и для них нужны разные провеки, для меня проще 
	//    это реализовать для каждой формые разную проерку, в конце концов есть ctrl+c и ctrl+v
function checkFormInputs() {
	var feedBackForm = document.forms.formThird, 
		formName = feedBackForm.elements.name,
		formEmail = feedBackForm.elements.email,
		formPhone = feedBackForm.elements.phone,
		formSubmit = feedBackForm.elements.send,
		regForName = /\D{1,}/i;
		regForEmail = /.{1,}@\D{1,}.\D{1,}/i;
		regForPhone = /\+\d{11}/i;

	if ( regForName.test(formName.value) == false ) alert('Не корректно введено имя');
	if ( regForEmail.test(formEmail.value) == false ) alert('Не корректно введено E-mail');
	if ( regForPhone.test(formPhone.value) == false ) alert('Не корректно введено телефон');
}

//Task 4
//Поверьте написанную ранее функция на обработку форы регистрации, если поле не проходит валидацию - 
//подсветите его, если все поля валидные - выведите приветственное сообщение.
function colorBorderFormInputs(){
	var feedBackForm = document.forms.formFour, 
		formName = feedBackForm.elements.name,
		formEmail = feedBackForm.elements.email,
		formPhone = feedBackForm.elements.phone,
		formPassword = feedBackForm.elements.password,
		formRepeatPassword = feedBackForm.elements.repeatPassword,
		formSubmit = feedBackForm.elements.send,
		regForName = /\D{1,}/i;
		regForEmail = /.{1,}@\D{1,}.\D{1,}/i;
		regForPhone = /\+\d{11}/i;

	if ( regForName.test(formName.value) == false ) {
		formName.style.border = "1px solid red";
		alert('Не корректно введено имя');
	}
	
	if ( regForEmail.test(formEmail.value) == false ){ 		
		formEmail.style.border = "1px solid red";
		alert('Не корректно введен E-mail');
	}
	
	if ( regForPhone.test(formPhone.value) == false ){ 
		formPhone.style.border = "1px solid red";
		alert('Не корректно введен телефон');
	}
	
	if ( formPassword.value != formRepeatPassword.value ) {
		formPassword.style.border = "1px solid red";
		formRepeatPassword.style.border = "1px solid red";
		alert('Пароли не совпадают');
	}

	if ( regForName.test(formName.value) == true && regForEmail.test(formEmail.value) == true &&
		regForPhone.test(formPhone.value) == true && formPassword.value == formRepeatPassword.value ){
			feedBackForm.submit();
			alert('Регистрация прошла успешно!');
	}
}


//Task 5
//Написать скрипт, которые заменяет слово «функция» в тексте на «функция», используя регулярные вырожения.
function changeWord(){
	var string = 'Математическое понятие функции выражает интуитивное представление о том, как одна величина полностью определяет значение другой величины. Так, значение переменной x {\displaystyle x} x однозначно определяет значение выражения x 2 {\displaystyle x^{2}} x^{2}, также значение месяца однозначно определяет значение следующего за ним месяца. Другой пример функции: каждому человеку можно однозначно поставить в соответствие его биологическую мать.';

	var result = string.replace(/функция/ig, 'функция');
	console.log(result);
}
changeWord();


//Task 6
//С помощью test определите, что переданная строка является корректным временем вида '9.59 am', '12.30 pm'.
function correctString(){
	var string = "15.15 am", 
		regExp = /\d{1,2}.\d{2}\s\D{2}/ig,
		result = regExp.test(string);
	
	console.log(result);
}
correctString();