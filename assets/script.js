// Assignment code here
function lowerCaseLetter() {
  const lowercase = 'abcdefjhijklmnopqrstuvwxyz';
  return lowercase[Math.floor(Math.random() * lowercase.length)];
}

function upperCaseLetter() {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return uppercase[Math.floor(Math.random() * uppercase.length)];
}

function randomNumber() {
  const number = '0123456789';
  return number[Math.floor(Math.random() * number.length)];
}


function randomSymbol () {
  const symbol = '!@#.?$%&'
  return symbol[Math.floor(Math.random() * symbol.length)];
}

function passwordLength(min,max) {
  Math.floor(Math.random() * 128) + 8;
  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = parseInt (prompt('Please eneter a valid password length'));
  if ( passwordLength < 8 || passwordLength > 128 || isNaN (passwordLength)) {
    return 'Please eneter password length between 8 and 128 characters'
  }
}