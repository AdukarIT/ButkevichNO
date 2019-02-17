"use strict"

//Task 1
//Дан элемент #elem. Добавьте ему класс "www".
var element = document.getElementById('elem');
element.className = 'www';


//Task 2
//Дан элемент #elem. Проверьте наличие у него класса "www", если есть - удалите класс
//как я понимаю мы сам класс удалить не можем, можем очистить его имя, т.е. присвоить пустую строку
if (element.className == 'www') element.className = '';


//Task 3
//Напишите функцию поиска recursiveSearchTags, которая принимает на вход document и имя тега, 
//а возвращает массив из всех элементов соответствующих этому тегу. Поиск идет в теге body
var arrayElements = [];
function recursiveSearchTags(body, tag){
	var divChild = body.getElementsByTagName(tag);
	return arrayElements = [].slice.call(divChild);
}
console.log(recursiveSearchTags(document.body, 'div'));	


//Task 4
//Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
//Сделайте так, чтобы четные позиции имели красный фон.
var someArray = [];
for (var i = 0; i < 5; i++){             //создание тэгов span и пушим в массив
	var tag = document.createElement('span');
	someArray.push(tag);
}

var ulTag = document.createElement("ul");

for (i = 0; i < someArray.length; i++){          //создает несколько тегов Li внутри тега Ul
	var liTag = document.createElement("li");
	
	if (i % 2 == 0) liTag.style.background = 'red';

	ulTag.appendChild(liTag);
}

for (var i = 0; i < someArray.length; i++) {
	ulTag.appendChild(someArray[i]);
}

document.body.appendChild(ulTag);


//Task 5
//Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'
var prevElement = document.getElementById('elem').previousElementSibling.innerText = '!'; 
//или
var elem = document.getElementById('elem');
var elemPrev = elem.previousElementSibling;
elemPrev.innerHTML = '!';