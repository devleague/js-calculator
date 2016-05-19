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
  var calculator = {};
  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  calculator.load = function(number){
    total = number;
    return total;
  };

  /**
   * Return the value of `total`
   * @return { Number }
   */
  calculator.getTotal = function(){
    return total;
  };

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
  calculator.add = function(number){
    total = total + number;
    return total;
  };

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
  calculator.subtract = function(number){
    total = total - number;
    return total;
  };

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
  calculator.multiply = function(number){
    total = total * number;
    return total;
  };

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
  calculator.divide = function(number){
    total = total/number;
    return total;
  };

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
  calculator.recallMemory = function(number){
    return memory;
  };

  /**
   * Stores the value of `total` to `memory`
   */
  calculator.saveMemory = function(){
    memory = total;
  };

  /**
   * Clear the value stored at `memory`
   */
  calculator.clearMemory = function(number){
    memory = 0;
  };

  return calculator;
};

  /**
   * Validation
   */

