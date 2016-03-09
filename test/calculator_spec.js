var fs = require('fs');
var vm = require('vm');
var chai = require('chai');
var calculatorModule = require('../calculator');
var expect = chai.expect;
var should = chai.should();

describe("calculatorModule", function() {
  var newCalc = null;

  it('should be a function', function () {
    expect(calculatorModule).to.exist;
    expect(calculatorModule).to.be.an('function');
  });
  it('should return an object literal when invoked', function () {
    expect(calculatorModule()).to.be.an('object');
  });

  describe('Calculator Methods', function () {
    beforeEach(function () {
      newCalc = calculatorModule();
    });
    describe('#load', function () {
      it('should be a function available on a new calculator object', function () {
        expect(newCalc.load).to.be.a('function');
      });
      it('should load a number into the calculator', function () {
        expect(newCalc.load(666)).to.be.a('number');
        expect(newCalc.load(3)).to.equal(3);
        expect(newCalc.load(67)).to.equal(67);
        expect(newCalc.load(903)).to.equal(903);
      });
    });

    describe('#getTotal', function () {
      it('should be a function that is available on the calculator', function () {
        expect(newCalc.getTotal).to.be.a('function');
      });
      it('should return the current total', function () {
        /*CHECK INITIAL VALUE*/
        expect(newCalc.getTotal()).to.equal(0);
        newCalc.load(5);
        expect(newCalc.getTotal()).to.equal(5);
        newCalc.load(12812);
        expect(newCalc.getTotal()).to.equal(12812);
        newCalc.load(02571648);
        expect(newCalc.getTotal()).to.equal(02571648);
      });
    });

    describe('#add', function () {
      it('should be a function available on a new calculator object', function () {
        expect(newCalc.add).to.be.a('function');
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
      it('should be a function available on a new calculator object', function () {
        expect(newCalc.subtract).to.be.a('function');
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
      it('should be a function available on a new calculator object', function () {
        expect(newCalc.multiply).to.be.a('function');
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
      it('should be a function available on a new calculator object', function () {
        expect(newCalc.divide).to.be.a('function');
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

    describe('#recallMemory', function () {
      it('should be a function available on a new calculator object', function () {
        expect(newCalc.recallMemory).to.be.a('function');
      });
      it('should return the value of a number stored in memory', function () {
        expect(newCalc.recallMemory()).to.be.a('number');
        expect(newCalc.recallMemory()).to.equal(0);
      });
    });

    describe('#saveMemory', function () {
      it('should be a function available on a new calculator object', function () {
        expect(newCalc.saveMemory).to.be.a('function');
      });
      it('should save the number to the memory', function () {
        /*CHECK INITIAL VALUE*/
        expect(newCalc.recallMemory()).to.equal(0);
        /*ADD*/
        newCalc.load(5);
        newCalc.add(763);
        newCalc.saveMemory();
        expect(newCalc.recallMemory()).to.equal(768);
        /*SUBTRACT*/
        newCalc.load(12812);
        newCalc.subtract(763);
        newCalc.saveMemory();
        expect(newCalc.recallMemory()).to.equal(12049);
        /*MULTIPLY*/
        newCalc.load(5);
        newCalc.multiply(763);
        newCalc.saveMemory();
        expect(newCalc.recallMemory()).to.equal(3815);
        /*DIVIDE*/
        newCalc.load(666);
        newCalc.divide(2);
        newCalc.saveMemory();
        expect(newCalc.recallMemory()).to.equal(333);
      });
    });

    describe('#clearMemory', function () {
      it('should be a function available on a new calculator object', function () {
        expect(newCalc.clearMemory).to.be.a('function');
      });
      it('should clear the memory', function () {
        /*ADD*/
        newCalc.load(5);
        newCalc.add(763);
        newCalc.saveMemory();
        newCalc.clearMemory();
        expect(newCalc.recallMemory()).to.equal(0);
        /*SUBTRACT*/
        newCalc.load(12812);
        newCalc.subtract(763);
        newCalc.saveMemory();
        newCalc.clearMemory();
        expect(newCalc.recallMemory()).to.equal(0);
        /*MULTIPLY*/
        newCalc.load(5);
        newCalc.multiply(763);
        newCalc.saveMemory();
        newCalc.clearMemory();
        expect(newCalc.recallMemory()).to.equal(0);
        /*DIVIDE*/
        newCalc.load(666);
        newCalc.divide(2);
        newCalc.saveMemory();
        newCalc.clearMemory();
        expect(newCalc.recallMemory()).to.equal(0);
      });
    });
    /*FINAL BOSS*/
    describe('Validations', function () {
      it('private variables are not exposed by a calculator object', function () {
        expect(newCalc.total).to.be.undefined;
        expect(newCalc.memory).to.be.undefined;
      });
      it('If any calculator function is given a non-Number data type as an argument display an error message string', function () {
        /*LOAD*/
        describe('#load', function () {
          it('pass validations', function () {
            expect(newCalc.load.bind(null, '')).to.throw(Error);
            expect(newCalc.load.bind(null, [])).to.throw(Error);
            expect(newCalc.load.bind(null, {})).to.throw(Error);
            expect(newCalc.load.bind(null, null)).to.throw(Error);
            expect(newCalc.load.bind(null, function(){})).to.throw(Error);
          });
        });
        /*ADD*/
        describe('#add', function () {
          it('pass validations', function () {
            expect(newCalc.add.bind(null, '')).to.throw(Error);
            expect(newCalc.add.bind(null, [])).to.throw(Error);
            expect(newCalc.add.bind(null, {})).to.throw(Error);
            expect(newCalc.add.bind(null, null)).to.throw(Error);
            expect(newCalc.add.bind(null, function(){})).to.throw(Error);
          });
        });
        /*SUBTRACT*/
        describe('#subtract', function () {
          it('pass validations', function () {
            expect(newCalc.subtract.bind(null, '')).to.throw(Error);
            expect(newCalc.subtract.bind(null, [])).to.throw(Error);
            expect(newCalc.subtract.bind(null, {})).to.throw(Error);
            expect(newCalc.subtract.bind(null, null)).to.throw(Error);
            expect(newCalc.subtract.bind(null, function(){})).to.throw(Error);
          });
        });
        /*MULTIPLY*/
        describe('#multiply', function () {
          it('pass validations', function () {
            expect(newCalc.multiply.bind(null, '')).to.throw(Error);
            expect(newCalc.multiply.bind(null, [])).to.throw(Error);
            expect(newCalc.multiply.bind(null, {})).to.throw(Error);
            expect(newCalc.multiply.bind(null, null)).to.throw(Error);
            expect(newCalc.multiply.bind(null, function(){})).to.throw(Error);
          });
        });
        /*DIVIDE*/
        describe('#divide', function () {
          it('pass validations', function () {
            expect(newCalc.divide.bind(null, '')).to.throw(Error);
            expect(newCalc.divide.bind(null, [])).to.throw(Error);
            expect(newCalc.divide.bind(null, {})).to.throw(Error);
            expect(newCalc.divide.bind(null, null)).to.throw(Error);
            expect(newCalc.divide.bind(null, function(){})).to.throw(Error);
          });
        });
      });
    });
  });
});
