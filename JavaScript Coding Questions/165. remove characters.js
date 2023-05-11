/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
  // your code here
  let stack = [];

  for (let i = 0; i < input.length; i++) {
    if (
      stack.length !== 0 &&
      input[i] === 'c' &&
      stack[stack.length - 1] === 'a'
    ) {
      stack.pop();
    } else if (input[i] !== 'b') {
      stack.push(input[i]);
    }
  }

  return stack.join('');
}

removeChars('ab'); // 'a'
removeChars('abc'); // ''
removeChars('cabbaabcca'); // 'caa'
