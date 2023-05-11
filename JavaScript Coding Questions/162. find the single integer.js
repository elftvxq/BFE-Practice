/**
 * @param {number[]} arr
 * @returns number
 */
function findSingle(arr) {
  // your code here
  let map = new Map();

  for (let i in arr) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1;
    } else {
      delete map[arr[i]];
    }
  }

  let value = Number(Object.keys(map)[0]);
  return value;
}

const arr = [10, 2, 2, 1, 0, 0, 10];
findSingle(arr); // 1
