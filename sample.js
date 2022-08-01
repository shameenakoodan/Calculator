const  hasPrecedence=(op1,op2)=>{
    if ((op1 == '*' || op1 == '/') &&
        (op2 == '+' || op2 == '-'))
            return false;
        else
            return true;
};

const arithmeticOperation=(operator,number1,number2)=>{
    switch(operator){
        case "+":
            result = Number(number2) + Number(number1);
            console.log(`${Number(number1)} + ${Number(number2)} : ${result}`);
            return result;
            break;
        case "-":
            result = Number(number2) - Number(number1);
            
            console.log(`${Number(number1)}- ${Number(number2)} : ${result}`);
            return result;
            break;
        case "*":
            result = Number(number2) * Number(number1);
            console.log(`${Number(number1)}* ${Number(number2)} : ${result}`);
            return result;
            break;
        case "/":
            result = Number(number2)/ Number(number1);
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
const expression = "6*3+2";


    let prev="";
    let number="";
    let result=0;

    //Used regular expression to get the operators and numbers in two seperate arrays
    const values  = expression.match(/(\d+|\d+)(,\d+)*(\.\d+)*/g);
    const op =expression.match(/\D/g,'');
    operators = op.filter(op=>(op!="."))
    console.log("Before Operation");
    console.log(operators);
    console.log(values);
    
    //Pop from both the stack and do the operations
    
    while(values.length>0 && operators.length>0){
        const number1 = values.shift();
        const number2 = values.shift();
        const operator1 = operators.shift();
         //Check for operator precendence
        
        /* ------------------------------ */
        let operator2;
        if(operators.length == 1){
            result = arithmeticOperation(operator1,number1,number2);
        }
        else if(operators.length>0){
             operator2= operators.shift();
            //If operator2 has higher precendece
            if(hasPrecedence(operator1,operator2)){
                console.log("true");

                result = arithmeticOperation(operator2,number2,values.shift());
                values.push(number1);
                values.push(result);
                operators.push(operator1);
                console.log(`after initial ${operators} and ${values}`);
            }else{
                console.log(`false`);
                result = arithmeticOperation(operator1,number1,number2);
                operators.push(operator2);
                values.push(number2);
                values.push(result);
            }
        }        
    }
    console.log(`${operators} and ${values}`);
    if(isNaN(result))
        console.log("Invalid Expression");
   else
     console.log(`Result : ${result}`);

