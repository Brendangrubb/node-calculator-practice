
var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function() {
    $('.ping-pong').submit(function(event) {
        event.preventDefault();
        var newCalculator = new Calculator("hot pink");
        var number = $("#number").val();
        var output = newCalculator.pingPong(number);
        console.log(output);
        output.forEach(function(element) {
            $('#output').append("<li>" + element + "</li>");
        });
    });
});
