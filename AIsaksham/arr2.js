function sumTwoArrays(arr1, arr2) {
  let totalSum = 0;
  for (let num of arr1) {
    totalSum += num;
  }
  for (let num of arr2) {
    totalSum += num;
  }
  return totalSum;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const result1 = sumTwoArrays(arr1, arr2);
console.log(result1);

function checkNonDecreasing(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
const arr3 = [1, 2, 3, 2];
const result2 = checkNonDecreasing(arr3);
console.log(result2);

const arr4 = [1, 2, 3, 3];
const result3 = checkNonDecreasing(arr4);
console.log(result3);

function evenCubeSum(arr) {
  let evenSum = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      evenSum += Math.pow(num, 3);
    }
  }
  return evenSum;
}

const arr5 = [1, 2, 3, 4];
const result4 = evenCubeSum(arr5);
console.log(result4);
