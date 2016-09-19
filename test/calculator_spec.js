/****Check if Browser or CLI****/
var window = window || false;
var calculatorModule;

if (!window) {
  var chai = require('chai');
  calculatorModule = require('../calculator.js');
}

var expect = chai.expect;
chai.should();

/**
* write tests below
*/


