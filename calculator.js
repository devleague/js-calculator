/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule() {
    //creates two private variables inside this block
    let _memory = 0;
    let _total = 0;


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
   function load (num) {
    validate(num);
    //sets private variable total equal to num
    _total = num;

    return _total;
  }


  /**
   * Return the value of `total`
   * @return { Number }
   */
  function getTotal (){
//returns the current total
    return _total;
  }
  


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
  function add (num){
     validate(num);
//adds together the num value with the total
     _total+=num;
  }


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
  function subtract (num){
    validate(num);
//subtracts the value for num with the total
    _total -= num;
  }


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
  function multiply(num){
    validate (num);
//multiplies the value for num with the total
    _total *= num;

  }


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
  function divide (num){
      validate (num);
//divides the value for num with the total
      _total /= num;
  }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
  function recallMemory (){
//returns the value that is in the memory
    return _memory;
  }


  /**
   * Stores the value of `total` to `memory`
   */
  function saveMemory(){
//sets the memory equal to the total. 
    _memory = _total;
  }


  /**
   * Clear the value stored at `memory`
   */
  function clearMemory(){
      //sets the memory value equal to 0, clears it
      _memory = 0;
  }

  /**
   * Validation
   */

//makes sure that only variables that are inputed are numbers not any other type
   function validate (num){
  
    if(typeof num !== 'number'){
        throw error;
    }

    else{
     return true;
    }
   
    }


return{
    load: load,
    getTotal: getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    recallMemory: recallMemory,
    saveMemory: saveMemory,
    clearMemory: clearMemory
    }
}