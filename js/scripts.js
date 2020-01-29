
var beepBoop = function(number) {
  var output = [];
  for (var index= 0; index<=number; index++) {
    var temp = branchInput(index);
    output.push(temp);
  }
  return output
};

function branchInput(index) {
  var arrayInput = index.toString().split("");
  if (arrayInput.includes("3")) {
    temp = ["I'm sorry, Dave. I'm afraid I can't do that."];
  } else if (arrayInput.includes("2")) {
    temp = ["Boop!"];
  } else if (arrayInput.includes("1")) {
    temp = ["Beep!"]; 
  } else {
    temp = index.toString();
  }
  return temp;
};




//user interface logic

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = beepBoop(number);
    console.log(result);
    $("#result").text(result);

    $("input#number").val("");
  });
});


//user interface logic

$(document).ready(function() {
  $("form#formOne").submit(function() {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = beepBoop(number);
    $("#result").each(function() {
      $(this).append($("<li>").text(result));
    });
    $("#boom").toggle();
   
  });
});