/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function lastIndex(arr, target) {
  // your code here
  let start = 0;
  end = arr.length - 1;
  let result = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] == target) {
      result = mid;
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return result;
}
