
function toggleTheme() {
  const body = document.body;
  const theme = body.classList.contains('light') ? 'dark' : 'light';

  body.classList.remove('light', 'dark');
  body.classList.add(theme);
}

window.onscroll = function() {myFunction()};
  
  var header = document.getElementById("mynavbar");
  var sticky = header.offsetTop;
  var remo = document.getElementById("mydis");
  
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      header.style.backgroundColor = "rgb(2, 2, 61)";
      header.style.transition = "2s";
      header.style.border = "3px solid black";
    } else {
      header.classList.remove("sticky");
      header.style.backgroundColor = "black";
      header.style.border = "3px solid rgb(2, 2, 61)";
      header.style.transition = "2s";
    }
    
    remo.style.zIndex = "1";
    header.style.zIndex = "2";
  }



  var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

window.onclick = function(event) {
  if (event.target == dropdown) {
    dropdown.style.display = "none";
  }
}


var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');
var card = document.getElementById('contact');


window.onclick = function(event) {
    if (event.target === modal || event.target === modal2) {
        modal.style.display = "none";
        modal2.style.display = "none";   
    }
}


var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");


myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}


myInput.onkeyup = function() {

  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  

  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }


  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  

  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

function validatePasswords()  {
  const pass1 = document.getElementById('psw2').value;
  const pass2 = document.getElementById('psw-repeat').value;

  if (pass1 !== pass2)  {
    alert("Passwords do not match.Please try again.");
    return false;
  }
    return true;
}






  


 

  