var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function() {
  $('.add').submit(function(event) {
    event.preventDefault();
    $('#output').empty();
    var newCalculator = new Calculator("skin");
    var number_one = $('#number-one').val();
    var number_two = $('#number-two').val();
    var result = newCalculator.add(number_one, number_two);
    $('#output').append("<li>" + "The sum of " + number_one + " and " +  number_two + " is " + result + "!" + "</li>");
  });

});
