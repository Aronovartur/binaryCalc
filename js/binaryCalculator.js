
//reach into the dom and assign value of element with id "res" to the variable elem;
let elem = document.getElementById("res");
  
//check to make sure that operator is a valid operator. 
  function checkOperator(){
    if(elem.innerHTML.endsWith('+') || elem.innerHTML.endsWith('-') || elem.innerHTML.endsWith('*') || elem.innerHTML.endsWith('/')){
      return true;
    }
  }
  
  function zero() {
    elem.innerHTML +='0';
  }
  
  function one() {
    elem.innerHTML +='1';
  }
  
  function add() {
  
   if(elem.innerHTML.length!=0 && !checkOperator()){
        elem.innerHTML +='+';
       }
  }  
  
  function subtract() {
    if(elem.innerHTML.length!=0 && !checkOperator()){
        elem.innerHTML +='-';
       }
  }

  function multiply() {
    if(elem.innerHTML.length!=0 && !checkOperator()){
        elem.innerHTML +="*";
       }
  }

  function divide() {
    if(elem.innerHTML.length!=0 && !checkOperator()){
        elem.innerHTML +="/";
      }
  }

  //reset
  function clear() {
    elem.innerHTML = '';
  }


  function solve() {
   if(!checkOperator()) {
     let re = /\d+/g
     let re2 = /[\+\-\*\/]+/g
     //search the input area for all the numbers and add them to an array
     let numbers = elem.innerHTML.match(re);
     
     //search the input for all the multipliers and add them to another array. 
     let operations = elem.innerHTML.match(re2);
     while(operations.length>0) {

      //perform multiplication and division first.
       if(operations.includes('*')) {
         let indexOfMul = operations.indexOf('*');
         let mul = ( indexOfMul!=0 ? parseInt(numbers[indexOfMul-1],2) : parseInt(numbers[indexOfMul],2) ) * parseInt(numbers[indexOfMul+1],2);
         numbers.splice(indexOfMul,2);
         numbers.splice(indexOfMul,0,mul.toString(2));
         operations.splice(indexOfMul,1);
       } else if (operations.includes('/')) {
         let indexOfDiv = operations.indexOf('/');
         let division = ( indexOfDiv!=0 ? parseInt(numbers[indexOfDiv-1],2) : parseInt(numbers[indexOfDiv],2) ) / parseInt(numbers[indexOfDiv+1],2);
         numbers.splice(indexOfDiv,2);
         numbers.splice(indexOfDiv,0,division.toString(2));
         operations.splice(indexOfDiv,1);
         //followed by addition and subtraction
       } else if (operations.includes('+')) {
         let indexOfSum = operations.indexOf('+');
         let sum = ( indexOfSum!=0 ? parseInt(numbers[indexOfSum-1],2) : parseInt(numbers[indexOfSum],2) ) + parseInt(numbers[indexOfSum+1],2);
         numbers.splice(indexOfSum,2);
         numbers.splice(indexOfSum,0,sum.toString(2));
         operations.splice(indexOfSum,1);
       } else {
         let indexOfSub = operations.indexOf('-');
         let sub = ( indexOfSub!=0 ? parseInt(numbers[indexOfSub-1],2) : parseInt(numbers[indexOfSub],2) )- parseInt(numbers[indexOfSub+1],2);
         numbers.splice(indexOfSub,2);
         numbers.splice(indexOfSub,0,sub.toString(2));
         operations.splice(indexOfSub,1);
       }  
     }
     elem.innerHTML = numbers[0].toString(2);
   } else {
     alert("cannot proceed. line must end with a number")
   }
 }
