Array.prototype.myMap = function (callback, thisObj) {
  // for receive the answer
  let result = [];
  let len = this.length;

  for (let i = 0; i < len; i++) {
    // this step is important, if no, it would cause infinit loop
    if (i in this) {
      // return the result to the array
      // 第一個參數 thisObj 是指定 callback 中 this 的值。
      // 使用 call 方法調用 callback 函數時，第一個參數 thisObj 會將 this 的值設定為指定的對象。這樣可以讓你在 callback 函數中使用 this 時，可以確保它是指向你指定的對象。
      // 在這裡，透過將 thisObj 傳遞給 call 方法，可以讓 callback 函數中的 this 指向指定的對象。這樣可以讓你在 callback 函數中使用指定對象上的屬性和方法，而不會混淆 this 的值。
      // 總之，thisObj 參數是用來確保在 callback 函數中使用 this 時，它指向指定的對象，而不是全局對象或其他的對象。
      result[i] = callback.call(thisObj, this[i], i, this);
    }
  }

  return result;
};

const a = [2, 3, 4].myMap((num) => num * 2);
console.log('🚀 ~ file: 151. implement Array.prototype.map().js:18 ~ a:', a);
