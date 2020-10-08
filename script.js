
// Naming the password generate button  
var generateBtn = document.querySelector("#generate");

var passwordText = document.querySelector("#password");

//list of password characters
var upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCharaters = ['#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '['];
var numericCharaters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


//Accepted password criteria
function passwordCriteria() {

    // setting minimum and maximum character length and caution about minimum characters 
    var passwordLength = parseInt(prompt("How many characters do you prefer?, NB: Password must be minimum of 8 characters"));

    /*the length is validated once the user does not receive alerts
    NB: User receives alert once charater length do not match */

    if (passwordLength < 8) {
        alert('The password must be at least 8 characters!');
    }
    if (passwordLength > 128) {
        alert('The password must be less than 128 characters!');
    }

    //Ask user to confirm characters in order of lowercase, uppercase, numbers and special characters
    var confirmLowercase = confirm("Do you want to include lowercase characters?");

    var confirmUppercase = confirm("Do you want to include uppercase characters?");

    var confirmNumbers = confirm("Do you want to include numbers?");

    var confirmSpecialCharacters = confirm("Do you want to include special characters?");

    //Alert user that passsword is invalid
    if (!confirmLowercase && !confirmUppercase && !confirmNumbers && !confirmSpecialCharacters) {
        alert("Your password must contain at least one lowerscase, uppercase, number and a special character");
    }

    var criteriaQuestions = {
        lengthOfPassword: passwordLength,
        smallLetters: confirmLowercase,
        capitalLetters: confirmUppercase,
        numeric: confirmNumbers,
        exceptionalCharacters: confirmSpecialCharacters
    }

    return criteriaQuestions

}


//how the generateBtn should function
function generatePassword() {

    var options = passwordCriteria();
    console.log(options)

    var passwordStream = [];
    console.log(passwordStream)

    if (options.exceptionalCharacters) {
        for (i = 0; i < specialCharaters.length; ++i) {
            passwordStream.push(specialCharaters[i]);
        }
        console.log(passwordStream)
    }
    if (options.numeric) {
        for (i = 0; i < numericCharaters.length; ++i) {
            passwordStream.push(numericCharaters[i]);
        }
        console.log(passwordStream)
    }
    if (options.smallLetters) {
        for (i = 0; i < lowerLetters.length; ++i) {
            passwordStream.push(lowerLetters[i]);
        }
        console.log(passwordStream)
    }
    if (options.capitalLetters) {
        for (i = 0; i < upperLetters.length; ++i) {
            passwordStream.push(upperLetters[i]);
        }
        console.log(passwordStream)
    }

    debugger
    var finalPassword = [];

    for (let i = 0; i < options.lengthOfPassword; ++i) {

        /*var silly= passwordStream.length;
        var passLenFloor= Math.floor(silly);
        var rand = Math.random();
        var randomSelector = Math.floor(rand * passLenFloor);*/
        var randomSelector = Math.floor(Math.random() * Math.floor(passwordStream.length));
        finalPassword.push(passwordStream[randomSelector])
    }

    console.log(finalPassword)

    var superFinal = finalPassword.join('');
    console.log(superFinal)

    passwordText.textContent = superFinal;

}

var password = "";

generateBtn.addEventListener('click', generatePassword);



