/** solution1: two pointer */

/**
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @returns {any[]}
 */
function getIntersection(arr1, arr2) {
  // your code here
  const sortedArr1 = arr1.sort((a, b) => a - b);
  const sortedArr2 = arr2.sort((a, b) => a - b);

  let result = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < sortedArr1.length && p2 < sortedArr2.length) {
    if (sortedArr1[p1] === sortedArr2[p2]) {
      result.push(sortedArr1[p1]);
      p1++;
      p2++;
    } else {
      if (sortedArr1[p1] < sortedArr2[p2]) {
        p1++;
      } else {
        p2++;
      }
    }
  }
  return result;
}

getIntersection([1, 2, 3], [3, 2, 1]);
getIntersection([], [3, 2, 1]);

getIntersection(
  [1, 100, 200, 8, 8, 8, 3, 6, 100, 10, 10],
  [8, 7, 7, 50, 50, 1, 1, 1, 1, 3, 3]
);
getIntersection(
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 3, 3, 3, 3, 3, , 2, 2, 2],
  [2]
);

/** solution2: set */

/**
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @returns {any[]}
 */
function getIntersection(arr1, arr2) {
  // your code here
  const set1 = new Set(arr1);
  const resultSet = new Set();

  for (let num of arr2) {
    if (set1.has(num)) {
      resultSet.add(num);
    }
  }

  return [...resultSet];
}
