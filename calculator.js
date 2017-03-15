/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

var calculatorModule = function() {

  var total = 0;
  var memory = 0;



  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

    return {

      load: function(x) {

        total = x;

        return total;

      },

  /**
   * Return the value of `total`
   * @return { Number }
   */

      getTotal: function() {

        return total;

      },

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

      add: function(x) {

        if( typeof x !== 'number'){

        console.log('NaN');

        }

        total += x;

        return total;

      },

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

      subtract: function(x) {

        if( typeof x !== 'number'){

          console.log('NaN');

        }

        total -= x;

        return total;

      },

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

      multiply: function(x) {

        if( typeof x !== 'number'){

          console.log('NaN');

        }

        total *= x;

        return total;

      },


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

      divide: function(x) {

        if( typeof x !== 'number'){

          console.log('NaN');

        }

        total /= x;

        return total;

      },

      recallMemory: function() {

        return memory;

      },

      saveMemory: function() {

        memory = total;

        return memory;

      },

      clearMemory: function() {

        memory = 0;

        return memory;

      }

    };















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


};