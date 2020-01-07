var a = "This is ";
var b = "one "
var c = "sentence of two ";
var d ="using a few variables.";
var e = "the second ";

function concat_func() {
    document.getElementById("sentence1").innerHTML = a + b + c + d;
    document.getElementById("sentence2").innerHTML = a + e + c + d;
}

function slice_func() {
    var sentence = "Work hard, play harder!";
    var section = sentence.slice(11, 15);
    document.getElementById("slice").innerHTML = section;
}

function upper_func() {
    var str = "This function will make a selected string all uppercase!";
    var result = str.toUpperCase();
    document.getElementById("upper").innerHTML = result;
}

function search_func() {
    var str = "This function will show the position of a certain word you ask it to.";
    var a = str.search("position");
    document.getElementById("find").innerHTML = a;
}

function string_func() {
    var num = 12;
    var b = num.toString();
    document.getElementById("find").innerHTML = b;
}

function prec_func() {
    var c = 1216.46578741168625;
    document.getElementById("precisiion").innerHTML = c.toPrecision(8);
}

function fix_func() {
    var num1 = 6.4879614;
    var d = num1.toFixed(3);
    document.getElementById("fix").innerHTML = d;
  }

  function value_func() {
    var str2 = "What's Up Everybody!!";
    var e = str2.valueOf();
    document.getElementById("value").innerHTML = e;
  }