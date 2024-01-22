// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = 
  ['a', 
  'b', 
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  
  var passwordLen = parseInt(prompt("Please enter the length of your password from 8 to 128 characters"));

  // validating password length inputted by the user

    if (passwordLen < 8 || passwordLen > 128 || passwordLen === "" || isNaN(passwordLen) ) {
      alert("The password legth is outside of allowed range, please try again");

    // validating user input - set of characters choice

    } else { 
      var specialChar = prompt("Please type 'Yes/No' if you would like to include special characters in your password");      
        if (specialChar !== "Yes" && specialChar !== "No") {
          alert("Please type 'Yes/No'");

        } else { 
            var numericChar = prompt("Please type 'Yes/No' if you would like to include numeric characters in your password");            
            if (numericChar !== "Yes" && numericChar !== "No") {
              alert("Please type 'Yes/No'");

            } else {       
              var upperCasedChar = prompt("Please type 'Yes/No' if you would like to include upper case characters in your password");             
              if (upperCasedChar !== "Yes" && upperCasedChar !== "No") {
                alert("Please type 'Yes/No'");

              } else {
                var lowerCasedChar = prompt("Please type 'Yes/No' if you would like to include lower case characters in your password");                
                    if (lowerCasedChar !== "Yes" && lowerCasedChar !== "No") {
                    alert("Please type 'Yes/No'");
                  } 
                }
                
            }

      }
      
      return [passwordLen,specialChar,numericChar,upperCasedChar,lowerCasedChar];
      
    }
}


// Function for getting a random element from an array

function getRandom(arr){
  
    var random = arr[Math.floor(Math.random() * arr.length)];
    console.log(random);
    return random;

}


// Function to generate password with user input

function generatePassword() {

  var userChoice = getPasswordOptions();
  var newArr = [];
  console.log(userChoice);

  // validation that user selected at least one character set type

  if  (userChoice[1] == "No" && userChoice[2] == "No" && userChoice[3] == "No" && userChoice[4] == "No") {
    alert("You have to select at least one type of character set");
  } else {

        if (userChoice[1] == "Yes") {
        newArr = newArr.concat(specialCharacters);
      }

        if (userChoice[2] == "Yes") {
          newArr = newArr.concat(numericCharacters);
        }

        if (userChoice[3] == "Yes") {
          newArr = newArr.concat(upperCasedCharacters);
        }

        if (userChoice[4] == "Yes") {
          newArr = newArr.concat(lowerCasedCharacters);
        }

        // password generation
    
        password = "";
        
        for (let i = 0; i < userChoice[0]; i++) {
          var randomLetter = getRandom(newArr);
          password +=  randomLetter;
        }
        
        return password;

  }
  

};
generatePassword();

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

