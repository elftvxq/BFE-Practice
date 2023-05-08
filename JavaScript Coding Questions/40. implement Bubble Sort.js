/**
 * @param {number[]} arr
 */
function bubbleSort(arr) {
  // your code here
  let len = arr.length;

  while (len > 1) {
    len--;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }

  return arr;
}

// 平均時間複雜度為: O(n²)
