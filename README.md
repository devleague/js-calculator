# Js-Calculator

We will be creating calculators by utilizing the **Revealing Module Pattern**. Scope also comes into play in this exercise as a way to create functions and variables that are either both **privately** or **publically** available.

The `CalculatorModule` will return an object when invoked. This object will have functions attached to it that perform different operations. Users will not be able to access these functions without first creating a new Calculator.

This calculator will also have private variables: `total` and `memory`. Users will not be able to access these values directly. Only the functions will be able to interact with those values, functions like: `.add()`, `.subtract()`, `.multiply()`, `.divide()`, etc.

**NOTE**: Make sure you **_VALIDATE_** all of your inputs!! 

```javascript
"taco" + 3 //Not valid
```

##Example of useage

    var myCalculator = calculatorModule(); // creates a new calculator to be used
    myCalculator.load(6); // initial value to be stored in a private variable named `total`
    myCalculator.add(5); // adds 5 to `total`
    myCalculator.getTotal(); // returns the value of `total`

## Getting Started
1. Fork this repository and clone it from your personal GitHub Account
2. In the Terminal, navigate to the newly created folder for this repository
3. Install dependencies by running the command: `npm install`
4. Run tests by running the command: `npm test`
5. Your work will be one in the file named: `calculator.js`
6. Make your tests pass!

### References
[Front-end Masters' JS fundamentals to functional](https://frontendmasters.com/courses/js-fundamentals-to-functional/#v=did85vfg6j&p=0.3508)

[Essential Javascript Design Patterns - Module Pattern](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)

