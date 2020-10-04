
// Naming the password generate button  
var generateBtn = document.querySelector("#generate");

var passwordDisplay = document.querySelector("#password");
//list of password characters
var upperLetters= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialCharaters = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];
var NumericCharaters = [0,1,2,3,4,5,6,7,8,9];


//Accepted password criteria
function passwordCriteria{

    // Allowing users to enter number of prefrerred characters and caution about minimum characters 
    var passwordLength = parseInt(prompt("How many characters do you prefer?, NB: Password must be minimum of 8 characters"));
}

if (passwordLength < 8) {
    alert('The password must be at least 8 characters!');
}
if (passwordLength > 128) {
    alert('The password must be less than 128 characters!');
}

//prompt user for lowercase characters
var lowercase = prompt("Do you want to include lowercase characters?");

//prompt user for uppercase characters
var uppercase = prompt("Do you want to include uppercase characters?");

//prompt user for numeric characters
var numbers = prompt("Do you want to include numbers?");

//prompt user for special characters
var specialCharacters = prompt("Do you want to include special characters?");

if (!owercase && !uppercase && !numbers && !specialCharacters) {
    alert("Your password must contain at least one lowerscase, uppercase, number and a special character");
}

var criteriaQuestions = {
    lengthOfPassword: passwordLength,
    smallLetters: lowercase,
    capitalLetters: uppercase,
    numericCharaters: numbers,
    exceptionalCharacters: specialCharacters
}

return criteriaQuestions;

}


//how the generateBtn should function
function generatePassword{
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

