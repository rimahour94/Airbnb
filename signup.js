function myfunctionEnglish() {
  // console.log("hi");
  var english = document.getElementById("english-page");
  this.myfunctionCrossHelp();
  this.myfunctionGuestCross();
  english.style.display = "block";
}

function myfunctionEnglishCross() {
  var englishcross = document.getElementById("english-page");
  englishcross.style.display = "none";
}
function myfunctionINR() {
  // console.log("hi");
  var english = document.getElementById("INR-page");
  this.myfunctionCrossHelp();
  this.myfunctionGuestCross();
  english.style.display = "block";
}
function myfunctionINRCross() {
  var englishcross = document.getElementById("INR-page");
  englishcross.style.display = "none";
}

function myfunctionSignUp() {
  var signup = document.getElementById("signup-id");
  this.myfunctionLoginCross();
  this.myfunctionCrossHelp();
  this.myfunctionINRCross();
  this.myfunctionEnglishCross();
  this.myfunctionINRCross();
  this.myfunctionGuestCross();
  signup.style.display = "block";
}
function myfunctionSignUpCross() {
  var signup = document.getElementById("signup-id");
  signup.style.display = "none";
}
function myfunctionGuestCross() {
  var a = document.getElementById("guest-input-id-js");
  a.style.display = "none";
}

function myfunctionLogIn() {
  var login = document.getElementById("login-id");
  this.myfunctionSignUpCross();
  this.myfunctionINRCross();
  this.myfunctionEnglishCross();
  this.myfunctionGuestCross();
  login.style.display = "block";
}
function myfunctionLoginCross() {
  var login = document.getElementById("login-id");
  login.style.display = "none";
}
function myfunctionHelp() {
  var help = document.getElementById("help-id");
  this.myfunctionSignUpCross();
  this.myfunctionLoginCross();
  this.myfunctionINRCross();
  this.myfunctionEnglishCross();
  this.myfunctionGuestCross();
  help.style.display = "block";
}
function myfunctionCrossHelp() {
  var help = document.getElementById("help-id");
  help.style.display = "none";
}
