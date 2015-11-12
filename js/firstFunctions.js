 //------------------------------Start of smallerLarger()----------
 function smallerLarger(){
 var number1 = prompt("Give me a number!");
 var number2 = prompt("Give me another number!");

 if ((isNaN(number1) || isNaN(number2)) || (number1==="" || number2==="")) {
  alert("I need two actual numbers!");
  smallerLarger();
  return;
 }  else if (number1 > number2) {
    alert("The first number, " + number1 + " is larger than the second number, " + number2 + "!");
 }  else if (number2 > number1) {
    alert("The second number, " + number2 + " is larger than the first number, " + number1 + "!");
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

//-----------------------------/End of isString()------------------
function concatenator() {
  var ask = true;

  var res = prompt("I can concatenate some Strings for you. Give me one to start with!");

  while (ask===true) {
    if (confirm("Let's add more! Press 'cancel' to stop here!")) {
     res += " ";
      res += prompt("What would you like to add?");
    } else {
        ask = false;
        alert("Okay, your new String is logged in the console!");
        console.log(res);
    }
  }


  }
