// store merch types and individual merches in arrays
var merchTypeArray = [];
var merchArray = [];

// keeps track of how many merches are being purchased
var merchCounter = 1;

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
    "\"');></div>";
  document.getElementById("merch_selector").innerHTML += toWrite;
}

// write merch into the document based on the selected type
function writeMerch(merchName) {
  document.getElementById("merch_area").innerHTML = "";
  console.log(merchArray.length);
  var i;
  for (i = 0; i < merchArray.length; i++) {
    console.log(merchArray[i].type.name);
    if (merchArray[i].type.name === merchName) {
      var toWrite =
        "<div class= 'merch' onclick= 'previewMerch(\"" +
        merchArray[i].name +
        "\")' style= 'background-image: url(\"" +
        merchArray[i].thumbnail +
        "\")'></div>";
      document.getElementById("merch_area").innerHTML += toWrite;
    }
  }
}

// loads merch into the preview area
function previewMerch(merchName) {
  merchCounter = 1;
  var merch;
  var i;
  for (i = 0; i < merchArray.length; i++) {
    if (merchArray[i].name === merchName) {
      merch = merchArray[i];
    }
  }
  var merchPreview = document.getElementById("merch_preview");
  merchPreview.innerHTML = "";
  var previewButtons =
    "<div id='merch_preview_buttons'>\
  <div id='merch_preview_minus'></div>\
  <div id='merch_preview_plus'></div>\
  <div id='merch_preview_amount'></div>\
  <div id='merch_preview_buy'></div>\
  </div>";
  merchPreview.innerHTML =
    "<div id='merch_preview_box'>" + previewButtons + "</div>";
  document.getElementById("merch_preview_box").style.backgroundImage =
    "url(" + merch.thumbnail + ")";

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
  merchPreview.innerHTML += merchInfo;
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
  if (merchCounter >= merch.amountIntStock) {
    return;
  }
  merchCounter += 1;
  document.getElementById("merch_preview_amount").innerHTML = merchCounter;
  updatePurchasePrice(merch);
}
// minus one from merch counter
function minus_merch(merch) {
  if (merchCounter <= 1) {
    return;
  }
  merchCounter -= 1;
  document.getElementById("merch_preview_amount").innerHTML = merchCounter;
  updatePurchasePrice(merch);
}
// buy merch
function buy_merch(merch) {
  if (merchCounter > merch.amountIntStock) {
    return;
  }
  merch.amountIntStock -= merchCounter;
  document
    .getElementById("merch_preview_info")
    .getElementsByTagName("td")[0].innerHTML = merch.amountIntStock;
  if (merchCounter > merch.amountIntStock) {
    merchCounter = merch.amountIntStock;
    document.getElementById("merch_preview_amount").innerHTML = merchCounter;
    updatePurchasePrice(merch);
  }
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
