//Task 1
//Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.
function cloneInput(){
	var input = document.getElementById('body__input');
	var button = document.getElementById('body__button');

	button.addEventListener('click', function(e){
		var cloneInput = input.cloneNode();
		document.body.appendChild(cloneInput);
	});
}
cloneInput();


//Task 2
//Добавьте на страницу таблицу в стандартном оформлении. При клике на таблице добавьте ей класс bordered, 
//при втором клике удалите класс bordered и добавьте класс striped, при третьем клике удалите класс striped и добавьте класс highlight.
function changeClassByClick(){
	var table = document.getElementById('body__table');

	function changeClass(e){
		if (table.className == 'bordered') table.className = 'striped';
		else if (table.className == 'striped') table.className = 'highlight';
		else table.className = 'bordered';
	}

	table.addEventListener('click', changeClass);
}
changeClassByClick();


//Task 3
//Модифицируйте задачу 7. Добавьте три radiobutton. При выборе первого включается класс bordered, 
//при выборе второго отключается bordered и включается striped, при выборе третьего включается highlight и отключается striped.
function changeClassByRadio(){
	var table = document.getElementById('body__table');

	var radioFirst = document.getElementById('radio-first');
	var tableSecond = document.getElementById('radio-second');
	var tableThird = document.getElementById('radio-third');

	radioFirst.addEventListener('click', function(e){
		if (radioFirst.checked == true) table.className = 'bordered';
	});
	tableSecond.addEventListener('click', function(e){
		if (tableSecond.checked == true) table.className = 'striped';
	});
	tableThird.addEventListener('click', function(e){
		if (tableThird.checked == true) table.className = 'highlight';
	});
}
changeClassByRadio();

//Task 4
//Создайте кнопку. При нажатии на кнопку с помощью элемента this выведите содержащийся в тегах кнопки текст. 
//Вывод осуществлять с помощью alert. Создайте кнопку отключающую события на предыдущей кнопке.

//как я понял понятие "отключения события" это не дать кнопке сработать
function alertMessage(){
	var button = document.getElementById('button-alert');
	var cancel = document.getElementById('button-alert-cancel');

	button.addEventListener('click', function(e){
		alert(this.value);
	});

	cancel.addEventListener('click', function(e){
		button.disabled = true;
	});
}
alertMessage();


//Task 5
//Создайте элементы div, p, button, a. Используя target по клику выводите информацию о типе элемента по которому произошел клик.
function getInfo(elem){
	this.divInfo = function() {
      alert( typeof this );
    };
    this.pInfo = function() {
      alert( typeof this );
    };
    this.buttonInfo = function() {
      alert( typeof this );
    };
    this.linkInfo = function() {
      alert( typeof this );
    };

    var self = this;

    elem.onclick = function(e) {
      var target = e.target;
      var action = target.getAttribute('id');
      if (action) {
        self[action]();
      }
    };
}
new getInfo(info);


//Task 6
//Добавьте в html код изображение. Добавьте скрипт, который будет выполнять следующие действия: 
//при наведении мыши на картинку, изображение будет заменяться другим изображением. При выходе 
//мыши за пределы изображения, будет восстанавливаться первоначальное изображение.
function hoverImage(){
	var image = document.getElementById('image');

	image.addEventListener('mouseover', function(e){
		image.src = 'image/bg-mobile-right.png';
	});
	image.addEventListener('mouseout', function(e){
		image.src = 'image/bg-mobile-left.png';
	});
}
hoverImage();


//Task 7
//Используя событие onclick реализовать аналог fancybox. При клике – картинка увеличивается в размерах 
//и всплывает над контентом. Остальной контент затемняется. Для «всплывания» изображения используйте position:absolute.
function fancyBox(){
	var imageMonkey = document.getElementById('imageFancyBox');
	var background = document.getElementById('shadow');
	var close = document.getElementById('close');

	function changeClass(){
		if (imageMonkey.className == 'imageFancyBox') {
			imageMonkey.className = 'image-monkey';
			background.className = 'background';
			close.style.display = 'inline-block';
		}
		else { 
			imageMonkey.className = 'imageFancyBox';
			background.className = '';
			close.style.display = 'none';
		};
	}

	imageMonkey.addEventListener('click', changeClass);
	close.addEventListener('click', changeClass);
}
fancyBox();