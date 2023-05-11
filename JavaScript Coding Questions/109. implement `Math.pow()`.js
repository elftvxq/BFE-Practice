/**
 * @param {number} base
 * @param {number} power - integer
 * @return {number}
 */
function pow(base, power) {
  // your code here
  let num = base,
    times = power;

  return num ** power;
}

console.log(pow(1, 2));
console.log(pow(2, 10));
console.log(pow(4, -1));
// 1
// 1024
// 0.25
