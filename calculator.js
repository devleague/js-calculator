/*jshint esversion: 6 */
/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule (){

  let memory = 0;
  let total = 0;

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

   function load(x){

     validation(x);
     total = x;
     return total;
   }

  /**
   * Return the value of `total`
   * @return { Number }
   */
   function getTotal(x){
      return total;
   }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
   function add(x){

      validation(x);
      total += x;
      return total;
   }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
   function subtract(x){

      validation(x);
      total -= x;
      return total;
  }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
   function multiply(x){

      validation(x);
      total *= x;
      return total;
   }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

   function divide(x){

      validation(x);
      total /= x;
      return total;
   }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

   function recallMemory(){

      return memory;
   }
  /**
   * Stores the value of `total` to `memory`
   */

   function saveMemory(){

      memory = total;
   }

  /**
   * Clear the value stored at `memory`
   */
   function clearMemory(){

      memory = 0;
   }

  /**
   * Validation
   */
    function validation(x){
    if (typeof x !== 'number'){
      throw new Error("Error");

      }
    }


   return {
      load: load,
      getTotal: getTotal,
      add: add,
      subtract: subtract,
      multiply: multiply,
      divide: divide,
      recallMemory: recallMemory,
      saveMemory: saveMemory,
      clearMemory: clearMemory,
    };

}