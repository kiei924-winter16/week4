// This code runs when the page loads
$(function() {

  $("#do-something").on("mouseover", function(event) {
    event.preventDefault();
    $("#unicorn").slideDown(10000);
  });

})