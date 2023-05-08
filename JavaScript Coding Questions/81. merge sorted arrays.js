/**
 * @param {number[][]} arrList
 * non-descending integer array
 * @return {number[]}
 */

function mergeTwoLists(arr1, arr2) {
  let [i, j] = [0, 0];
  let result = [];

  while (i < arr1.length || j < arr2.length) {
    if (i >= arr1.length || arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }
  return result;
}

function merge(arrList) {
  // your code here
  if (arrList.length === 0) return [];
  if (arrList.length === 1) return arrList[0];
  if (arrList.length === 2) return mergeTwoLists(arrList[0], arrList[1]);

  let mid = Math.floor(arrList.length / 2);
  let left = merge(arrList.slice(0, mid));
  let right = merge(arrList.slice(mid, arrList.length));
  return mergeTwoLists(left, right);
}

let arr = [
  [1, 1, 1, 100, 1000, 10000],
  [1, 2, 2, 2, 200, 200, 1000],
  [1000000, 10000001],
  [2, 3, 3],
];

merge(arr);
