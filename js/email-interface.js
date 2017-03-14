
$(document).ready(function() {
  $('.email').submit(function(event) {
    event.preventDefault();
    $('#output').empty();
    var email = $('#email-address').val();
    console.log(email);
    $('#output').append("<li>" + "thanks for registering your email, " + email + "!" + "</li>");
  });
});
