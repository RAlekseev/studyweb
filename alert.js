// Первое задание //

var n = 100;

function sumToFromCycle(n) {
    var res = 0;
    for(var i = 1;i<=n;i++)
        res += i;
    return res;
}

function sumToFromRec(n){
    if(n == 1){
        return n;
    }
    else{
        return n + sumToFromRec(n-1);
    }
}

function sumToFromFormula(n){
    return (1+n)/2*n;
}

alert( 'Для n = ' + n + '\nРезультат функции считающей через циклы:' + sumToFromCycle(n) +
    '\nРезультат функции считающей через циклы:' + sumToFromRec(n) +
    '\nРезультат функции считающей через формулу:' + sumToFromFormula(n));

// Второе задание //

function fractal(n) {
    if (n == 1){
        return n;
    }
    else{
        return n*fractal(n-1);
    }

}

alert('Для n = ' + n + '\nРезультат функции считающей фрактал через рекурсию:' + fractal(n));

// Третье задание (фибоначи) //

 function fib(n) {
     if(n <= 2){
         return 1;
     }
     else{
         return(fib(n-1)+ fib(n-2));
     }
 }

function makeCaching(f) {
    var cache = {};

    return function(x) {
        if (!(x in cache)) {
            cache[x] = f.call(this, x);
        }
        return cache[x];
    };

}

fib = makeCaching(fib);

function fib2(n) {
    var a = 1,
        b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}

var time = performance.now();



 alert('Для n = ' + n + '\nРезультат функции считающей числа фибоначи через рекурсию\n С использованием кэшируещего декоратора:' + fib(n)
 + '\n время выполнения :' + (performance.now() - time).toFixed(4));

 time = performance.now();

alert('Для n = ' + n + '\nРезультат функции считающей числа фибоначи через цикл:' + fib2(n)
    + '\n время выполнения :' + (performance.now() - time).toFixed(4));