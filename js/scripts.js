//back end javascript

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};


//front end javascript below this comment

$(function(){
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);

    // alert(add(number1, number2));
    // alert(subtract(number1, number2));
    // alert(multiply(number1, number2));
    // alert(divide(number1, number2));
  });
});
