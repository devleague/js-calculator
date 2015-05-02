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

    it('should be a function available on a new calculator object', function () {
      expect(newCalc.load).to.be.a('function');
      expect(GLOBAL.load).to.be.undefined;
    });
    it('should load a number into the calculator', function () {
      expect(newCalc.load(666)).to.be.a('number');
      expect(newCalc.load(3)).to.equal(3);
      expect(newCalc.load(67)).to.equal(67);
      expect(newCalc.load(903)).to.equal(903);
    });
  });

  describe('#getTotal', function () {
    var newCalc = CalculatorFactory();

    it('should be a function that is available on the calculator', function () {
      expect(newCalc.getTotal).to.be.a('function');
      expect(GLOBAL.getTotal).to.be.undefined;
    });
    it('should return the current total', function () {
      newCalc.load(5);
      expect(newCalc.getTotal()).to.equal(5);
      newCalc.load(12812);
      expect(newCalc.getTotal()).to.equal(12812);
      newCalc.load(02571648);
      expect(newCalc.getTotal()).to.equal(02571648);
    });
  });

  describe('#add', function () {
    var newCalc = CalculatorFactory();

    it('should be a function available on a new calculator object', function () {
      expect(newCalc.add).to.be.a('function');
      expect(GLOBAL.add).to.be.undefined;
    });
    it('should take a Number and add it to the total', function () {
      newCalc.load(0);
      newCalc.add(0);
      expect(newCalc.getTotal()).to.be.a('number');
      newCalc.add(3);
      expect(newCalc.getTotal()).to.equal(3);
      newCalc.add(9871231);
      expect(newCalc.getTotal()).to.equal(9871234);
    });
  });

  describe('#subtract', function () {
    var newCalc = CalculatorFactory();

    it('should be a function available on a new calculator object', function () {
      expect(newCalc.subtract).to.be.a('function');
      expect(GLOBAL.subtract).to.be.undefined;
    });
    it('should take a Number and subtract it from the total', function () {
      newCalc.load(321);
      newCalc.subtract(21);
      expect(newCalc.getTotal()).to.be.a('number');
      newCalc.subtract(150);
      expect(newCalc.getTotal()).to.equal(150);
      newCalc.subtract(151);
      expect(newCalc.getTotal()).to.equal(-1);
    });
  });

  describe('#multiply', function () {
    var newCalc = CalculatorFactory();

    it('should be a function available on a new calculator object', function () {
      expect(newCalc.multiply).to.be.a('function');
      expect(GLOBAL.multiply).to.be.undefined;
    });
    it('should take a Number and multiply it by the total', function () {
      newCalc.load(1);
      newCalc.multiply(19);
      expect(newCalc.getTotal()).to.be.a('number');
      newCalc.multiply(63);
      expect(newCalc.getTotal()).to.equal(1197);
      newCalc.multiply(258);
      expect(newCalc.getTotal()).to.equal(308826);
      newCalc.load(20);
      newCalc.multiply(4);
      expect(newCalc.getTotal()).to.equal(80);
    });
  });

  describe('#divide', function () {
    var newCalc = CalculatorFactory();

    it('should be a function available on a new calculator object', function () {
      expect(newCalc.divide).to.be.a('function');
      expect(GLOBAL.divide).to.be.undefined;
    });
    it('should take a Number and divide it by the total', function () {
      newCalc.load(50);
      newCalc.divide(1);
      expect(newCalc.getTotal()).to.be.a('number');
      newCalc.divide(2);
      expect(newCalc.getTotal()).to.equal(25);
      newCalc.divide(5);
      expect(newCalc.getTotal()).to.equal(5);
    });
  });

  describe('#recall', function () {
    var newCalc = CalculatorFactory();
    it('should be a function available on a new calculator object', function () {
      expect(newCalc.recall).to.be.a('function');
      expect(GLOBAL.recall).to.be.undefined;
    });
    it('should return the value of a number stored in memory', function () {
      expect(newCalc.recall()).to.be.a('number');
      expect(newCalc.recall()).to.equal(0);
    });
  });

  describe('#save', function () {
    var newCalc = CalculatorFactory();

    it('should be a function available on a new calculator object', function () {
      expect(newCalc.save).to.be.a('function');
      expect(GLOBAL.save).to.be.undefined;
    });
    it('should save the number to the memory', function () {
      /*ADD*/
      newCalc.load(5);
      newCalc.add(763);
      newCalc.save();
      expect(newCalc.recall()).to.equal(768);
      /*SUBTRACT*/
      newCalc.load(12812);
      newCalc.subtract(763);
      newCalc.save();
      expect(newCalc.recall()).to.equal(12049);
      /*MULTIPLY*/
      newCalc.load(5);
      newCalc.multiply(763);
      newCalc.save();
      expect(newCalc.recall()).to.equal(3815);
      /*DIVIDE*/
      newCalc.load(666);
      newCalc.divide(2);
      newCalc.save();
      expect(newCalc.recall()).to.equal(333);
    });
  });

  describe('#clear', function () {
    var newCalc = CalculatorFactory();

    it('should be a function available on a new calculator object', function () {
      expect(newCalc.clear).to.be.a('function');
      expect(GLOBAL.clear).to.be.undefined;
    });
    it('should clear the memory', function () {
      /*ADD*/
      newCalc.load(5);
      newCalc.add(763);
      newCalc.save();
      newCalc.clear();
      expect(newCalc.recall()).to.equal(0);
      /*SUBTRACT*/
      newCalc.load(12812);
      newCalc.subtract(763);
      newCalc.save();
      newCalc.clear();
      expect(newCalc.recall()).to.equal(0);
      /*MULTIPLY*/
      newCalc.load(5);
      newCalc.multiply(763);
      newCalc.save();
      newCalc.clear();
      expect(newCalc.recall()).to.equal(0);
      /*DIVIDE*/
      newCalc.load(666);
      newCalc.divide(2);
      newCalc.save();
      newCalc.clear();
      expect(newCalc.recall()).to.equal(0);
    });
  });
  describe('Validation', function () {
    it('private variables are not on the global namespace', function () {
      expect(GLOBAL.total).to.be.undefined;
      expect(GLOBAL.memory).to.be.undefined;
    });
    it('private variable are not attached to new calculator objects', function () {
      var newCalc = CalculatorFactory();
      expect(newCalc.total).to.be.undefined;
      expect(newCalc.memory).to.be.undefined;
    });
    it('If any calculator function is given a non-Number data type as an argument display an error message string', function () {
      var newCalc = CalculatorFactory();
      /*ADD*/
      expect(newCalc.add('')).to.be.a('string');
      expect(newCalc.add([])).to.be.a('string');
      expect(newCalc.add({})).to.be.a('string');
      expect(newCalc.add(null)).to.be.a('string');
      expect(newCalc.add(function(){})).to.be.a('string');
      /*SUBTRACT*/
      expect(newCalc.subtract('')).to.be.a('string');
      expect(newCalc.subtract([])).to.be.a('string');
      expect(newCalc.subtract({})).to.be.a('string');
      expect(newCalc.subtract(null)).to.be.a('string');
      expect(newCalc.subtract(function(){})).to.be.a('string');
      /*MULTIPLY*/
      expect(newCalc.multiply('')).to.be.a('string');
      expect(newCalc.multiply([])).to.be.a('string');
      expect(newCalc.multiply({})).to.be.a('string');
      expect(newCalc.multiply(null)).to.be.a('string');
      expect(newCalc.multiply(function(){})).to.be.a('string');
      /*DIVIDE*/
      expect(newCalc.divide('')).to.be.a('string');
      expect(newCalc.divide([])).to.be.a('string');
      expect(newCalc.divide({})).to.be.a('string');
      expect(newCalc.divide(null)).to.be.a('string');
      expect(newCalc.divide(function(){})).to.be.a('string');
    });
  });
});
