document.write("Here is my text!");

function my_function() {
    document.getElementById("test").innerHTML = 0/0;
    document.getElementById("test1").innerHTML = isNaN ("1216");
    document.getElementById("test2").innerHTML = isNaN ("Text");
}

document.write(-4E315);
document.write(4E320);

document.write(6>3);
document.write(9<3);

document.write("15" + 5);

document.write(20 == 25);
document.write(15 == 15);

var date1 = 12/25/1981;
var date2 = 12/25/1990;
var date3 = "Text";
var date4 = 12/25/1981;
var date5 = "december 25th 1981";


document.write(date1 === date4);
document.write(date1 === date3);
document.write(date1 === date5);
document.write(date1 === date2);

document.write(10>4 && 20>5);
document.write(25>50 && 20>5);

document.write(10>4 || 2>5);
document.write(5>50 || 2>5);

function not_func() {
    document.getElementById("not").innerHTML = !(10 > 5);
    document.getElementById("not1").innerHTML = !(1 > 5);
}