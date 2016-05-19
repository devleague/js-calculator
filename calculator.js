/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

  /**
   * Return the value of `total`
   * @return { Number }
   */
function calculatorModule(x){
  var calculator = {
    memory: 0,
    total: 0,
    load: function(x){
            calculator.total = x;
            return calculator.total;
          },
    getTotal: function(x){
                return calculator.total;
              },
    add: function(x){
            calculator.total = calculator.total + x;
          },
    subtract: function(x){
                calculator.total = calculator.total - x;
              },
    multiply: function(x){
                calculator.total = calculator.total * x;
              },
    divide: function(x){
                calculator.total = calculator.total / x;
            },
    recallMemory: function(){
                    return calculator.memory;
                  },
    saveMemory: function(){
                  calculator.memory = calculator.total;
                },
    clearMemory: function(){
                    calculator.memory = 0;
                  },
  };

  return calculator;
}

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


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

