/*// Задача 1 : Создание массива//
var styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');
styles[styles.length - 2] = 'Классика';
alert(styles.shift());
styles.unshift('Рэп', 'Регги');

// Задание 2  : случайное значение из массива  //

var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var rand = Math.floor(Math.random() * (arr.length));

alert( arr[rand] );

// Задание 3 : калькулятор введенных значений


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

result = 0;

while (true){
    temp = prompt('Введите число', '');
    if (isNumeric(temp)){
        result += +temp;
    }
    else{
        break;
    }
}

alert(result);

// Задание 4 : Поиск в Массиве
function find(arr, value) {
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === value){
            return i;
        }
    }
    return (-1);
}

arr = ["test", 2, 1.5, false];

alert(find(arr, "test")); // 0
alert(find(arr, 2)); // 1
alert(find(arr, 1.5)); // 2

alert(find(arr, 0)); // -1

// Задание 5 : Фильтр диапозона
function filterRange(arr, a, b) {
    resultArray = [];
    for (var i = 0;  i <= arr.length;  i++){
        temp = arr[i];
        if((temp >= a)&&(temp <= b)){
            resultArray.push(temp)
        }
    }
    return resultArray;
}

var arr = [5, 4, 3, 8, 0];

var filtered = filterRange(arr, 3, 5);
alert(filtered);*/

// Задание 6: Решето Эратосфена //
function findPrimeArrayLowerN(n) {
    var tempArray = [];
    var resultArray = [];

    for(var i = 0; i <= n; i++){
        tempArray[i] =true;
    }

    for(var i = 2; i*i <= n ; i++){
        if(tempArray[i] == false){
            continue;
        }
        for(var j = 2; j < (tempArray.length/i); j++){
            tempArray[j*i] = false;
        }
    }

    for(var i = 2; i <= n; i++){
        if(tempArray[i] == true){
            resultArray.push(i);
        };
    }

    return resultArray;
}

alert(findPrimeArrayLowerN(100));
