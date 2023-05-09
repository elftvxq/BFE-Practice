/**
 * @param {number[]} arr
 * @return {number}
 */
function largestDiff(arr) {
  if (arr.length < 2) return 0;
  // your code here
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
  }

  return Math.abs(min - max);
}
