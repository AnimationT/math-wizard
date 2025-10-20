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

function power(number1, number2) {
    return number1 ** number2;
}

function squareRoot(number) {
    return Math.sqrt(number);
}

function linearEquation(number1, number2, number3) {
    if (isNaN(number1) === true){
    return number3 - number2;
    } else {
        return (number3 - number2) / number1;
    }
}

function quadraticEquation(a, b, c) {
    if (isNaN(a) == true) {
        a = 1;
    }
    let discriminant = b**2 - 4*a*c;
    if (discriminant < 0) {
        return "no possible answers";
    } else if (discriminant === 0) {
        let root = -b / (2*a);
        return `one real answer: ${root}`;
    } else {
        let root1 = (-b + Math.sqrt(discriminant)) / (2*a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2*a);
        return `two real answers: ${root1} and ${root2}`;
    }
}

function round(number, decimals) {
    if (isNaN(decimals) === true) {
        decimals = 0;
    }
  return Math.round(number * 10**decimals) / 10**decimals;
}


var numberOne;
var numberTwo;
var numberThree;
var partOne;
var partTwo;
var partThree;

setInterval(() => {
    numberOne = parseFloat(document.getElementById("number1").value);
    numberTwo = parseFloat(document.getElementById("number2").value);
    numberThree = parseFloat(document.getElementById("number3").value);

    partOne = parseFloat(document.getElementById("part1").value);
    partTwo = parseFloat(document.getElementById("part2").value);
    partThree = parseFloat(document.getElementById("part3").value);
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
    let result1 = multiply(numberOne, numberOne);
    if (isNaN(result1) === true) {
        document.getElementById("info").innerHTML = "there ain't no number one buddy";
    } else {
    document.getElementById("info").innerHTML = result1;
    }
});

document.getElementById("square2").addEventListener("click", function() {
    let result2 = multiply(numberTwo, numberTwo);
    if (isNaN(result2) === true) {
        document.getElementById("info").innerHTML = "there ain't no number two buddy";
    } else {
    document.getElementById("info").innerHTML = result2;
    }
});

document.getElementById("square3").addEventListener("click", function() {
    let result3 = multiply(numberThree, numberThree);
    if (isNaN(result3) === true) {
        document.getElementById("info").innerHTML = "there ain't no number three buddy";
    } else {
    document.getElementById("info").innerHTML = result3;
    }
});

document.getElementById("power").addEventListener("click", function() {
    let pResult = power(numberOne, numberTwo);
    if (isNaN(pResult) === true) {
        document.getElementById("info").innerHTML = "either number one or number two are missing";
    } else if (isNaN(pResult) === false && isFinite(pResult) === false) {
    document.getElementById("info").innerHTML = "the number is so big even i couldnt handle it, but its at least 179000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
    } else {
    document.getElementById("info").innerHTML = pResult;
    }
});

document.getElementById("sqrt1").addEventListener("click", function() {
    document.getElementById("info").innerHTML = squareRoot(numberOne);
});

document.getElementById("sqrt2").addEventListener("click", function() {
    document.getElementById("info").innerHTML = squareRoot(numberTwo);
});

document.getElementById("sqrt3").addEventListener("click", function() {
    document.getElementById("info").innerHTML = squareRoot(numberThree);
});

document.getElementById("linEquation").addEventListener("click", function() {
    document.getElementById("equationInfo").innerHTML = linearEquation(partOne, partTwo, partThree);
});

document.getElementById("quadEquation").addEventListener("click", function() {
    document.getElementById("equationInfo").innerHTML = quadraticEquation(partOne, partTwo, partThree);
});

document.getElementById("round").addEventListener("click", function() {
    document.getElementById("info").innerHTML = round(numberOne, numberTwo);
});