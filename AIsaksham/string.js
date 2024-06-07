function calculateLength(inputString) {
  return inputString.length;
}

function concatenateStrings(str1, str2) {
  return str1 + str2;
}

function reverseString(inputString) {
  return inputString.split("").reverse().join("");
}

function countVowels(inputString) {
  const vowels = "aeiouAEIOU";
  return Array.from(inputString).filter((char) => vowels.includes(char)).length;
}

function capitalizeFirstLetter(inputString) {
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

function isPalindrome(inputString) {
  return inputString === inputString.split("").reverse().join("");
}

function countOccurrences(inputString, char) {
  return inputString.split(char).length - 1;
}

function removeDuplicates(inputString) {
  return [...new Set(inputString.split(""))].join("");
}

function isSubstringPresent(mainString, substring) {
  return mainString.includes(substring);
}

function replaceCharacter(inputString, oldChar, newChar) {
  return inputString.split(oldChar).join(newChar);
}

const stringExample = "hello world";
const substringExample = "lo";
console.log(calculateLength(stringExample));
console.log(concatenateStrings("Hello", " World!"));
console.log(reverseString(stringExample));
console.log(countVowels(stringExample));
console.log(capitalizeFirstLetter(stringExample));
console.log(isPalindrome("madam"));
console.log(countOccurrences(stringExample, "l"));
console.log(removeDuplicates(stringExample));
console.log(isSubstringPresent(stringExample, substringExample));
console.log(replaceCharacter(stringExample, "o", "x"));
