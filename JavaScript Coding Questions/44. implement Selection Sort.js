/**
 * @param {number[]} arr
 */
function selectionSort(arr) {
  // your code here
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        //記憶最小值的位置
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr;
}

let data = [8, 6, 1, 10, 5, 3, 9, 2, 7, 5];
console.log(SelectionSort(data)); //[1, 2, 3, 5, 5, 6, 7, 8, 9, 10]
