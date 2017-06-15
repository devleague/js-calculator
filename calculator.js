/*jshint esversion: 6 */
/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

function calculatorModule(){

  let memory = 0;
  let total = 0;

  return {

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
   load: function (x) {
      this.validate(x);
      total = x;
      return total;
   },

  /**
   * Return the value of `total`
   * @return { Number }
   */
   getTotal: function () {
      return total;
   },

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
   add: function (x) {
      this.validate(x);
      total += x;
      return total;
   },

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
   subtract: function (x) {
      this.validate(x);
      total -= x;
      return total;
   },

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
   multiply: function (x) {
      this.validate(x);
      total = total * x;
      return total;
   },

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
   divide: function (x) {
      this.validate(x);
      total = total / x;
      return total;
   },

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
   recallMemory: function () {
      return memory;
   },

  /**
   * Stores the value of `total` to `memory`
   */
   saveMemory: function () {
      memory = total;
   },

  /**
   * Clear the value stored at `memory`
   */
   clearMemory: function () {
      memory = 0;
   },
  /**
   * Validation
   */
   validate: function (x) {
      if (typeof x !== 'number') {
          var err = new Error('Not a number!');
          console.log(err);
          return err;
        }
   },

   };

};