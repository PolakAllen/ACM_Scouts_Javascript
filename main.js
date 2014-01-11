
var f = document.getElementById("f");
var c = document.getElementById("c");

var FtoC = function() {
    f.value = CelsiusToFahrenheit(c.value);
}
var CtoF = function() {
    c.value = FahrenheitToCelsius(f.value);
}
