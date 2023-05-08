// 接收兩個參數，callback 跟 initialValue
// callback function 接收四個參數：accumulator, currentValue, index, arr
// initialValue: 1) 假如是空陣列並且沒有給初始值，必須拋出錯誤，因為沒辦法將第一個元素設為 initialValue 並作為accumulator
// 2) 假如沒有給初始值，第一個元素將會作為 accumulator，並且跳過第一次 loop (index 從 1 開始)

Array.prototype.myReduce = function (callback, initialValue) {
  // your code here
  let arr = this;
  let argumentLen = arguments.length;

  if (arr.length === 0 && argumentLen === 1) {
    throw new Error('this is empty array');
  }

  let accumulator = argumentLen === 1 ? arr[0] : initialValue;
  let index = argumentLen === 1 ? 1 : 0;

  for (let i = index; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }

  return accumulator;
};

// Q1:  為什麼 arguments.length 為 1 時是空陣列？

/**
當你呼叫 myReduce 方法時，你傳遞給它的第一個參數是 callback 函數。因此，當你沒有提供初始值 initialValue 時，myReduce 方法會將 callback 函數作為它的第一個參數，arguments.length 會等於 1。當你提供了初始值時，arguments.length 會等於 2，因為你傳遞了兩個參數。

在這個特定的程式碼中，作者想要處理的是當陣列是空的時候沒有提供初始值的情況。在這種情況下，arguments.length 等於 1，因為只有 callback 函數被傳遞進來了。作者使用這個信息來檢查陣列是否為空，如果是空的且沒有提供初始值，就拋出一個錯誤。

總之，當陣列是空的時候沒有提供初始值時，arguments.length 等於 1，因為只有 callback 函數被傳遞進來了。
 * 
 */

//Q2: 那函數當中的  this 指的是什麼?

/**
 * 在這個特定的程式碼中，`this` 指的是呼叫 `myReduce` 方法的陣列本身，也就是在 `myReduce` 方法上執行的那個陣列。

當你使用點運算符或方括號運算符調用 `myReduce` 方法時，JavaScript 會將呼叫 `myReduce` 方法的陣列存儲在 `this` 關鍵字中，因此你可以在 `myReduce` 方法中使用 `this` 來引用該陣列。

在 `myReduce` 方法中，使用 `let arr = this;` 將 `this` 賦值給 `arr`，這樣就可以在 `myReduce` 方法的其他地方使用 `arr` 來引用呼叫 `myReduce` 方法的陣列。

總之，`this` 在這個特定的程式碼中指的是呼叫 `myReduce` 方法的陣列本身，也就是在 `myReduce` 方法上執行的那個陣列。
 */
