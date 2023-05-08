/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function elementBefore(arr, target) {
  // your code here
  let start = 0;
  end = arr.length - 1;
  let result = undefined;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] == target) {
      for (let i = mid - 1; i >= 0; i--) {
        if (arr[i] !== target) {
          result = arr[i];
          break;
        }
      }
      break;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return result;
}
