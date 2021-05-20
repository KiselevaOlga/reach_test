// You can assume the input is an integer

// Average and worst case time complexity (Big-O) of my function is:O(1)
// Explain: no matter how big the input is, it will take the same amount of time to compute things

module.exports = function createBase(integer) {
  // TODO
    return function(newNum){
        return integer + newNum
    }
};
