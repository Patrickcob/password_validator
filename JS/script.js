var myPassword = document.getElementById("psw");
var confirmPass = document.getElementById('psw2');
var checkBox = document.getElementById("check");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var special = document.getElementById("special");
var progBar = document.getElementById("progress");

//regex
var lengthRegex = new RegExp("^[ -ÿ]{8,80}$");
var numberRegex = new RegExp("[0-9]");
var lowerCaseRegex = new RegExp("[a-z]");
var upperCaseRegex = new RegExp("[A-Z]");
var specialRegex = new RegExp("[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]");

// When the user starts to type something inside the password field
myPassword.onkeyup = function () {
    // Validate lowercase letters
    if (myPassword.value.match(lowerCaseRegex)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    if (myPassword.value.match(upperCaseRegex)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    if (myPassword.value.match(numberRegex)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate special character
    if (myPassword.value.match(specialRegex)) {
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
    return lengthRegex.test(pw)  /* at least 8 characters */
        + lowerCaseRegex.test(pw)         /* a lower letter */
        + upperCaseRegex.test(pw)         /* a upper letter */
        + numberRegex.test(pw)            /* a digit */
        + specialRegex.test(pw)  /* a special character */

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

// Function that is binded to the checkBox, make possible to see password
function showPassword() {
    if (myPassword.type === "password") {
        myPassword.type = "text";
    } else {
        myPassword.type = "password";
    }
}

function confirm() {
    if (myPassword.value == confirmPass.value) {
        document.getElementById('messageConfirmation').style.color = 'rgb(0, 128, 75)';
        document.getElementById('messageConfirmation').innerHTML = 'Match! &#10003;';
        return true;
    } else {
        document.getElementById('messageConfirmation').style.color = 'rgb(160, 59, 59)';
        document.getElementById('messageConfirmation').innerHTML = 'No match! &#10008;';
        return false;
    }
}
