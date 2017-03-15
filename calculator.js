/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule () {
  var memory = 0;
  var total = 0;

  return {
    load: setPublicTotal,
    getTotal: getPublicTotal,
    add: sumTotal,
    subtract: differenceTotal,
    multiply: productTotal,
    divide: quotientTotal,
    recallMemory: getMemory,
    saveMemory: storeToMemory,
    clearMemory: clearMemory
  };


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
   function setPublicTotal (x) {
    if(checkInput(x));
    // if(x === '' || x === [] || x === {} || x === null || typeof x != 'number'){
    //   throw new Error("Invalid Input");
    // }
    else {
      total = x;
      return total;
    }

   }

  /**
   * Return the value of `total`
   * @return { Number }
   */
   function getPublicTotal() {
    return total;
   }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
   function sumTotal(x) {
    if(checkInput(x)) {
    }
    else {
      total+=x;
      return total;
    }
   }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
   function differenceTotal(x) {
    if(checkInput(x)) {
    }
    else {
      total-=x;
      return total;
    }
   }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
   function productTotal(x) {
    if(checkInput(x)) {
    }
    else {
      total*=x;
      return total;
    }
   }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
   function quotientTotal(x) {
    if(checkInput(x)) {
    }
    else {
      total/=x;
      return total;
    }
   }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
   function getMemory() {
    return memory;
   }

  /**
   * Stores the value of `total` to `memory`
   */
   function storeToMemory() {
    memory = total;
   }

  /**
   * Clear the value stored at `memory`
   */
   function clearMemory () {
    memory = 0;
   }
  /**
   * Validation
   * Checks user input
   * @param {Number} x input
   * throws Error if input is invalid.
   */
  function checkInput(x) {
    if(typeof x != 'number'){
      throw new Error("Invalid Input");
    }
  }

}