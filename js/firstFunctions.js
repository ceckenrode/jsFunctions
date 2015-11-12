 //------------------------------Start of smallerLarger()----------
 function smallerLarger(){
 var number1 = prompt("Give me a number!");
 var number2 = prompt("Give me another number!");

 if ((isNaN(number1) || isNaN(number2)) || (number1==="" || number2==="")) {
  alert("I need two actual numbers!");
  smallerLarger();
  return;
 }  else if (number1 > number2) {
    alert("The first number is larger than the second number!!!");
 }  else if (number2 > number1) {
    alert("The second number is larger than the first number!!!");
 }  else {
    alert("The numbers are equal to eachother!!!");
 }
}

//-------------------------------/End of smallerLarger()-----------

//------------------------------Start of isString()----------------
  function isString() {
  var input = prompt("Give me some input and I will let you know what type it is!");
  if (input === ""){
  alert("This is a blank String!!!");
  } else if (isNaN(input)){
    alert("This is a String!!!");
  } else {
    alert("This is a number!!!");
  }
}