/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function firstIndex(arr, target) {
  // your code here
  let start = 0;
  end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (target == arr[mid]) {
      if (arr[mid - 1] !== target) {
        return mid;
      }
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}
