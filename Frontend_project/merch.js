// store merch types and individual merches in arrays
var merchTypeArray = [];
var merchArray = [];

// keeps track of how many merches are being purchased
var merchCounter = 1;

// keeps track of mouse position
var mousePosition = null;

// class for merch types
class MerchType {
  constructor(name, thumbnail) {
    this.name = name;
    this.thumbnail = thumbnail;
    merchTypeArray.push(this);
  }
}

// class for merch
class Merch {
  constructor(name, type, price, amountIntStock, thumbnail) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.amountIntStock = amountIntStock;
    this.thumbnail = thumbnail;
    merchArray.push(this);
  }
}

// write merch type selectors to the document
function writeMerchType(merchType) {
  var toWrite =
    "<div class= 'merch_type' onclick='writeMerch(\"" +
    merchType.name +
    "\")' style= 'background-image: url(\"" +
    merchType.thumbnail +
    "\"'); alt= '" +
    merchType.name +
    "'></div>";

  // write the merch type and its background to merch selector div
  document.getElementById("merch_selector").innerHTML += toWrite;
}

// write merch into the document based on the selected type
function writeMerch(merchName) {
  // remove any previous merch from merch area
  document.getElementById("merch_area").innerHTML = "";

  // loop through the mercharray and add all matching merches to
  // the merch area
  var i;
  for (i = 0; i < merchArray.length; i++) {
    if (merchArray[i].type.name === merchName) {
      var toWrite =
        "<div class= 'merch' onclick= 'previewMerch(\"" +
        merchArray[i].name +
        "\")' style= 'background-image: url(\"" +
        merchArray[i].thumbnail +
        "\")' alt= '" +
        merchArray[i].name +
        "'></div>";
      document.getElementById("merch_area").innerHTML += toWrite;
    }
  }
}

// loads merch into the preview area
function previewMerch(merchName) {
  // reset the merch amount counter
  merchCounter = 1;

  // loop through merch array and find the merch with mathcing name
  var merch;
  var i;
  for (i = 0; i < merchArray.length; i++) {
    if (merchArray[i].name === merchName) {
      merch = merchArray[i];
    }
  }

  // remove any previous merch from merch preview
  var merchPreview = document.getElementById("merch_preview");
  merchPreview.innerHTML = "";

  // buttons below the merch image
  var previewButtons =
    "<div id='merch_preview_buttons'>\
  <div id='merch_preview_minus' alt='minus button'></div>\
  <div id='merch_preview_plus' alt='plus button'></div>\
  <div id='merch_preview_amount'></div>\
  <div id='merch_preview_buy' alt='buy merch button'></div>\
  </div>";

  // writes the merch preview box and the buttons to it
  merchPreview.innerHTML =
    "<div id='merch_preview_box' onclick= 'movePreview()'>" +
    previewButtons +
    "</div>";

  // set the merch preview box background to be the merches image
  document.getElementById("merch_preview_box").style.backgroundImage =
    "url(" + merch.thumbnail + ")";

  // write the table containing merch and purchase info
  var merchInfo =
    "<div id= 'merch_preview_info'>\
  <table><tr><th>Amount in stock</th><td>" +
    merch.amountIntStock +
    "</td></tr>\
  <tr><th>Price</th><td>" +
    merch.price +
    "</td></tr><tr><th>Purchase Price</th><td>" +
    merch.price * merchCounter +
    "</td></tr></table>\
  </div>";

  // add this table to the merch preview
  merchPreview.innerHTML += merchInfo;

  // add function to their matching buttons
  document.getElementById("merch_preview_minus").onclick = function () {
    minus_merch(merch);
  };
  document.getElementById("merch_preview_plus").onclick = function () {
    plus_merch(merch);
  };
  document.getElementById("merch_preview_amount").innerHTML = merchCounter;
  document.getElementById("merch_preview_buy").onclick = function () {
    buy_merch(merch);
  };
}

// update purchase price
function updatePurchasePrice(merch) {
  document
    .getElementById("merch_preview_info")
    .getElementsByTagName("td")[2].innerHTML = merch.price * merchCounter;
}

// add one to merch counter
function plus_merch(merch) {
  // if merchcounter tries to go over the stock amount, dont increase it
  // further
  if (merchCounter >= merch.amountIntStock) {
    return;
  }

  // otherwise add 1 to merch counter and update the merchcount to the
  // merch preview amount div
  merchCounter += 1;
  document.getElementById("merch_preview_amount").innerHTML = merchCounter;

  // update the purchase price
  updatePurchasePrice(merch);
}

// minus one from merch counter
function minus_merch(merch) {
  // if the merchcounter tries to go to 0 or lower, dont change it
  if (merchCounter <= 1) {
    return;
  }

  // otherwise reduce it by one and update merch preview amount and
  // purchase price
  merchCounter -= 1;
  document.getElementById("merch_preview_amount").innerHTML = merchCounter;
  updatePurchasePrice(merch);
}

// buy merch
function buy_merch(merch) {
  // dont allow purchases that are higher than the amount in stock
  if (merchCounter > merch.amountInStock) {
    return;
  }

  // reduce the amount from stock based on merchcounter
  merch.amountIntStock -= merchCounter;

  // update new stock amount to the table on prview info
  document
    .getElementById("merch_preview_info")
    .getElementsByTagName("td")[0].innerHTML = merch.amountIntStock;

  // if merch counter is higher than the current stock amount,
  // change it to be the current stock amount
  if (merchCounter > merch.amountIntStock) {
    merchCounter = merch.amountIntStock;

    // update merch preview and purchase price
    document.getElementById("merch_preview_amount").innerHTML = merchCounter;
    updatePurchasePrice(merch);
  }
}

// moves the preview on every other click based on mouse movement
function movePreview() {
  // if mouse position is null, get the current position
  if (mousePosition == null) {
    mousePosition = [window.event.clientX, window.event.clientY];
    return;
  }

  // calculates the horizontal and vertical moves between the last 2 clicks
  var horMove = window.event.clientX - mousePosition[0];
  var verMove = window.event.clientY - mousePosition[1];

  // get the vertical and horizontal background positions of the
  // preview image
  var verPos = parseInt(
    document.getElementById("merch_preview_box").style.backgroundPositionY
  );
  var horPos = parseInt(
    document.getElementById("merch_preview_box").style.backgroundPositionX
  );

  // if they are intereger, set the new background positions to be
  // the previous ones + mouse movement
  if (!(isNaN(horPos) || isNaN(verPos))) {
    var string =
      String(horMove + horPos) + "px " + String(verMove + verPos) + "px";
  }
  // else set them equal to only the mouse movement
  else {
    var string = String(horMove) + "px " + String(verMove) + "px";
  }
  document.getElementById(
    "merch_preview_box"
  ).style.backgroundPosition = string;

  // set mouseposition to null to allow picking a new position
  mousePosition = null;
}

// create merch types
var tShirts = new MerchType("T-Shirts", "images/merch/t-shirt-black.png");
var hoodies = new MerchType("Hoodies", "images/merch/hoodie-black.png");
var jewellry = new MerchType("Jewellry", "images/merch/jewellry-ring.png");
var posters = new MerchType("Posters", "images/merch/poster-black-logo.png");
var misc = new MerchType("Misc", "images/merch/misc-car.png");

// create merch
new Merch("Black Hoodie", hoodies, 70, 200, "images/merch/hoodie-black.png");
new Merch("Blue Hoodie", hoodies, 70, 200, "images/merch/hoodie-blue.png");
new Merch("White Hoodie", hoodies, 70, 200, "images/merch/hoodie-white.png");
new Merch("Band Necklace", jewellry, 100, 50, "images/merch/jewellry-neck.png");
new Merch("Band Ring", jewellry, 150, 50, "images/merch/jewellry-ring.png");
new Merch("Band Wrist", jewellry, 30, 100, "images/merch/jewellry-wrist.png");
new Merch("Band Car", misc, 300000, 5, "images/merch/misc-car.png");
new Merch(
  "Black Poster With Logo",
  posters,
  25,
  1000,
  "images/merch/poster-black-logo.png"
);
new Merch("Black T-Shirt", tShirts, 40, 300, "images/merch/t-shirt-black.png");
new Merch("White T-Shirt", tShirts, 40, 300, "images/merch/t-shirt-white.png");
new Merch("Blue T-Shirt", tShirts, 40, 300, "images/merch/t-shirt-blue.png");

// write merch types to the document
var i;
for (i = 0; i < merchTypeArray.length; i++) {
  writeMerchType(merchTypeArray[i]);
}
