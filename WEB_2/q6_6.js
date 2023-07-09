const calculator = document.querySelector('.calculator'); 
const buttons = calculator.querySelector('.calculator__buttons');
const operator = document.querySelector('.calculator__operator');
const display = document.querySelector('.calculator__display--for-advanced'); 
function calculate(n1, operator, n2) {
    let result = 0;
    if(operator === '+') {
      result = Number(n1) + Number(n2); 
    }
    else if(operator === '-') {
       result = Number(n1) - Number(n2); 
    }
    else if(operator === '*') {
       result = Number(n1) * Number(n2); 
    }
    if(operator === '/') {
       result = Number(n1) / Number(n2); 
    }
    return String(result);
  }
let firstNum = '';
let operatorForAdvanced = '';
let previousKey = '';
let previousNum = '';

  