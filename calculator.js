/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule(){
  var memory = 0;
  var total = 0;
  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  function load(num){
    total = num;
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
  function add(num){
    total += num;
    return total;
  }
  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
  function subtract(num){
    total -= num;
    return total;
  }
  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
  function multiply(num){
    total *= num;
    return total;
  }
  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
  function divide(num){
    total /= num;
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

   function validateFunction(fn){
    return function(n){
      if(typeof n !== typeof 0)
        throw new TypeError("Not a Number");
      return fn(n);
    };
   }


  return {
    load:validateFunction(load),
    getTotal:getTotal,
    add:validateFunction(add),
    subtract:validateFunction(subtract),
    multiply:validateFunction(multiply),
    divide:validateFunction(divide),
    recallMemory:recallMemory,
    saveMemory:saveMemory,
    clearMemory:clearMemory
  };
}






