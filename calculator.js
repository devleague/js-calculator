/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
var calculatorModule = function (){
  var memory = 0;
  var total = 0;
  return {
    load: load,
    getTotal: getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    recallMemory: recallMemory,
    saveMemory: saveMemory,
    clearMemory: clearMemory

   };


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  function load(x){
    total = x;
    return total;
   }


  /**
   * Return the value of `total`
   * @return { Number }
   */
  function getTotal(){
    return total;

  }



  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
   function add(x){
    total += x;

   }


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
  function subtract(x){
    total -= x;
  }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
  function multiply(x){
    total *= x;
  }


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
  function divide(x){
    total /=x;
  }


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
  function recallMemory(x){
    return memory;
  }


  /**
   * Stores the value of `total` to `memory`
   */
  function saveMemory(x){
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
};