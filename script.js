//Buttons for 0-9
const numberButtons = document.querySelectorAll(".number-button");

//InputBox
const inputBox = document.querySelector("#read-input");

//Arithmetic Operators
const arithmeticButtons = document.querySelectorAll(".arithmetic-button");


//Equal Button 

const equalButton = document.querySelector(".equal-button");

//Cancel button 
const cancelButton = document.querySelector(".cancel-button");

//Display contents when entering numbers or any symbol is clicked
const  displayFunction=(event)=>{
    const number = event.target.value;
    inputBox.value+=number;
}
//Function that performs arithmetic operations

const calculateOperations = ()=>{
    //alert(inputBox.value);
    const expression = inputBox.value;
    alert(expression);
    const result = Function("return " + expression)();
    inputBox.value = result;
}
//Add event listener for all the numbers in the calculator
numberButtons.forEach(element => {
    element.addEventListener("click",displayFunction);
});

//Add eventlistener for the arithmetic operators
arithmeticButtons.forEach(element => {
    element.addEventListener("click",displayFunction);
});

//Add eventlistener for the equal button
equalButton.addEventListener("click",calculateOperations);

//Add eventlistner for the cancel button

cancelButton.addEventListener("click",()=>{
    inputBox.value="";
})




