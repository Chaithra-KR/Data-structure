const arr = [1,2,3,4,5];

let target = 4;

function binary(arr, target) {
  // if (arr.length <= 1) return arr;
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) {
      return true;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}
console.log(binary(arr, target));
