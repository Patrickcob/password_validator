# Demo project for password validator

## Installation

No installation needed

## Requirements
This project use Bootstrap 5 for visual, but can be adapted to any needs.

## Setup
You will need to setup a local server to make `Javascript` work.

## Basic example

If you need to add more options to check the client password. The example below show you a validation script for lowercase, just add to the anonymous function on the `keyup` event more verification as needed (specific patterns).

`script.js`
```js
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
}
```

Add the `id` in this list to modify/add restrictions to your password checker.

`index.html`
```html
<div class="row shadow-lg" style="margin: auto; width: 50%; padding: 10px;" id="message">
    <h5>Password must contain the following:</h5>
    <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
    <p id="special" class="invalid">A <b>special</b> character</p>
    <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
    <p id="number" class="invalid">A <b>number</b></p>
    <p id="length" class="invalid">Minimum <b>8 characters</b></p>
</div>
```

## License
[Apache 2.0](LICENSE)
