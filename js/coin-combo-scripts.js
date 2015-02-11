var coinCombo = function(amount) {

  var quarters = 0;
  var dimes = 0;
  var nickels = 0;
  var pennies = 0;
  var remainder = 0;

  quarters = Math.floor(amount / 25);
  remainder = amount % 25;
  dimes = Math.floor(remainder / 10);
  remainder = amount % 25 % 10;
  nickels = Math.floor(remainder / 5);
  remainder = amount % 25 % 10 % 5;
  pennies = Math.floor(remainder / 1);

  return [quarters, dimes, nickels, pennies];
};

$(document).ready(function() {
  $("form#coin-combo").submit(function(event) {
    var stringInput = parseInt($("input#amount").val());
    var result = coinCombo(stringInput);

    $(".quarters").text(result[0]);
    $(".dimes").text(result[1]);
    $(".nickels").text(result[2]);
    $(".pennies").text(result[3]);

    $("#result").show();
    event.preventDefault();
  })
});
