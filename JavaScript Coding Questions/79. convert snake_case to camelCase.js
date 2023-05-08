/**
 * @param {string} str
 * @return {string}
 */
function snakeToCamel(str) {
  // your code here
  let strLen = str.length;
  let result = str[0];

  for (let i = 1; i < strLen; i++) {
    if (
      str[i] == '_' &&
      str[i + 1] &&
      str[i - 1] &&
      str[i + 1] !== '_' &&
      str[i - 1] !== '_'
    ) {
      let upperCase = str[i + 1].toUpperCase();
      result += upperCase;
      i++;
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(snakeToCamel('snake_case'));
// 'snakeCase'
console.log(snakeToCamel('is_flag_on'));
// 'isFlagOn'
console.log(snakeToCamel('is_IOS_or_Android'));
// 'isIOSOrAndroid'
console.log(snakeToCamel('_first_underscore'));
// '_firstUnderscore'
console.log(snakeToCamel('last_underscore_'));
// 'lastUnderscore_'
console.log(snakeToCamel('_double__underscore_'));
// '_double__underscore_'
