
var f = document.getElementById("f");
var c = document.getElementById("c");
var buttonCF = document.getElementById("convertCF");
var buttonFC = document.getElementById("convertFC");

var convert = {
    CelsiusToFahrenheit:function(degreesCelsius) {
        alert("replace this function with one that converts Celsius to Fahrenheit");
        return 0;
    },
    FahrenheitToCelsius:function(degreesFahrenheit) {
        alert("replace this function with one that converts Fahrenheit to Celsius");
        return 0;
    }
};

buttonCF.onclick = function() {
    var conversion = convert.CelsiusToFahrenheit(c.value);
    f.value = conversion;
};

buttonFC.onclick = function() {
    var conversion = convert.FahrenheitToCelsius(f.value);
    c.value = conversion;
};
