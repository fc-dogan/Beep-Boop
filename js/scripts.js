//business logic

var beepBoop = function(input) {
  var output = [];
  for (var i = 0; i <= input; i++){
     output.push(i);
  };
  return output
};




//user interface logic

$(document).ready(function() {
  $("form#formOne").submit(function() {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = beepBoop(number);
    console.log(result)
    $("#result").text(result);

  });
});