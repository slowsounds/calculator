let ELButtons = document.getElementsByClassName("buttonNumber");
let ELOps = document.getElementsByClassName("operator");
let toggle = new Boolean(true);
let holdingSum;
let tempArray1 = [];
let tempArray2 = [];
let num1;
let num2;
let op1;

for (var i = 0; i < ELButtons.length; i++) {
  ELButtons[i].addEventListener('click', function() {
    if (toggle == true && typeof holdingSum == 'undefined') {
      console.log("toggle true, HS undefined");
      createNum1();
    }
    if (toggle == true && typeof holdingSum !== 'undefined') {
      console.log("toggle true, HS defined");
      createNum2();
      console.log("num1 is: " + num1 + " num2 is: " + num2 + " holdingSum is: " + holdingSum);
    }
    if(toggle == false && typeof holdingSum == 'undefined') {
      console.log("toggle false, HS undefined");
      createNum2();
    }
    if(toggle == false && typeof holdingSum !== 'undefined') {
      console.log("toggle false, HS defined");
      createNum2();
      console.log("num1 is: " + num1 + " num2 is: " + num2 + " holdingSum is: " + holdingSum);
    }
  });
}

for (var i = 0; i < ELOps.length; i++) {
  ELOps[i].addEventListener('click', function() {
    if(typeof num2 == "undefined"){
      console.log("operator clicked, num2 undefined")
      toggleToggle();
      op1 = buttonOp;
      return op1
    }
    if(typeof num2 !== "undefined"){
      console.log("operator clicked, num2 defined")
      calc(num1, op1, num2);
      toggleToggle();
      resetNum1();
      return op1 = buttonOp;
    }
  });
}

function createNum1(){
    let newValue = buttonNum;
    tempArray1.push(newValue);
    num1 = tempArray1.join("");
    checkForDecimal(num1);
    console.log("num1 is: " + num1);
    displayField(num1);
    return num1;
}

function createNum2(){
  let newValue = buttonNum;
  tempArray2.push(newValue);
  num2 = tempArray2.join("");
  checkForDecimal(num2);
  console.log("num2 is: " + num2);
  displayField(num2);
  return num2;
}

function checkForDecimal(a){
  if (a.includes('.')){
    document.getElementById('decimal').disabled = true;
  }
  else {
    document.getElementById('decimal').disabled = false;
  }
}

function displayText(num){
  console.log("displayText num is: " + num);
  displayField(num);
  return buttonNum = num;
}

function displayOperator(num){
  console.log("displayOperator num is: " + num);
  checkForDecimal(num);
  displayField(num);
  return buttonOp = num;
}

function toggleToggle(){
  toggle = !toggle;
  console.log("toggle done. toggle is now: " + toggle);
  return toggle;
}

function resetNum1() {
  tempArray2 = [];
  num2 = 0;
  num1 = holdingSum;
}

function calc(n1, op, n2){
  if (op == "+") {
    holdingSum = parseFloat(n1)+parseFloat(n2);
    console.log("holdingSum is: " + holdingSum);
    displayField(holdingSum);
    return holdingSum;
  }
  if (op == "-"){
    holdingSum = parseFloat(n1).toPrecision(15)-parseFloat(n2).toPrecision(15);
    console.log("holdingSum is: " + holdingSum);
    displayField(holdingSum);
    return holdingSum;
  }
  if (op == "*"){
    holdingSum = parseFloat(n1).toPrecision(15)*parseFloat(n2).toPrecision(15);
    console.log("holdingSum is: " + holdingSum);
    displayField(holdingSum);
    return holdingSum;
  }
  if (op == "/"){
    holdingSum = parseFloat(n1).toPrecision(15)/parseFloat(n2).toPrecision(15);
    console.log("holdingSum is: " + holdingSum);
    console.log("type of holdingSum is: " + typeof holdingSum);
    if (holdingSum == Infinity){
      alert("oh no you don't");
    } else{
      displayField(holdingSum);
      return holdingSum;
    }
  }
}

function equalsButt(){
  console.log("num1 is : " + num1 + " op1 is: " + op1 + " num2 is: " + num2);
  checkForDecimal("0");
  calc(num1, op1, num2);
  num1 = undefined;
  op1 = undefined;
  num2 = undefined;
  tempArray1 = [];
  tempArray2 = [];
  toggle = true;
  holdingSum = undefined;
}

function clearValue(){
  num1 = undefined;
  op1 = undefined;
  num2 = undefined;
  tempArray1 = [];
  tempArray2 = [];
  toggle = true;
  holdingSum = undefined;
  displayField("0");
}

function displayField(valueForDisplay){
  let numberOfDecimals = countDecimals(valueForDisplay);
  if (typeof valueForDisplay == 'string' && numberOfDecimals > 5){
    let shortValueForDisplay = Number(valueForDisplay).toFixed(5);
    document.getElementById("display").innerText = shortValueForDisplay;
}
  if (typeof valueForDisplay == 'number' && numberOfDecimals > 5){
    let shortValueForDisplay = Number(valueForDisplay).toFixed(5);
    document.getElementById("display").innerText = shortValueForDisplay;
  }
  if (valueForDisplay == '') {
    document.getElementById("display").innerText = "0";
  }
  else {
    document.getElementById("display").innerText = valueForDisplay;
  }
}

var countDecimals = function (x) {
  let afterDecimalStr = x.toString().split('.')[1] || ''
  return afterDecimalStr.length
}

function deleteValue() {
  if (toggle == true && typeof holdingSum == 'undefined') {
    tempArray1.pop();
    num1 = tempArray1.join("");
    displayField(num1);
    console.log("num1 is: " + num1);
  }
  // if (holdingSum !== 'undefined' && num1 == 'undefined') {
  //   return;
  // }
  else {
    tempArray2.pop();
    num2 = tempArray2.join("");
    displayField(num2);
    console.log("typeof num2 is: " + typeof num2);
  }
}

// (toggle == false && typeof holdingSum !== 'undefined')
// for(var i = 0; i < ELButtons.length; i++){
//   ELButtons
// }

// ELButtons.forEach(function(button) {
//   button.addEventListener("click", function() {
//     console.log('whaddup');
//   });
// });
  // if (typeof holdingSum !== 'undefined'){
  //   console.log('whaddup');
  // }
  // if (){
  //   console.log("You clicked a button");
  // }


// if (typeof holdingSum !== 'undefined')


// let buttons = document.querySelectorAll('button');

// buttons.forEach(function(button) {
//   button.addEventListener("click", function() {
//   if (typeof firstSum !== 'undefined'){
//     console.log('next calc is working');
//     nextSum = finalCalc(firstSum, op1, num2);
//   }
//   if (typeof num1 !== 'undefined' && typeof op1 !== 'undefined' && typeof num2 !== 'undefined'){
//     console.log("You clicked a button");
//       firstSum = finalCalc(num1, op1, num2);
//       console.log("firstSum result: " + firstSum);
//       clearTemp();
//       return firstSum;
//   }
//   });
// });