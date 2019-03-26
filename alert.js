// Первое задание  ассоциативные массивы//

function isEmpty(obj) {
    for (var i in obj) return false;
    return true;
}


var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) );

//Второе задание: Сумма свойств //

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

result = 0;

for (var key in salaries)
    result += salaries[key];

alert( result );

//Третье задание: Свойство с наибольшим значением //

function takeMaxProp(obj) {
    result = 0;
    for (var key in obj){
        if (obj[key] > result) result = obj[key]
    }
    return result;
}
alert( takeMaxProp(salaries) );

// 4 задание: умножение на 2 всех числовых полей

function multiNumeric(obj) {
    for(var key in obj){
        if (!isNaN(parseFloat(obj[key])) && isFinite(obj[key]))
            obj[key] = obj[key] << 1
    }
}

alert( multiNumeric(salaries));