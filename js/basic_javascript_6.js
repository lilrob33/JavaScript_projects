function ride_func() {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "You are too short!" : "You are tall enough!";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
}

function vehicle(make, model, year, color) {
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}

var jack = new vehicle("Dodge", "Viper", 2020, "Red");
var Laureen = new vehicle("Hyundai", "Sonata", 2018, "White");
var Pedro = new vehicle("Honda", "Accord", 2019, "Metallic");

function vehicle_func() {
    document.getElementById("keywords_and_constructors").innerHTML =
    "Pedro drives a " + Pedro.vehicle_color + " -colored" + " " + Pedro.vehicle_make + " " +
    Pedro.vehicle_model +
    " Manufactured in " + Pedro.vehicle_year;
}

var Ed = new phone("iPhone", "11 Pro Max", "Space Grey");
var Laureen = new phone("iPhone", "Xr", "Coral");
var Pedro = new phone("Galaxy", "s10 Plus", "Metallic Blue");

function phone(make, model, color) {
    this.phone_make = make;
    this.phone_model = model;
    this.phone_color = color;
}

function phone_func() {
document.getElementById("new_and_this").innerHTML =
    "Laureen has an " + Laureen.phone_make + " " + Laureen.phone_model +
    " in the color " + Laureen.phone_color;
}

function nest_func() {
    document.getElementById("nested_func").innerHTML = count_func ();
    function count_func() {
    var start = 11;
    function plus_one() {start += 1;}
    plus_one();
    return start;}
}