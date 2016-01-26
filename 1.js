// This code runs when the page loads
$(function() {

  // Write a function that yells (e.g. TACOS!!!!!)
  var yell = function(food) {
    return food.toUpperCase() + "!!!!!!!";
  }

  var yelledString = yell("bacon");
  window.alert(yelledString);
})