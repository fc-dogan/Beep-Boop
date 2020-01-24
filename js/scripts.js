
var beepBoop = function(input) {
  var output = [];
  var arrayInput = input.toString().split("");
  for (var i = 0; i < arrayInput.length ; i++){
    if (arrayInput.includes("3")) {
      output.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (arrayInput.includes("2")) {
      output.push("Boop!");
    } else if (arrayInput.includes("1")) {
      output.push("Beep!");
    } else {
      for (var i = 0; i <= input; i++){
           output.push(i);
      }
    }
  };
  return output
};



//user interface logic

$(document).ready(function() {
  $("form#formOne").submit(function() {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = beepBoop(number);
    $("#result").append("<li>"+ result +"</li>");
    
  });
});