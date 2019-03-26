// Первое задание приведение первой буквы к верхнему регистру//

function ucFirst(str){
    firstChar = str.charAt(0);
    return firstChar.toUpperCase() + str.slice(1);
}

alert( ucFirst('Вася') );

// Второе задание проверка на спам/

function checkSpam(str){
    strLow = str.toLowerCase();
    return !!( ~strLow.indexOf('viagra') || ~strLow.indexOf('xxx') )
}

alert( checkSpam("innocent rabbit"));

// Третье задание, случайное число от min до maks //

function truncate(str, maxlength) {
    if (str.length > maxlength){
        return str.slice(0,maxlength - 3) + '...';
    }
    return str;
}

alert( truncate("Вот, что мне", 20));

// Четвертое задание: Выделить число //

function extractCurrencyValue(str){
    return parseInt(str.slice(1));
}

alert( extractCurrencyValue('$120'));
