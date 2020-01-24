//back end logic
var output = function(input) {
  return true
  // var i = [];
  // for (var i = 0; i <= input.length; i++){
  //   return.push(i);
  // }
}




//user interface logic

$(document).ready(function() {
  $("form#formOne").submit(function() {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = output(number);
    $("#result").text(result);

  });
});