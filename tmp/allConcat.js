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


$(document).ready(function() {
  $('.email').submit(function(event) {
    event.preventDefault();
    $('#output').empty();
    var email = $('#email-address').val();
    console.log(email);
    $('#output').append("<li>" + "thanks for registering your email, " + email + "!" + "</li>");
  });
});
