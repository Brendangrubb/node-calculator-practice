
var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function() {
    $('.ping-pong').submit(function(event) {
        event.preventDefault();
        $('#output').empty();
        var newCalculator = new Calculator("hot pink");
        var number = $("#number").val();
        var output = newCalculator.pingPong(number);
        output.forEach(function(element) {
            $('#output').append("<li>" + element + "</li>");
        });
    });
});
