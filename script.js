//Buttons for 0-9
const numberButtons = document.querySelectorAll(".number-button");

//InputBox
const inputBox = document.querySelector("#read-input");

//Arithmetic Operators
const arithmeticButtons = document.querySelectorAll(".arithmetic-button");


//Equal Button 
const equalButton = document.querySelector(".equals-button");

//Other Symbols button
const otherSymbols = document.querySelectorAll(".symbols-button");

//Cancel Button
const cancelButton = document.querySelector(".cancel-button");

//Display contents when entering numbers or any symbol is clicked
const  displayFunction=(event)=>{
    const number = event.target.value;
    inputBox.value +=number;
}

//Cancel Function or clear the screen
const cancelFunction=()=>{
    const textValue = inputBox.value;
    inputBox.value = textValue.slice(0,-1);
}

//Function that performs arithmetic operations
const calculateOperations = ()=>{

   const expression = inputBox.value;
   if(expression.length==0){
    inputBox.value = "0";
    return;
   }

   const tokens = expression.split('');

   //Use regular expression to extract digits and operators
   const values  = expression.match(/(\d+|\d+)(,\d+)*(\.\d+)*/g);
   const op =expression.match(/\D/g,'');
    //Removed all dots from operators which can be done using regx but using filter
    operators = op.filter(opr=>(opr!="."))
    
    
    //Pop from both the stack and do the operations
    while(values.length>0 && operators.length>0){
        const operator = operators.pop();
        const number1 = values.pop();
        const number2 = values.pop();
        switch(operator){
            case "+":
                result = Number(number2) + Number(number1);
                values.push(result);
                break;
            case "-":
                result = Number(number2) - Number(number1);
                values.push(result);
                break;
            case "*":
                result = Number(number2) * Number(number1);
                values.push(result);
                break;
            case "/":
                result = Number(`${Number(number2)}/ ${Number(number1)} : ${result}`);
                values.push(result);
            case "√":
                    result = Math.sqrt(Number(number1));
                    break;
            case "%":
                result = Number(number1)/100;
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



//Add eventlistener for the squareroot button
otherSymbols.forEach(element => {
    element.addEventListener("click",displayFunction);
});

//Add eventlistenr for cancel button 
cancelButton.addEventListener("click",cancelFunction);