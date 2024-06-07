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
