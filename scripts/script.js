//jQuery
$(document).ready(function () {
  console.log("Hello, Local!");
  //JavaScript
  // Select the element and store it in a variable.
  var el = document.getElementById("my-greeting");
  // Change the value of the class attribute.
  el.innerText = "Hello, Local! (programtically.)";

  //let's do it again with jQ
  $("#my-greeting").text("hello Github pages");
});
