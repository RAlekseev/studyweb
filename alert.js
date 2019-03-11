// || ПЕРВОЕ задание ||

var user_answer = prompt("Каково «официальное» название JavaScript?","");

if (user_answer == "ECMAScript")
    alert("Yo god damn right");
else
    alert("Wrong");

// || Второе задание ||

var user_num = prompt("Введите число","");

if (user_num > 0)
    alert(1);
else if (user_num < 0)
    alert(-1);
else
    alert(0);

// || Третье задание ||

var user_role = prompt("Введите Логин","");

if (user_role == "Admin") {
    user_pass = prompt("Введите ваш пароль", "");
    if (user_pass == "pass1")
        alert("Добро пожаловать");
    else if (user_pass == null)
        alert("Выход отменен");
    else
        alert("Пароль неверен");
}
else if (user_role == null)
    alert("Выход отменен");
else
    alert("Я вас не знаю");

// || ЧЕТВЕРТОЕ задание ||

var a = 1;
var b = 2;
result = (a + b < 4) ? "Мало" : "Много";
alert(result);

// || ПЯТОЕ задание ||



var message;
var user_name = prompt("Введите свое имя", "");

message = (user_name == 'Вася')?'Привет':
    (user_name == 'Директор')?'Здравствуйте':
        (user_name == '')?'Нет логина': '';
 alert(message);



