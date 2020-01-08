function string_func() {
    var str = "The string length property will show the length of characters. Click below to see it work on this text."
    var a = str.length;
    document.getElementById("strlng").innerHTML = a;
}

var inst = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var a;
function for_loop() {
    for (a = 0; a < inst.length; a++) {
        content += inst[a] + "<br>";
    }
    document.getElementById("list_instr").innerHTML = content;
}

function array_func() {
    var catactions = [];
    catactions[0] = "sleeping";
    catactions[1] = "eating";
    catactions[2] = "playing";
    catactions[3] = "purring";
    document.getElementById("array").innerHTML = "Here the cat is " + catactions[2] + ".";
}

const car = { type: "Honda", model: "Accord", year: 2019, doors: 4 };
function const_func() {
    document.getElementById("const").innerHTML = "I have a " + car.type + " " + car.model + " "
        + car.year + " and it has " + car.doors;
}

var x = 1216;
document.write(x);

{
    let x = "True Blue";
    document.write(x);
}
document.write(x);

function return_func() {
    document.getElementById("return").innerHTML = count_func();
    function count_func() {
        var start = 11;
        function plus_one() { start += 1; }
        plus_one();
        return start;
    }
}

function break_func() {
    var a = 0;
    var text = ""
    for (a = 0; a < 10; a++) {
        if (a === 7) { break; }
        text += "the number is " + a + "<br>";
        document.getElementById("break").innerHTML = text;
    }
}

function cont_func() {
    var a = 0;
    var text = ""
    for (a = 0; a < 10; a++) {
        if (a === 7) { continue; }
        text += "the number is " + a + "<br>";
        document.getElementById("cont").innerHTML = text;
    }
}