/**
 * @param {number} n - non-negative integer
 * @return {number}
 */

const cache = {};

function fib(n) {
  // your code here
  if (n < 2) return n;

  if (cache[n]) {
    return cache[n];
  } else {
    cache[n] = fib(n - 1) + fib(n - 2);
  }
  return cache[n];
}
