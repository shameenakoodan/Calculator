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

//BackSpace Button
const backspaceButton = document.querySelector("#backspace-button");

//Display contents when entering numbers or any symbol is clicked
const  displayFunction=(event)=>{
    const number = event.target.value;
    inputBox.value +=number;
}


//Cancel Function or clear the screen
const cancelFunction=()=>{
    const textValue = inputBox.value;
    inputBox.value = "";
}

//BackSpacefunction
const backspaceeFunction=()=>{
    const textValue = inputBox.value;
    inputBox.value = textValue.slice(0,-1);
}

//Function to check for precedence
const  hasPrecedence=(op1,op2)=>{
    if(op1 == op2)
        return false;
    if ((op1 == '*' || op1 == '/') &&
        (op2 == '+' || op2 == '-'))
            return false;
        else
            return true;
};

////Function for arithmetic operations

const arithmeticOperation=(operator,number1,number2)=>{
    switch(operator){
        case "+":
            result = Number(number2) + Number(number1);
            return result;
            break;
        case "-":
            result = Number(number1) - Number(number2);  
            console.log(`${Number(number1)}- ${Number(number2)} : ${result}`);
            return result;
            break;
        case "*":
            result = Number(number2) * Number(number1);
            console.log(`${Number(number1)}* ${Number(number2)} : ${result}`);
            return result;
            break;
        case "/":
            result = Number(number1)/ Number(number2);
            console.log(`Result : ${result}`);
            return result;
        case "√":
            result = Math.sqrt(Number(number1));
            return result;
            break;
        case "%":
            result = Number(number1)/100;
            return result;
            break;
        }      
}

//Function that performs arithmetic operations
const calculateOperations = ()=>{

   const expression = inputBox.value;
   let result=0;
   if(expression.length==0){
    inputBox.value = "0";
    return;
   }

   const tokens = expression.split('');

   //Use regular expression to extract digits and operators
   const values  = expression.match(/(\d+|\d+)(,\d+)*(\.\d+)*/g);
   const op =expression.match(/\D/g,'');

   //if values is null Invalid expression
   if(values == null){
    inputBox.value ="Error";
    return;
   }

   //If no operators are present display only numbers
   if(op == null){
    inputBox.value =inputBox.value;
    return;
   }
    //Removed all dots from operators which can be done using regx but using filter
    operators = op.filter(opr=>(opr!="."))
    
    while(values.length>0 && operators.length>0){
        if(operators.length == 1 && values.length==2){
            result = arithmeticOperation(operators.shift(),values.shift(),values.shift());
            inputBox.value = result;
        }
        if(operators.length ==1 && values.length == 1 && operators.pop() == "√")
        {
            result = Math.sqrt(values.pop(0));
            inputBox.value = result;
          //  return result;
        }
        const number1 = values.shift();
        const number2 = values.shift();
        const operator1 = operators.shift();
        let operator2;
        if(operators.length>0){
             operator2= operators.shift();
            //If operator2 has higher precendece
            if(hasPrecedence(operator1,operator2)){

                result = arithmeticOperation(operator2,number2,values.shift());
                values.unshift(number1);
                values.unshift(result);
                operators.unshift(operator1);
            }else{
                result = arithmeticOperation(operator1,number1,number2);
                operators.unshift(operator2);
                values.unshift(result);
            }
        } 
    }
    if(isNaN(result))
        inputBox.value = "Error";
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

//BackSpace Button
backspaceButton.addEventListener("click",backspaceeFunction);
