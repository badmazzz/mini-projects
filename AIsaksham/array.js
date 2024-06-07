function calculateSum(array) {
  return array.reduce((sum, element) => sum + element, 0);
}

function findMaxElement(array) {
  return Math.max(...array);
}

function filterEvenNumbers(array) {
  return array.filter((number) => number % 2 === 0);
}

function reverseArray(array) {
  return array.reverse();
}

function removeDuplicates(array) {
  return [...new Set(array)];
}

function findElementIndex(array, element) {
  const index = array.indexOf(element);
  return index !== -1 ? index : -1;
}

const numbers = [1, 2, 3, 4, 5, 2, 4, 6];

console.log(calculateSum(numbers));
console.log(findMaxElement(numbers));
console.log(filterEvenNumbers(numbers));
console.log(reverseArray(numbers));
console.log(removeDuplicates(numbers));
console.log(findElementIndex(numbers, 4));
