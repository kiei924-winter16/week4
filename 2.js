// This code runs when the page loads
$(function() {

  // Add the rules() method to alert something incredible
  var thisClass = {
    name: "KIEI-924",
    description: "The best class ever",
    instructor: { name: "Brian", status: "Awesome" },
    rules: function() { window.alert("Yeah it does!!!") },
    sucks: function() { window.alert("Yeah it really does!!!") }
  }

  thisClass.rules;

})