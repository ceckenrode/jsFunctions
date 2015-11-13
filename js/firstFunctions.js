 //------------------------------Start of smallerLarger()----------
 /* We ask the user for two numbers. If number 1 or number 2 aren't actually numbers we alert the user of this and then
  call the function recursively or from within the function to restart the function. Otherwise if the user gives us
  two numbers we check if they are either smaller, larger, or equal to eachother and then alert the user to this. */
 function smallerLarger() {
   var number1 = prompt("Give me a number!");
   var number2 = prompt("Give me another number!");

   if (isNaN(number1) || isNaN(number2)) {
     alert("I need two actual numbers!");
     smallerLarger();
     return;
   } else if (number1 > number2) {
     alert("The first number, " + number1 + " is larger than the second number, " + number2 + "!");
   } else if (number2 > number1) {
     alert("The second number, " + number2 + " is larger than the first number, " + number1 + "!");
   } else {
     alert("The numbers are equal to eachother!!!");
   }
 }

 //-------------------------------/End of smallerLarger()-----------

 //------------------------------Start of isString()----------------

 /* The function checks if the String is null or "" and if so it alerts you that the String is blank. If isNaN is called on the 
 String and returns true, then we know the input is not a number, so a String since that's the only other input we can put into
 the prompt. Otherwise it alerts us that the input is a number.  */

 function isString() {
   var input = prompt("Give me some input and I will let you know what type it is!");
   if (input === "") {
     alert("This is a blank String!!!");
   } else if (isNaN(input)) {
     alert("This is a String!!!");
   } else {
     alert("This is a number!!!");
   }
 }

 //-----------------------------/End of isString()------------------

 /* We first initate 3 variables. 'ask' is the first. We initialize the variable with a value of true. This will help us determine
 when to end the program. 

 The second variable is 'n' which will serve as our counter. This will serve to count how many Strings we
 have added. We initalize it as 1, because even if the user enters nothing, "" is still technicaly a string. We increment this value
 every time the user adds a new String. 

 Our last variable is 'res', which will hold the result of the combination of all of the Strings we collect from the user. We initate
 it with the value we collect when we first ask the user for input. 

 We then have a while loop. At the end of executing all of the instructions in this loop, if ask === false, the program loop will not
 run again. ask only gets set to false when the user hits cancel when asked to add another string.

 Everytime we add a String, we increment n by one. 

 If n is equal to 1, alert the user that they have added 1 String. If n is more than one, we alert the user they have added n String(s).
  In either case we log the concatenated String to the console. 

  Only problem with this approach is that it can sometimes consider null to be a String if nothing is entered. This can be solved by storing 
  the Strings in an Array, and then iterating over that Array and pushing any non-null values to a new array and then joining it into a new
  String with " " as a seperator. At the moment I don't know all of the needed syntax to do this in JavaScript.  */

 function concatenator() {
   var ask = true;
   var n = 1;
   var res = prompt("I can concatenate some Strings for you. Give me one to start with!");

   while (ask === true) {
     if (confirm("Let's add more! Press 'cancel' to stop here!")) {
       res += " ";
       res += prompt("What would you like to add?");
       n += 1;
     } else {
       ask = false;
       if (n === 1) {
         alert("Okay, that's " + n + " String! Your new String is logged in the console!");
         console.log("Your concatenated String is: " + res);
       } else {
         alert("Okay, that's " + n + " Strings! Your new String is logged in the console!");
         console.log("Your concatenated String is: " + res);
       }
     }
   }
 }