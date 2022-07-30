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

//Other Symbols button
const otherSymbols = document.querySelectorAll(".symbols-button");

//Display contents when entering numbers or any symbol is clicked
const  displayFunction=(event)=>{
    const number = event.target.value;
    inputBox.value +=number;
}

//Function that performs arithmetic operations
const calculateOperations = ()=>{
    //alert(inputBox.value);
   const expression = inputBox.value;
   console.log(`Expression  : ${expression}`)
   const tokens = expression.split('');

   //Use regular expression to extract digits and operators
   const values  = expression.match(/\d+/g);
   const operators =expression.match(/\D/g,'');

    console.log("Before Operation");
    console.log(operators);
    console.log(values);
    
    //Pop from both the stack and do the operations
    while(values.length>0 && operators.length>0){
        const operator = operators.pop();
        console.log(`Popped ${operator}`);
        const number1 = values.pop();
        const number2 = values.pop();
        switch(operator){
            case "+":
                result = Number(number2) + Number(number1);
                console.log(`${Number(number1)} + ${Number(number2)} : ${result}`);
                values.push(result);
                break;
            case "-":
                result = Number(number2) - Number(number1);
                values.push(result);
                console.log(`${Number(number1)}- ${Number(number2)} : ${result}`);
                break;
            case "*":
                result = Number(number2) * Number(number1);
                values.push(result);
                console.log(`${Number(number1)}* ${Number(number2)} : ${result}`);
                break;
            case "/":
                result = Number(`${Number(number2)}/ ${Number(number1)} : ${result}`);
                values.push(result);
                console.log(`Result : ${result}`);
            case "√":
                    result = Math.sqrt(Number(number1));
                    break;
            break;
        }
    }
    if(isNaN(result))
        inputBox.value = "Invalid";
    else
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

//Add eventlistener for the squareroot button
otherSymbols.forEach(element => {
    element.addEventListener("click",displayFunction);
});


