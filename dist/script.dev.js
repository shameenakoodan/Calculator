"use strict";

//Buttons for 0-9
var numberButtons = document.querySelectorAll(".number-button"); //InputBox

var inputBox = document.querySelector("#read-input"); //Arithmetic Operators

var arithmeticButtons = document.querySelectorAll(".arithmetic-button"); //Equal Button 

var equalButton = document.querySelector(".equal-button"); //Cancel button 

var cancelButton = document.querySelector(".cancel-button"); //Display contents when entering numbers or any symbol is clicked

var displayFunction = function displayFunction(event) {
  var number = event.target.value;
  inputBox.value += number;
}; //Function that performs arithmetic operations


var calculateOperations = function calculateOperations() {
  //alert(inputBox.value);
  var expression = inputBox.value;
  /* alert(expression);
   const result = Function("return " + expression)();
   inputBox.value = result; */

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
  inputBox.value = result;
}; //Add event listener for all the numbers in the calculator


numberButtons.forEach(function (element) {
  element.addEventListener("click", displayFunction);
}); //Add eventlistener for the arithmetic operators

arithmeticButtons.forEach(function (element) {
  element.addEventListener("click", displayFunction);
}); //Add eventlistener for the equal button

equalButton.addEventListener("click", calculateOperations); //Add eventlistner for the cancel button

cancelButton.addEventListener("click", function () {
  inputBox.value = "";
});