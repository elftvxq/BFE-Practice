/**
 * @param {number[]} arr
 */
function insertionSort(arr) {
  // your code here
  for (let i = 1; i < arr.length; i++) {
    let target = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[target] < arr[j]) {
        [arr[target], arr[j]] = [arr[j], arr[target]];
        target = j; // important
      }
    }
  }

  return arr;
}

let data = [8, 6, 10, 5, 3, 9, 2, 7, 4, 1];

console.log(insertionSort(data)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 平均時間複雜度為: O(n²)
