// Users for logging in
const users = [
  ["Jarkko123", "greatpass"],
  ["Pekka123", "strongpass"]
];

// show log in form and set onclick to hide it
function showLogIn() {
  document.getElementById("log_in").style.display = "block";
  document.getElementById("log_in_option").onclick = function () {
    hideLogIn(false);
  };
  document.getElementById("log_in_option").style.backgroundImage = "url('images/hide.png')";
}

// hide log in form
function hideLogIn(loggedIn) {
  document.getElementById("log_in").style.display = "none";
  
  // if not logged in, set the login option buttons onclick to show log in form
  if (!loggedIn) {
    document.getElementById("log_in_option").onclick = function () {
      showLogIn();
    };
	document.getElementById("log_in_option").style.backgroundImage = "url('images/show.png')";
  }
  
  // else set the login option buttons onclick to log out
  else {
    document.getElementById("log_in_option").onclick = function () {
      logOut();
    };
	document.getElementById("log_in_option").style.backgroundImage = "url('images/logout.png')";
  }
}

// log in
function logIn() {
	
	// see if the user exists and validate password
  var userName = document.getElementById("username").value;
  var passWord = document.getElementById("password").value;
  var i;
  for (i = 0; i < users.length; i++) {
	  
	  // if user and password are correct, show blog form and reset log in form
    if (users[i][0] == userName && users[i][1] == passWord) {
      document.getElementById("blog_form").style.display = "block";
      hideLogIn(true);
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    }
	
	// else give a response telling that the login information is wrong
	else {
		document.getElementById("login_response").innerHTML = "Username or password incorrect";
	}
  }
}

// log out
function logOut() {
	
	// hide blog form, reset login response and change login option button onclick
	// to show log in
  document.getElementById("blog_form").style.display = "none";
  document.getElementById("login_response").innerHTML = "";
  document.getElementById("log_in_option").onclick = function () {
    showLogIn();
  };
  document.getElementById("log_in_option").style.backgroundImage = "url('images/show.png')";
}

// writes a blog from the blog form
function createBlog() {
	
	// split the value into an array of words
  var words = document.getElementById("content").value.split(" ");
  
  // title and author:
  var title = "<h2>" + document.getElementById("title").value + "</h2>";
  var by =
    "<h4>By: " +
    document.getElementById("fname").value +
    " " +
    document.getElementById("lname").value +
    "</h4>";
	
	// this loop builds the content for blog and splits it with <br> after
	// a word if the length of the line is more than 60 chars
  var i;
  var contentString = "<p>";
  var previousLength = 0;
  for (i = 0; i < words.length; i++) {
    contentString += " " + words[i];
	/* splitting the texts in js is not needed currently
    if (contentString.length - previousLength > 60) {
      previousLength = contentString.length;
      contentString += "<br>";
    }
	*/
  }
  contentString += "</p>";
  
  // build the blog div
  var toWrite = "<div class='blog'>" + title + by + contentString + "</div>";
  
  // add the blog to the HTML
  document.getElementById("blogs").innerHTML += toWrite;
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}
