var myPassword = document.getElementById("psw");
var confirmPass = document.getElementById('psw2');
var checkBox = document.getElementById("check");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var special = document.getElementById("special");
var progBar = document.getElementById("progress");

// When the user clicks on the password field, show the message box
myPassword.onfocus = function () {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myPassword.onblur = function () {
    document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myPassword.onkeyup = function () {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myPassword.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myPassword.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (myPassword.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate special character
    var specials = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g;
    if (myPassword.value.match(specials)) {
        special.classList.remove("invalid");
        special.classList.add("valid");
    } else {
        special.classList.remove("valid");
        special.classList.add("invalid");
    }

    // Validate length
    if (myPassword.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}
function passwordStrength(pw) {
    return /.{8,}/.test(pw)  /* at least 8 characters */
        + /[a-z]/.test(pw)         /* a lower letter */
        + /[A-Z]/.test(pw)         /* a upper letter */
        + /\d/.test(pw)            /* a digit */
        + /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/.test(pw)  /* a special character */
    
}

myPassword.addEventListener('keyup', function () {
    progBar.style.width = (passwordStrength(myPassword.value) / 5 * 100) + "%";
    progBar.ariaValueNow = passwordStrength(myPassword.value);
    if (progBar.ariaValueNow < 2) {
        //color red
        progBar.style.backgroundColor = "rgb(160, 59, 59)";
    } else if (progBar.ariaValueNow < 4) {
        //color orange
        progBar.style.backgroundColor = "orange";
    } else if (progBar.ariaValueNow = 5) {
        //color green
        progBar.style.backgroundColor = "rgb(0, 128, 75)";
    }
        
})

function showPassword() {
    if (myPassword.type === "password") {
        myPassword.type = "text";
    } else {
        myPassword.type = "password";
    }
}


confirmPass.addEventListener('keyup', function() {
    if (myPassword.value == confirmPass.value) {
      document.getElementById('messageConfirmation').style.color = 'rgb(0, 128, 75)';
      document.getElementById('messageConfirmation').innerHTML = 'Match! &#10003;';
    } else {
      document.getElementById('messageConfirmation').style.color = 'rgb(160, 59, 59)';
      document.getElementById('messageConfirmation').innerHTML = 'No match! &#10008;';
    }
  })