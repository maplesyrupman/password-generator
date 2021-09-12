const specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const specialCharsArr = specialChars.split('');
const letters = 'abcdefghijklmnopqrstuvwxyz';
const lettersArr = letters.split('');
const numbers = '1234567890';
const numbersArr = numbers.split('');

const lowerCaseCheckbox = document.querySelector('#lowerCase');
const upperCaseCheckbox = document.querySelector('#upperCase');
const numbersCheckBox = document.querySelector('#numbers');
const specialCheckbox = document.querySelector('#special');
const numberOfCharsField = document.querySelector('#numberOfChars');

const getRandomSpecial = () => {
  let specialIndex = Math.floor(Math.random() * specialCharsArr.length);
  return specialCharsArr[specialIndex];
}

const getRandomLower = () => {
  let letterIndex = Math.floor(Math.random() * letters.length);
  return letters[letterIndex];
}

const getRandomUpper = () => {
  return getRandomLower().toUpperCase();
}

const getRandomNumber = () => {
  let numberIndex = Math.floor(Math.random() * numbersArr.length);
  return numbersArr[numberIndex];
}

function getRandomCharIndex(numOfAvailableChars) {
  return Math.floor(Math.random() * numOfAvailableChars);
}

const getAvailableChars = () => {
  let availableChars = [];
  if (lowerCaseCheckbox.checked) {
    availableChars.push('lower');
  }
  if (upperCaseCheckbox.checked) {
    availableChars.push('upper');
  }
  if (numbersCheckBox.checked) {
    availableChars.push('number');
  }
  if (specialCheckbox.checked) {
    availableChars.push('special');
  }
  return availableChars;
}

const getRandomChar = (availableChars) => {
  let randomCharType = availableChars[getRandomCharIndex(availableChars.length)];

  switch (randomCharType) {
    case 'lower':
      return getRandomLower();
    case 'upper':
      return getRandomUpper();
    case 'number':
      return getRandomNumber();
    case 'special':
      return getRandomSpecial();
  }
}


const generatePassword = () => {
  if (!lowerCaseCheckbox && !upperCaseCheckbox && !specialCheckbox && !numbersCheckBox) {
    alert('Please select at least one character type');
    return false;
  }
  let numOfChars = numberOfCharsField.value;
  if (numOfChars > 128 || numOfChars < 8) {
    alert('Please select a number of characters between 8 and 128');
    numberOfCharsField.classList.add('highlighted');
    return false;
  }

  const availableChars = getAvailableChars();
  let passwordArr = [];
  for (let i = 0; i < numOfChars; i++) {
    passwordArr.push(getRandomChar(availableChars));
  }

  return passwordArr.join('');
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (!password) {
    return false;
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
