var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyx"
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialChar = "!@#$%^&*()-_[{]};:~',.><?/`"
var numberChat = "0123456789"
var passwordLength;





function determineLenght()
passwordLength = prompt("Choose how many characters you would like in password")

if (passwordLength<8){
alert ("password length must be between 8-128 characters");
determineLenght();
} else if ("passwordLength>128"){

}
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}else if (isNaN(passwordLength)){
  alert("Password length must be a number between 8-128 characters");
  determineLength();
}else{
alert("The next three screens will ask you what types of characters you would like to be included in your password.\nIf you choose 'No' for all, your password will only contain lowercase letters.");
}
return passwordLength;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
