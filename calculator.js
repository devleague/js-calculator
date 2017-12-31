/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

function calculatorModule(){
    let _memory = 0;
    let _total = 0;

  function load (num) {
      validate (num);
      _total = num;
      return _total;
  };
    
  function getTotal () {
      return _total;
  };
        
  function add (num) {
       validate (num);
       _total += num;
  };

  function subtract (num) {
       validate (num);
       _total -= num;
  };

  function multiply (num) {
       validate (num);
       _total *= num;
  };

  function divide (num) {
      validate (num);
      _total /= num;
  };

  function recallMemory () {
      return _memory;
  };

  function saveMemory () {
      _memory = _total;
  };

  function clearMemory () {
      _memory = 0;
  };

  function validate (num) {
      if (typeof num !== 'number') {
          throw new Error('Try again!');
      } else {
          return true
      }
  };

  let calculator = {
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

return calculator;

};
