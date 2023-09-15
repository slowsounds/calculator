// UI:
let values1 = [];
let values2 = [];
let ops = [];
let finalValue1
let finalValue2
let newValue2
let sumOp 
// let nextValue



function displayText(num1) {
  if (ops.length == 0){
    let newValue = document.getElementById("display").innerText = num1;
    values1.push(newValue);
    finalValue1 = values1.join("");
    document.getElementById("display").innerText = finalValue1;
    console.log("first number. finalValue1 : " + finalValue1);
    return finalValue1;
  }
  if (ops.length == 1) {
    let newValue2 = document.getElementById("display").innerText = num1;
    values2.push(newValue2);
    finalValue2 = values2.join("");
    document.getElementById("display").innerText = finalValue2;
    console.log("ops length 1. second number. finalValue2 " + finalValue2);
    return finalValue2;
  }
  if (ops.length > 1) {
    calculateValues();
    finalValue1 = CVresult;

    console.log("3 or more values " + "finalValue1 " + finalValue1 + " finalValue2 " + finalValue2);
    let newValue2 = document.getElementById("display").innerText = num1;
    values2.push(newValue2);
    finalValue2 = values2.join("");
    document.getElementById("display").innerText = finalValue2;
    console.log("ops length 2. second number. finalValue1 " + finalValue1 + " finalValue2 " + finalValue2);
    return finalValue2;
    } 
  }

// function calculateInterimSum() {
//   console.log("here again");
//   CISresult = finalCalc(finalValue1, finalValue2, ops[ops.length -1]);
// }


function calculateValues() {
  console.log(ops[ops.length -1]);
  CVresult = finalCalc(finalValue1, finalValue2, ops[ops.length -1]);
  document.getElementById("display").innerText = CVresult;
  
  return CVresult;
}

 function displayOperator (op){
  if (ops.length == 0){
    let newOp = document.getElementById("display").innerText = op;
    ops.push(newOp);
    console.log("newOp " + newOp);
    console.log("ops " + ops);
    return newOp;
  }
  else if (ops.length > 0) {
    let nextOp = document.getElementById("display").innerText = op;
    ops.push(nextOp);
    console.log("nextOp " + nextOp);
    console.log("ops " + ops);
    // calculateValues();
  }
}


function finalCalc(num1, num2, op){
  if (op == "+") {
    result = add(num1, num2);
    // document.getElementById("display").innerText = result;
    // values1 = [];
    // values2 = [];
    // console.log("finalCalc result " + result)
    return result;
  }
  if (op == "-"){
    result = subtract(num1, num2);
    // document.getElementById("display").innerText = result;
    // values1 = [];
    // values2 = [];
    return result;
  }
  if (op == "*"){
    result = multiply(num1, num2);
    // document.getElementById("display").innerText = result;
    // values1 = [];
    // values2 = [];
    return result;
  }
  if (op == "/"){
    result = divide(num1, num2);
    // document.getElementById("display").innerText = result;
    // values1 = [];
    // values2 = [];
    return result;
  }
  }

// Calculations:
const add = function(a,b) {
	return parseFloat(a)+parseFloat(b);
};

const subtract = function(a,b) {
	return parseFloat(a).toPrecision(15)-parseFloat(b).toPrecision(15);
};

const multiply = function(a,b) {
	return parseFloat(a).toPrecision(15)*parseFloat(b).toPrecision(15);
};

const divide = function(a,b) {
	return parseFloat(a).toPrecision(15)/parseFloat(b).toPrecision(15);
};

function clearValue() {
  document.getElementById("display").innerText = 0;
  values1 = [];
  values2 = [];
  ops = [];
}


// for (let i = 0; i < ops.length; i++){
//   result = finalCalc(finalValue1, finalValue2, ops[i]);
//   document.getElementById("display").innerText = result;
//   if (ops.length > 1){
//     finalValue1 = result;
//     values2 = [];
//     finalValue2 = 0;
//   }
// }


// let newValue2 = document.getElementById("display").innerText = num1;
// values2.push(newValue2);
// console.log("values1 " + values1);
// console.log("values2 " + values2);
// finalValue2 = values2.join("");
// document.getElementById("display").innerText = finalValue2;
// console.log("finalValue1 " + finalValue1);
// console.log("finalValue2 " + finalValue2);
// return values2;
// console.log("typeof finalValue2 " + typeof finalValue2);


// else {
//   sum = calculateValues(finalValue1, finalValue2, newOp);
//   console.log("final calc" + sum);
//   }

// let equals = document.getElementById("equals");
// equals.addEventListener("click", calculateValues);

// const add = function(newValue,newValue2) {
//   sum = newValue + newValue2;
//   console.log("sum " + sum);
// }

// function displayText(num1) {
//     console.log(newOp);
//   if (newOp == undefined){
//     var newValue = document.getElementById("display").innerText = num1
//     if(newValue != undefined){
//         var total = newValue + nextValue;
//     }
//     values.push(total);
//     console.log("values before op " + values);
//   }
//   if (newOp != undefined) {
//     var newValue2 = document.getElementById("display").innerText = num1;
//     values.push(newValue2);
//     console.log("values after op " + values);

//     };
//   }



// function displayText(num1) {
//     console.log(newOp);
//   if (newOp == undefined){
//     var newValue = document.getElementById("display").innerText = num1;
//     values.push(newValue);
//     console.log("values " + values);
//   }
//   if (newOp != undefined) {
//     var newValue2 = document.getElementById("display").innerText = num1;
//     values.push(newValue2);
//     console.log("values " + values);

//     };
//   }



// function displayText() {
//     var number = document.getElementById("display").innerText = "you pressed 1";
// }




