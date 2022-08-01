"use strict";

var expression = "12+2+1+1+1";
var tokens = expression.split('');
var values = [];
var operators = [];
var prev = "";
var number = "";
var result = 0;
tokens.forEach(function (element) {
  //Check for digits
  if (element >= "0" && element <= "9") {
    //Find mutliple digit numbers
    if (prev >= "0" && prev <= "9") {
      number += element;
      prev = number;
    } else {
      number = element;
      prev = element;
    }
  } //Check for operators


  if (element == "+" || element == "-" || element == "*" || element == "/") {
    //Check whether stack already has an operator and two values
    if (operators.length == 1 && values.length == 1) {
      var operator = operators.pop();

      switch (operator) {
        case "+":
          result = Number(values.pop()) + Number(number);
          break;

        default:
          break;
      }

      console.log("Sum ".concat(result));
      values.push(result);
      number = "";
      operators.push(element);
    } else {
      values.push(number);
      number = "";
      operators.push(element);
      prev = "";
    }
  }
});
if (number >= "0") values.push(number);
result = Number(values.pop()) + Number(values.pop());
console.log(operators);
console.log(values);
console.log("Final : ".concat(result));
console.log("Values : ".concat(values, ", Operator : ").concat(operators));