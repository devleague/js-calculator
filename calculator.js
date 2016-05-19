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
    load: load,
    getTotal: getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
  };


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  function load (num) {
    return total = parseFloat(num);
  }

  /**
   * Return the value of `total`
   * @return { Number }
   */
  function getTotal () {
    return total;
  }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

  function add (num) {
    return total += parseFloat(num);
  }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

  function subtract (num) {
    return total -= parseFloat(num);
  }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

  function multiply (num) {
    return total *= parseFloat(num);
  }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

  function divide (num) {
    return total /= parseFloat(num);
  }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

}