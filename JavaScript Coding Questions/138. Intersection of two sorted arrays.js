/**
 * @param {number[]} arr1 - integers
 * @param {number[]} arr2 - integers
 * @returns {number[]}
 */
function intersect(arr1, arr2) {
  // your code here
  let p1 = 0,
    p2 = 0;
  let result = [];

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      result.push(arr1[p1]);
      p1++;
      p2++;
    } else {
      if (arr1[p1] < arr2[p2]) {
        p1++;
      } else {
        p1++;
      }
    }
  }

  return result;
}

const a = intersect([1, 2, 2, 3, 4, 4], [2, 2, 4, 5, 5, 6, 2000]);

console.log(
  a,
  '🚀 ~ file: 138. Intersection of two sorted arrays.js:31 ~ intersect([1, 2, 2, 3, 4, 4], [2, 2, 4, 5, 5, 6, 2000]'
);
