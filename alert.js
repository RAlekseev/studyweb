// Первое задание //

var first = +prompt('Введите первое число');
var second = +prompt('Введите второе число');

alert(first + second);

// Второе задание формула Бине//

function fibBine(n) {
    x = Math.pow( ((1 + Math.sqrt(5))/2) , n)/Math.sqrt(5);
    return Math.round(x);
}

alert('Для n = ' + 77 + '\nРезультат функции считающей фрактал через формулу Бине:' + fibBine(77));

// Третье задание, случайное число от min до maks //


 function random(min,max) {
     return (Math.random(1) * (max - min) + min);
 }


alert( random(10,40));