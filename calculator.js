
/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule() {
   var memory = 0;
   var total = 0;
 return calculator = {   

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
load:  (x) => {
    if (typeof x === 'number') {
        total = x;
        return x;
    } else {
        throw new Error;
    }
},
/**
   * Return the value of `total`
   * @return { Number }
   */

getTotal:() => {
    return total;
},
  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

add: (x) => {
    if (typeof x === 'number') {
        total += x;
        return total;
    } else {
        throw new Error;
        
    }
},

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
subtract: (x) => {
    if (typeof x === 'number') {
        total -= x;     
    } else {
        throw new Error;
    }
},

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

multiply:  (x) => {
    if (typeof x === 'number') {
        total *= x;
    } else {
        throw new error;
    }
},
  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */ 
divide:  (x) => {
    if (typeof x === 'number') {
        total /= x;     
    } else {
        throw new error;
    }
},
/**
   * Return the value stored at `memory`
   * @return { Number }
   */  
recallMemory:  () => {
    return memory;
},
 /**
   * Stores the value of `total` to `memory`
   */
saveMemory:  () => {
    memory = total;
},
 /**
   * Clear the value stored at `memory`
   */
clearMemory: () => {
    memory = 0;
},
 /**
   * Validation
   */
}
}
