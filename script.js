// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var numArray = ["0","1","2","3","4","5","6","7","8","9"]

var specArray =["!","@","#","$","%","&","*","+","~"]



function generatePassword() {
  var charArray = []
  var randomArr = []
  var passLength = prompt("How long would you like your password to be? Select between 8-128 characters!") 
    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
      alert("Please choose a number between 8-128 characters!")
      console.log(passLength)
      generatePassword();

    } else {
      console.log(passLength);
      charSelect();
    }
    
  function charSelect() {
  var upperCase = confirm("Would you like to use uppercase letters?") 
    if (upperCase === true) {
      charArray.push(...upperArray)
      console.log(upperCase)
      
    }

  var lowerCase = confirm("Would you like to use lowercase letters?")
    if (lowerCase === true) {
      charArray.push(...lowerArray)
      console.log(charArray)
    }

  var numeric = confirm("Would you like to use numbers?")
    if (numeric === true) {
      charArray.push(...numArray)
      console.log(charArray)
    }

  var specChar = confirm("Would you like to use special characters?")
    if(specChar === true) {
      charArray.push(...specArray)
      console.log(charArray)
    }

  if (upperCase === false && lowerCase === false && numeric === false && specChar === false) {
    alert("Please select a option for your password")
    charSelect();
  }
 }

 for (var  i = 0; i < passLength; i++) {
   var randPw = charArray[Math.floor(Math.random() * charArray.length)]
   randomArr.push(randPw)
   console.log(randPw)
 }
 var randomPass = randomArr.toString().split(",").join("")
 return randomPass
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
