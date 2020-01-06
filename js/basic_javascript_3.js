function addBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = parseInt(num1) + parseInt(num2);
}

function subtractBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 - num2;
}

function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;
}

function modulus() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 % num2;
}

function moremath() { 
    document.getElementById("math").innerHTML= (1 + 2) * 10 / 2 - 5;
}

function negate() {
    document.getElementById("neg").innerHTML= "-" + num1;
}

window.alert(Math.random() * 100);

var x = 5.5;
x ++;
document.write(x);

var y = 5.65;
y --;
document.write(y);