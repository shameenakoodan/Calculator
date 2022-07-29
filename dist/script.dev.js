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
  alert(expression);
  var result = Function("return " + expression)();
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