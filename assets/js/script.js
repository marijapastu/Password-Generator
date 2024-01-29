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

  // validating password length inputted by the user

    var passwordLen = parseInt(prompt("Please enter the length of your password which shouls be from 8 to 128 characters"))
    while (passwordLen < 8 || passwordLen > 128) {
      alert("Your password length is outside of allowed legth range ");
      var passwordLen = parseInt(prompt("Please enter the length of your password from 8 to 128 characters"));
    }
    

   
      var specialChar = confirm("Would like to include special characters in your password")
      var numericChar = confirm("Would like to include numeric characters in your password");            
      var upperCasedChar = confirm("Would like to include upper case characters in your password");        
      var lowerCasedChar = confirm("Would like to include numeric characters in your password");        
                
 
  return [passwordLen,specialChar,numericChar,upperCasedChar,lowerCasedChar];
      

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

  if  (!userChoice[1] && !userChoice[2] && !userChoice[3] && !userChoice[4]) {
    alert("You have to select at least one type of character set");
  } else {

        if (userChoice[1]) {
        newArr = newArr.concat(specialCharacters);
      }

        if (userChoice[2]) {
          newArr = newArr.concat(numericCharacters);
        }

        if (userChoice[3]) {
          newArr = newArr.concat(upperCasedCharacters);
        }

        if (userChoice[4]) {
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
// generatePassword();

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

