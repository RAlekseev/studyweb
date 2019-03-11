
var num1 = 3;

function isInteger(num){
    if ((num^0) === num){
        alert("Целое");
    }
    else{
        alert("Нецелое");
    }
}

isInteger(num1);