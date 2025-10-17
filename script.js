function multiply(number1, number2, number3) {
  if (isNaN(number3) == true) {
     return number1 * number2;
    } else {
     return number1 * number2 * number3;
    }
}

function divide(number1, number2, number3) {
  if (isNaN(number3) === true && number2 != 0) {
     return number1 / number2;
    } else if (isNaN(number3) === false && number2 && number3 !== 0) {
     return number1 / number2 / number3;
    } else{
     return "cant divide by 0 buddy";
    }
}

function add(number1, number2, number3) {
  if (isNaN(number3) == true) {
     return number1 + number2;
    } else {
     return number1 + number2 + number3;
    }
}

function subtract(number1, number2, number3) {
    if (isNaN(number3) == true) {
     return number1 - number2;
    } else {
     return number1 - number2 - number3;
    }
}

function subtract2(number1, number2, number3) {
     return number1 - number2 - number3;
}

function power(number1, number2) {
    if (number1 ** number2 == Infinity) {
    return "thats so big even i couldnt handle it, but its at least 179000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
    } else {
    return number1 ** number2;
    }
}


var numberOne;
var numberTwo;
var numberThree;

setInterval(() => {
    numberOne = parseFloat(document.getElementById("number1").value);
    numberTwo = parseFloat(document.getElementById("number2").value);
    numberThree = parseFloat(document.getElementById("number3").value);
}, 1);

document.getElementById("add").addEventListener("click", function() {
    document.getElementById("info").innerHTML = add(numberOne, numberTwo, numberThree);
});

document.getElementById("subtract").addEventListener("click", function() {
    document.getElementById("info").innerHTML = subtract(numberOne, numberTwo, numberThree);
});

document.getElementById("multiply").addEventListener("click", function() {
    document.getElementById("info").innerHTML = multiply(numberOne, numberTwo, numberThree);
});

document.getElementById("divide").addEventListener("click", function() {
    document.getElementById("info").innerHTML = divide(numberOne, numberTwo, numberThree);
});

document.getElementById("square1").addEventListener("click", function() {
    document.getElementById("info").innerHTML = multiply(numberOne, numberOne);
});

document.getElementById("square2").addEventListener("click", function() {
    document.getElementById("info").innerHTML = multiply(numberTwo, numberTwo);
});

document.getElementById("square3").addEventListener("click", function() {
    let result = multiply(numberThree, numberThree);
    if (result === NaN) {
        document.getElementById("info").innerHTML = "there ain't no number three buddy";
    } else
    document.getElementById("info").innerHTML = result;
});

document.getElementById("power").addEventListener("click", function() {
    document.getElementById("info").innerHTML = power(numberOne, numberTwo);
});
