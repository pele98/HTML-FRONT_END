// Change the current sites navigation buttons border
var current_site_button = document
  .getElementsByTagName("nav")[0]
  .getElementsByTagName("ul")[0]
  .getElementsByClassName("nav_current")[0];
current_site_button.style.borderStyle = "dashed";

// Sets icon to the tab
document.getElementsByTagName("head")[0].innerHTML += 	"<link rel='icon' href='images/logo.png'>"

function starmanURL() {
  opener.location = "https://www.google.com";
}
