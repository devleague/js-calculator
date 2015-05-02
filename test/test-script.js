/****Check if Browser or CLI****/
var window = window || undefined;

if (window) {
  GLOBAL = window;
} else {
  var fs = require('fs');
  var vm = require('vm');
  var chai = require('chai');
  var functionsFile = fs.readFileSync(process.cwd() + '/calculator.js');
  vm.runInThisContext(functionsFile); // file runs and it's contents has access to GLOBAL
}
/*******************************/
var expect = chai.expect;
var should = chai.should();

var CalculatorFactory = GLOBAL.CalculatorFactory;

describe("CalculatorFactory", function() {

  it('should be a function', function () {
    expect(CalculatorFactory).to.exist;
    expect(CalculatorFactory).to.be.an('function');
  });
  it('should return an object literal when invoked', function () {
    expect(CalculatorFactory()).to.be.an('object');
  });

  describe('#load', function () {
    var newCalc = CalculatorFactory();

    it('should be a function exposed by a new calculator object', function () {
      expect(newCalc.load).to.be.a('function');
      expect(GLOBAL.load).to.be.undefined;
    });
    it('should set the first value to the calculator', function () {
      expect(newCalc.load(666)).to.be.a('number');
      expect(newCalc.load(3)).to.equal(3);
      expect(newCalc.load(67)).to.equal(67);
      expect(newCalc.load(903)).to.equal(903);
    });
  });

  describe('#add', function () {
    var newCalc = CalculatorFactory();

    it('should be a function that is exposed by the object returned when calling `CalculatorFactory`', function () {
      expect(newCalc.add).to.be.a('function');
      expect(GLOBAL.add).to.be.undefined;
    });
    it('should take a Number and add it to the private variable `total` and return it\s value', function () {
      newCalc.load(0);
      expect(newCalc.add(0)).to.be.a('number');
      expect(newCalc.add(1)).to.be.a('number');
      expect(newCalc.add(3)).to.equal(4);
      expect(newCalc.add(9871231)).to.equal(9871235);
    });
  });

  describe('#subtract', function () {
    var newCalc = CalculatorFactory();

    it('should be a function that is exposed by the object returned when calling `CalculatorFactory`', function () {
      expect(newCalc.subtract).to.be.a('function');
      expect(GLOBAL.subtract).to.be.undefined;
    });
    it('should take a Number and subtract it from the private variable `total` and return it\s value', function () {
      newCalc.load(321);
      expect(newCalc.subtract(21)).to.be.a('number');
      expect(newCalc.subtract(150)).to.equal(150);
      expect(newCalc.subtract(151)).to.equal(-1);
    });
  });

  describe('#multiply', function () {
    var newCalc = CalculatorFactory();

    it('should be a function that is exposed by the object returned when calling `CalculatorFactory`', function () {
      expect(newCalc.multiply).to.be.a('function');
      expect(GLOBAL.multiply).to.be.undefined;
    });
    it('should take a Number and multiply by the value of the private variable `total` and return it\s value', function () {
      newCalc.load(1);
      expect(newCalc.multiply(19)).to.be.a('number');
      expect(newCalc.multiply(63)).to.equal(1197);
      expect(newCalc.multiply(258)).to.equal(308826);
    });
  });

});
