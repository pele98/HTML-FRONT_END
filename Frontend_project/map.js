var map = document.querySelector("#mapcanvas");
var infoText = document.querySelector(".tours_info");

console.log(infoText);
function finland() {
  map.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.1147634422473!2d24.929804831474424!3d60.20594606394087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692086097fe9a83%3A0xd0e701000e97142e!2sHartwall%20Arena!5e0!3m2!1sen!2sfi!4v1618562939576!5m2!1sen!2sfi";

  infoText.innerHTML =
    "<p> <b>Address:</b>	Areenankuja 1 </br> <b>Location:</b>	Helsinki, Finland </br> <b>Coordinates:</b>	60°12′20.66N 24°55′44.03E </br> <b>Owner:</b> Arena Events Oy </br> <b>Capacity:</b> 7,500-15,000 </p>";
}

function estonia() {
  map.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2029.7016138602958!2d24.729888716704874!3d59.42137221068046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46929496b747d07d%3A0x742fd8a14b98bff2!2sA.%20Le%20Coq%20Arena!5e0!3m2!1sen!2sfi!4v1618564903697!5m2!1sen!2sfi";

  infoText.innerHTML =
    "<p> <b>Address:</b> Jalgpalli 21 </br> <b>Location:</b>	Tallinn, Estonia </br> <b>Coordinates:</b>	59°25′16.65N 24°43′55.38E </br> <b>Owner:</b> Estonian Football Association </br> <b>Capacity:</b> 14,336 </p>";
}
function belarus() {
  map.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.057465666361!2d27.558098016626516!3d53.89518254115892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfc360da48c9%3A0x903c79016f027b8!2sDinamo%20Stadium!5e0!3m2!1sen!2sfi!4v1618565027422!5m2!1sen!2sfi";
  infoText.innerHTML =
    "<p> <b>Address:</b>Vulica Kirava 8</br> <b>Location:</b>	Minsk, Belarus </br> <b>Coordinates:</b>	53°53′42.67N 27°33′36.20E </br> <b>Capacity:</b> 22,246 </p>";
}
function germany() {
  map.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.3690651142842!2d11.622566816553853!3d48.218767553480205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e7385128a251f%3A0xed4d60428e32c423!2sAllianz%20Arena!5e0!3m2!1sen!2sfi!4v1618565085177!5m2!1sen!2sfi";

  infoText.innerHTML =
    "<p> <b>Address:</b>	Werner-Heisenberg-Allee 25 </br> <b>Location:</b>	München, Germany </br> <b>Coordinates:</b>	48°13′7.59N 11°37′29.11E </br> <b>Owner:</b> Allianz Arena München Stadion GmbH </br> <b>Capacity:</b> 70,000 </p>";
}
function austria() {
  map.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.9690871279586!2d16.418796016553628!3d48.207211354286066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d0739ed3e8cd5%3A0xfe86a8a41d5bc772!2sErnst%20Happel%20Stadium!5e0!3m2!1sen!2sfi!4v1618565143669!5m2!1sen!2sfi";

  infoText.innerHTML =
    "<p> <b>Address:</b>	Meiereistraße 7 </br> <b>Location:</b>Vienna, Austria</br> <b>Coordinates:</b>	48°12′25.8N 16°25′13.9E </br> <b>Owner:</b> City of Vienna </br> <b>Capacity:</b> 50,000 - 68,500 </p>";
}
function spain() {
  map.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4293.940213912481!2d-3.6923087260432554!3d40.447066752212585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228e23705d39f%3A0xa8fff6d26e2b1988!2sSantiago%20Bernab%C3%A9u%20Stadium!5e0!3m2!1sen!2sfi!4v1618565245167!5m2!1sen!2sfi";

  infoText.innerHTML =
    "<p> <b>Address:</b>	Av. de Concha Espina, 1 </br> <b>Location:</b>	Chamartín, Madrid, Spain </br> <b>Coordinates:</b>	40.45306°N 3.68835°W </br> <b>Capacity:</b> 81,044 </p>";
}
