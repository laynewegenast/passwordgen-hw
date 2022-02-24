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

  var acceptUpperCase = confirm('Would you like uppercase characters in your password?');
  
  var acceptLowerCase = confirm('Would you like lowercase characters in your password?');

  var acceptSymbol = confirm('would you like to include symbols in your password?');

  var acceptNumber = confirm('Would you like to include numbers in your password?');
  if (!acceptUpperCase && !acceptLowerCase && !acceptSymbol && !acceptNumber) {
    return 'Please select at least one option!'
  }

  var password = ""
  var i = 0
  while(i < passwordLength){
    i++
    console.log(i)
    console.log(randomNumber())
    console.log(lowerCaseLetter())
    console.log(upperCaseLetter())
       if(acceptNumber){
         var num =randomNumber()
         password += num
         i++
       }
       if(acceptLowerCase && i < passwordLength-1){
         var low = lowerCaseLetter()
         i++
         password += low
       }
       if(acceptUpperCase && i < passwordLength-1){
         var upper = upperCaseLetter()
         i++
         password += upper
       }
       if(acceptSymbol && i < passwordLength-1){
         var sym = randomSymbol()
         i++
         password+=sym
       }
     

  }
console.log("Generate",password);
return password;

}