console.log("inside javascript");

var bool = true;
var sum = 0;
var sum1 = 0;
var sum2 = 0;
var sum3 = 0;
var str = "guest";
let guest_anywhere = document.getElementById("guest-anywhere");
var adult_num = document.getElementById("guest-button-adult-plus");
guest_anywhere.style.fontSize = "16px";
guest_anywhere.style.fontWeight = "400";
guest_anywhere.style.lineHeight = "normal";
guest_anywhere.style.color = "#4e5671";
function myfunction() {
  var a = document.getElementById("guest-input-id-js");

  if (bool == true) {
    a.style.display = "none";
    bool = false;
  } else {
    a.style.display = "block";
    bool = true;
  }
}

function myfunction_button_plus(value) {
  switch (value) {
    case "adult": {
      if (sum <= 15) {
        adult_num.innerText = ++sum + "+";
        guest_anywhere.value = sum + sum1 + " " + str;
      }
      break;
    }
    case "children": {
      console.log("children");
      var children_num = document.getElementById("guest-button-children-plus");
      if (sum1 <= 4) {
        children_num.innerText = ++sum1 + "+";
        guest_anywhere.value = sum + sum1 + " " + "guest";
      }
      break;
    }
    case "infants":
      {
        console.log("infants");
        var infants_num = document.getElementById("guest-button-infants-plus");
        if (sum2 <= 4) {
          infants_num.innerText = ++sum2 + "+";
          guest_anywhere.value = sum + " " + str + "," + sum2 + "infants";
        }
      }
      break;
    case "adult-minus": {
      adult_plus = document.getElementById("guest-button-adult-plus");
      if (sum >= 1) {
        adult_plus.innerText = --sum + " " + "+";
        guest_anywhere.value = sum + " " + "guest";
      }
      break;
    }

    case "children-minus": {
      var children_plus = document.getElementById("guest-button-children-plus");
      if (sum >= 1) {
        children_plus.innerText = --sum + " " + "+";
        guest_anywhere.value = sum + " " + "guest";
      }
      break;
    }
    case "infants-minus": {
      var infants_plus = document.getElementById("guest-button-infants-plus");
      if (sum2 >= 1) {
        infants_plus.innerText = --sum2 + " " + "+";
        guest_anywhere.value = sum + " " + str + "," + sum2 + "infants";
      }
      break;
    }
    case "anchor-clear": {
      sum = 0;
      sum1 = 0;
      sum2 = 0;
      adult_num.innerText = 0 + "+";
      children_num.value = 0 + "+";
      guest_anywhere.value = "Guest";
      infants_num.innerText = sum + "+";
      break;
    }
  }
}
// function myfunctionEnglish() {
//   // console.log("hi");
//   var english = document.getElementById("english-page");
//   english.style.display = "block";
// }

// function myfunctionEnglishCross() {
//   var englishcross = document.getElementById("english-page");
//   englishcross.style.display = "none";
// }
// function myfunctionINR() {
//   // console.log("hi");
//   var english = document.getElementById("INR-page");
//   english.style.display = "block";
// }
// function myfunctionINRCross() {
//   var englishcross = document.getElementById("INR-page");
//   englishcross.style.display = "none";
// }
