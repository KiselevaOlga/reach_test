/**
 * You can assume the input:
 *   - is a valid string
 *   - contains words that are divided by a single space
 */

// Average and worst case time complexity (Big-O) of my function is:O(n)
// Explain:the function run time will be proportional to the input size


const reverseArr = function(arr, left, right) {
  let temp;
  while (left < right) {
      temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
  }   
}
module.exports = function reverseWordsInSentence(input) {
  // TODO
  if (input === ' ' || input === '' || input.length === 1){
    return input;
  }
  let arr = input.split('');
  let left = 0;
  let i;
  for (i = 0; i < arr.length; i++) {
      if (arr[i] === ' ') {
          reverseArr(arr, left, i-1);
          left = i + 1;
      }
  }
  reverseArr(arr, left, i)
  return arr.join('')
};
