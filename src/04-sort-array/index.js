/**
 * LEVEL 1: Implement using Array.prototype.sort method and NPM packages (e.g.: check-types)
 *   - REQUIRED
 * LEVEL 2: Implement without using Array.prototype.sort method or libraries, without regard to efficiency
 *   - Not required, but bonus points awarded
 * LEVEL 3: Implement without using Array.prototype.sort method or libraries, efficiently
 *   - Not required, but major bonus points awarded
 */

// Average and worst case time complexity (Big-O) of my function is: O(n^2)
// Explain: the function run time will be proportional to the square of the input size

module.exports = function sortArray(arr) {
    // TODO
  if (arr.length === 0) {
    return []
  }
  if (arr.every(Number.isInteger)) {              
    for (let i = 0; i < arr.length-1; i++) {
      for (let j = i; j < arr.length-1; j++) {
        if (arr[j] < arr[i]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }     
    return arr;
  } else {
    throw new TypeError
  }
  
};

