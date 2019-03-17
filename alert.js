var age = 19;

function checkAge(age) {

    return ((age > 18)?true:confirm('Родители разрешили'));
}

function checkAge2(age) {

    return (age > 18)||confirm('Родители разрешили');
}


alert(checkAge(age));
alert(checkAge2(age));

// Второе задание //

function min(a,b) {
    return (a > b)?b:a;
}

var b = 5;
alert(min(age,b));

// Третье задание //
var x = prompt("x?");
var n = prompt("n?");

function pow(x,n) {
    var res = x;
    for(var i = 1;i<n;i++)
        res *= x;
    return res;

}

alert(pow(x,n));