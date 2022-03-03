$(document).ready(function () {
  console.log("Doc's Ready");


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// practice 

Practice.onclick = function(){myScript};

object.addEventListener("click", myScript);

