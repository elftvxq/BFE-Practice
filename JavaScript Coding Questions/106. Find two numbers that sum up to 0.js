/**
 * @param {number[]} arr
 * @return {number[]}
 */
function findTwo(arr) {
  // your code here
  let charIndexMap = new Map();
  let result = [];

  for (let i in arr) {
    charIndexMap.set(arr[i], i);
  }

  for (let i in arr) {
    if (charIndexMap.has(-arr[i])) {
      result.push(i, charIndexMap.get(-arr[i]));
    }
  }

  return result.length === 0 ? null : result;
}
