// Change the current sites navigation buttons border
var current_site_button = document
  .getElementsByTagName("nav")[0]
  .getElementsByTagName("ul")[0]
  .getElementsByClassName("nav_current")[0];
current_site_button.style.borderStyle = "dashed";

function starmanURL() {
  opener.location = "https://www.google.com";
}
