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

/**
* write tests below
*/