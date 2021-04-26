const users = [
  ["Jarkko123", "greatpass"],
  ["Pekka123", "strongpass"]
];

function showLogIn() {
  document.getElementById("log_in").style.display = "block";
  document.getElementById("log_in_option").onclick = function () {
    hideLogIn(false);
  };
  document.getElementById("log_in_option").style.backgroundImage = "url('images/hide.png')";
}
function hideLogIn(loggedIn) {
  document.getElementById("log_in").style.display = "none";
  if (!loggedIn) {
    document.getElementById("log_in_option").onclick = function () {
      showLogIn();
    };
	document.getElementById("log_in_option").style.backgroundImage = "url('images/show.png')";
  } else {
    document.getElementById("log_in_option").onclick = function () {
      logOut();
    };
	document.getElementById("log_in_option").style.backgroundImage = "url('images/logout.png')";
  }
}
function logIn() {
  var userName = document.getElementById("username").value;
  var passWord = document.getElementById("password").value;
  var i;
  for (i = 0; i < users.length; i++) {
    if (users[i][0] == userName && users[i][1] == passWord) {
      document.getElementById("blog_form").style.display = "block";
      hideLogIn(true);
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    }
	else {
		document.getElementById("login_response").innerHTML = "Username or password incorrect";
	}
  }
}
function logOut() {
  document.getElementById("blog_form").style.display = "none";
  document.getElementById("log_in_option").onclick = function () {
    showLogIn();
  };
  document.getElementById("log_in_option").style.backgroundImage = "url('images/show.png')";
}
function createBlog() {
  var words = document.getElementById("content").value.split(" ");
  var title = "<h2>" + document.getElementById("title").value + "</h2>";
  var by =
    "<h4>By: " +
    document.getElementById("fname").value +
    " " +
    document.getElementById("lname").value +
    "</h4>";
  var i;
  var contentString = "<p>";
  var previousLength = 0;
  for (i = 0; i < words.length; i++) {
    contentString += " " + words[i];
    if (contentString.length - previousLength > 60) {
      previousLength = contentString.length;
      contentString += "<br>";
    }
  }
  contentString += "</p>";
  console.log(contentString);

  var toWrite = "<div class='blog'>" + title + by + contentString + "</div>";
  document.getElementById("blogs").innerHTML += toWrite;

  document.getElementById;
}
