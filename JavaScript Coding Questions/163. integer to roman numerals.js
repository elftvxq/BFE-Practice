/**
 * @param {number} integer
 * @returns {string} str - roman numeral string
 */
function integerToRoman(num) {
  // your code here
  const symbolMap = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I',
  };

  let romanNumerals = '';

  let key = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  for (let i = 0; i < key.length; i++) {
    while (num >= key[i]) {
      romanNumerals += symbolMap[key[i]];
      num -= key[i];
    }
  }

  return romanNumerals;
}

console.log(integerToRoman(123));
// 'CXXIII'

integerToRoman(1999);
// 'MCMXCIX'

integerToRoman(3420);
// 'MMMCDXX'
