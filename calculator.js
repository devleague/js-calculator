/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
var calculatorModule = function() {
  var memory = 0;
  var total = 0;
return {



  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
   

load: function(num) {
    if(typeof num === 'number') {
      total = num; 
      return num;
    } else {
      return null;
    }
  },
 
  
  /**
   * Return the value of `total`
   * @return { Number }
   */
 getTotal: function(){
    return total;
  },


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
   add: (num) => {
    if(typeof num === 'number') {
      total = total + num;
      return total;
    } else {
      return null;
    }
   },

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

subtract: (num) => {
  if(typeof num === 'number') {
    total = total - num;
    return total;
  } else {
    return null;
  }
},

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
multiply: (num) => {
  if(typeof num === 'number') {
    total = total * num;
    return total;
  } else {
    return null;
  }
},

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

divide: (num) => {
  if(typeof num === 'number') {
    total = total / num;
    return total;
  } else {
    return null;
  }
},

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
recallMemory: () => {
  return memory;

},


  /**
   * Stores the value of `total` to `memory`
   */
saveMemory: () => {
  return memory = total;
},

  /**
   * Clear the value stored at `memory`
   */
clearMemory: () => {
  return memory = 0;
},

  /**
   * Validation
   */
}
}
