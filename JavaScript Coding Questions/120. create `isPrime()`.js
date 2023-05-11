// 質數的意思
/**
 * @param {number} num - positive integer
 */
function isPrime(num) {
  // your code here
  // 1, 2, 3, 5, 7, 11, 13, 17
  if (num <= 1) return false;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
