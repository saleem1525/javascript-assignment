// chapter_1
// 1.  Write a script to greet your website visitor using JS alert box. 
alert("Welcome to Our Website!!!");
// 2. Write a script to display following message on your web page: 
alert("Error! Please enter a valid password.");
// 3. Write a script to display following message on your web page: (Hint : Use line break) 
alert("Welcome to JS Land...\nHappy Coding!");
// 4. Write a script to display following messages in sequence: 
alert("Welcome to JS Land...");
alert("Happy Coding!");
// 5. Generate the following message through browser’s developer console: 
console.log("Hello... I can run JS through my web browser's console");

// chapter_2
// 1.  Declare a variable called username. 
var username = "Saleem";
console.log (username);



// 2. Declare a variable called myName & assign to it a string that represents your Full Name. 
var myName = 'Saleem Raza';
var fullName = 'Saleem' + "  " + 'Raza';
console.log (fullName);




// 3. Write script to 
// a) Declare a JS variable, titled message. 
// b) Assign “Hello World” to variable message 
// c) Display the message in alert box. 
var my_var = "Hello World!"
console.log (my_var)





// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes. 
var a = "Jhone";
var b = "Doe";
alert(a +"  "+ b);

var a = "15";
var b = "old";
alert(a +" years "+ b);

var a = "Certified";
var b = "Development";
alert(a +" Mobile Application "+ b);




// 5. Write a script to display the following alert using one JS variable: 
var a = "PIZZA";
var b = "PIZZ";
var c = "PIZ";
var d = "PI";
var e = "P";
alert(a +"\n"+ b +"\n" + c +"\n" + d +"\n" + e);


// 6. Declare a variable called email and assign to it a string that represents your 
// Email Address(e.g. example@example.com). Show the blow mentioned message in an 
// alert box.(Hint: use string concatenation) 
var email = "example@example.com" ;
alert("My email address is " + email);



// 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. 
// Display the following message in an alert box: 
var book = "A smarter way to learn JavaScript" ;
alert("I am trying to learn from the Book " + book);

// 8. Write a script to display this in browser through JS 
document.write("Yah! I can write HTML content through JavaScript");
document.write("<br>");


// 9. Store following string in a variable and show in alert and browser through JS 
alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
document.write("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")




// chapter_3



// 1.  Declare a variable called age & assign to it your age. Show your age in an alert box. 
var age ="15";
alert( 'I am ' +  age +  " years old");



// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. 
// Show his/her number of visits on your web page. For example: “You have visited this site N times”. 




// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: 
var birthYear = 1990;
document.write(" My birth year is " + birthYear );
document.write("<br>");

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables 
// the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to 
// order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.  


var Visitor = " John Doe "
var Product =  " T-shirt(s) "
var Quantity =  " 5 "
document.write( Visitor + " order " + Quantity + Product +   " on XYZ Clothing store ");






// chapter_4

// 1.  Declare 3 variables in one statement. 
var fname = "Saleem"; 
var lname = "Raza";
var age = 23;
document.write(fname + " " + lname + " " + age + "<br>");
document.write("<br>")


// 2. Declare 5 legal & 5 illegal variable names
// 5 legal variable names
document.write("1. MyVariable"+ "<br>"+ 
'2. MYVARIABLE ' + "<br>"+ '3. _myvariable ' + "<br>"+'4. $myvariable '+ "<br>"+ '5. _9pins '+ "<br>"+ "<br>")
// 5 illegal variable names
document.write("1. My Variable" + "<br>"+ "2. 9pins" + "<br>"+   "3. a+c"  + "<br>"+ "4. testing1-2-3" + "<br>"+
"5. O'Reilly" + "<br>" + "<br>" ) 
 
 
// 3. Display this in your browser 
// a)  A heading stating “Rules for naming JS variables” 
document.write ("Rules for naming JS variables"+ "<br>"+ "<br>")
// b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable 
document.write ("Variable names can only contain letters, digits, _ and $. For example $my_1stVariable "+ "<br>");
// c) Variables must begin with a ______, ______ or _____. For example $name, _name or name 
document.write ("Variables must begin with a letter, an underscore (_) or a dollar sign ($). For example $name, _name or name "+ "<br>")
// d) Variable names are case _________ 
document.write ("Variable names are case sentitive"+ "<br>")
// e) Variable names should not be JS _________ 
document.write ("Variable names should not be JS Keywords"+ "<br>")




// chapter_5



// 1.  Write a program that take two numbers & add them in a new variable. Show the result in your browser.    
var x = 3;         // assign the value 3 to x
var y = 5;         // assign the value 5 to y
var z = x + y;     // assign the value 8 to z (x + y)
document.write(" Sum of "+ x + " and " + y + " is " + z + "<br>" );

// 2. Repeat task1 for subtraction, multiplication, division & modulus. 
var z = x - y;     // assign the value -2 to z (x - y)
document.write(" Subtraction of "+ x + " and " + y + " is " + z + "<br>" );
var z = x * y;     // assign the value 7 to z (x * y)
document.write(" Multiplication of "+ x + " and " + y + " is " + z + "<br>" );
var z = x / y;     // assign the value 7 to z (x / y)
document.write(" Division of "+ x + " and " + y + " is " + z + "<br>" );
var z = x % y;     // assign the value 7 to z (x % y)
document.write(" Modulus of "+ x + " and " + y + " is " + z + "<br>" + "<br>" );

// 3. Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.  
// c. Initialize the variable with some number. 
document.write("Value after variable declaration is undefined" + "<br>")
var a = 5;  // d. Show the value of variable in your browser like “Initial value: 5”. 
document.write("Initial value: " + a + "<br>")
var b = ++a;    // e. Increment the variable. 
// f. Show the value of variable in your browser like “Value after increment is: 6”. 
document.write("Value after increment is: " + b + "<br>")
var c = 7;         // g. Add 7 to the variable. 
var d = b + c;     // assign the value 13 to d (b + c)
// h. Show the value of variable in your browser like “Value after addition is: 13”. 
document.write("Value after addition is: " + d + "<br>" );
var e = --d;    // i. Decrement the variable. 
// j. Show the value of variable in your browser like “Value after decrement is: 12”. 
document.write("Value after decrement is: " + e + "<br>")
var f = 3; 
var g = e % f;      // k. Show the remainder after dividing the variable’s value by 3.  
document.write("The remainder is : " + g + "<br>" + "<br>") // l. Output : “The remainder is : 0”. 


// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable 
// & calculate the cost of buying 5 tickets to a movie. Example output: 
var x = 600; 
var y = 5; 
var z = x * y; 
document.write("Total cost to buy " + y + " tickets to a movie is " + z +" PKR " + "<br>" + "<br>")


// 5. Write a script to display multiplication table of any number in your browser. E.g 
var x = 4;
document.write("Table of " + x + "<br>");
for(var i=1; i<=10; i++){
document.write(x + " x " + i + " = " +  x * i + "<br>")};
document.write("<br>")

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
var celsius = 25; // a.  Store a Celsius temperature into a variable. 
var celsiusInF = (celsius * 9) / 5 + 32; // b. Convert it to Fahrenheit & output “NN o C is NN o F”. 
document.write(celsius + '°C is ' + celsiusInF + '°F'+ "<br>");
var fahrenheit = 70; // c. Now store a Fahrenheit temperature into a variable. 
var fahrenheitInC = ((fahrenheit - 32) * 5) / 9; // d. Convert it to Celsius & output “NN o F is NN o C”. 
document.write(fahrenheit + '°F is ' + fahrenheitInC + '°C'+ "<br>"+ "<br>");


// 7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. 
// Store the following in variables 
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges 
// Compute the total cost & show the receipt in your browser. 

document.write("Shopping Cart " + "<br>" + "<br>");
var a = 650;
document.write("Price of item 1 is  " + a + "<br>");
var b = 3;
var c = a * b;
document.write("Quantity of item 1 is  " + b + "<br>");
var d = 100;
document.write("Price of item 2 is  " + c + "<br>");
var e = 7;
var f = d * e;
document.write("Quantity of item 2 is  " + d + "<br>");
var g = 100;
document.write("Shipping Charges  " + e + "<br>");
var h = c + f + g; 
document.write("Total cost of your order is " + h + "<br>");


// 8. Store total marks & marks obtained by a student in 2 variables. 
// Compute the percentage & show the result in your browser 
document.write("Marks Sheet " + "<br>" + "<br>");
var a = 980; 
document.write("Total marks: " + a + "<br>");
var b = 804; 
document.write("Marks obtained: " + b + "<br>");
var c = b*100/a;
document.write("Percentage: " + c + "%" + "<br>");



// 9. Assume we have 10 US dollars & 25 Saudi Riyals. 
// Write a script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression. 
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 
document.write("Currency in PKR " + "<br>" + "<br>");
var a = 104.80;
var b = 28;
var c = 10;
var d = 25;
var e = a * c;
var f = b * d;
var g = e + f;
document.write("Total Currency in PKR: " + g + "<br>"+ "<br>");


// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 Perform all calculations in a single expression 
var a = 10;
var b = 5;
var c = 10;
var d = 2;
var e = (a + b) * c;
var f = e / d;
document.write("Result: " + f + "<br>" + "<br>");


// 11.  The Age Calculator: Forgot how old someone is? 
// Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored values. 
// Output them to the screen like so: “They are either NN or NN years old”. 
document.write("Age Calculator " + "<br>");
var a = 2020;
document.write(" Current Year: " + a + "<br>" );
var b = 1990;
document.write("Birth Year: " + b + "<br>" );
var c = a - b;
document.write("Your age is: " + c + "<br>" + "<br>");


// 12.  The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable. 
// b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r 2 , π = 3.142) 
document.write("The Geometrizer " + "<br>");
var a = 20;
document.write(" Radius of a circle: " + a + "<br>" );
var circumference = 3.142 * 2*a;
document.write("The circumference is " + circumference + "<br>" );
var area = 3.142 * a*a;
document.write("The area is " + area + "<br>" + "<br>");


// 13.  The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? 
// Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of your life. 
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”. 
document.write("The Lifetime Supply Calculator " + "<br>");
document.write("Favorite Snack: chocolate chip" + "<br>");
var a = 15;
document.write("Current age: " + a + "<br>");
var b = 65;
document.write("Estimated Maximum Age: " + b + "<br>");
var c = 3;
document.write("Amount of snacks per day: " + c + "<br>");
var d = c * (b - a);
var message = 'You will need ' + d + ' chocolate chip to last you until the ripe old age of ' + b;
document.write(message);




// chapter_6 to 9


// 1.  Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:    
document.write("Result: " + "<br>");
var a = 10;
document.write("The value of a is: " + a + "<br>" + "<br>");
document.write("*******************" + "<br>" + "<br>");
var b = ++a;
document.write("The value of ++a is: " + b + "<br>");
document.write("Now the value of a is: " + b + "<br>" + "<br>");
document.write("The value of a++ is: " + b + "<br>");
var c = ++b;
document.write("Now the value of a is: " + c + "<br>" + "<br>");
var d = --c;
document.write("The value of --a is: " + d + "<br>");
document.write("Now the value of a is: " + d + "<br>" + "<br>");
document.write("The value of a-- is: " + d + "<br>");
var e = --d;
document.write("Now the value of a is: " + e + "<br>" + "<br>");



// 2. What will be the output in variables a, b & result after execution of the following script: 
// var a = 2, b = 1; 
// var result = --a - --b + ++b + b--; 
// Explain the output at each stage: 
// --a; 
// --a - --b; 
// --a - --b + ++b; 
// --a - --b + ++b + b--; 
var a = 2, b = 1;
document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
var result = --a - --b + ++b + b--;
document.write("result is: " + result + "<br>" + "<br>");


// 3. Write a program that takes input a name from user & greet the user. 
var username = prompt("Enter your name: ", "");
if ("Your name is " + username) {
  document.write("Hello, " + username + "!" + "<br>" + "<br>");
} else {
  document.write("Hello, world!" + "<br>" + "<br>");
}

// 5. Write a program to take input a number from user & does not enter a new number, multiplication table of 5 should be displayed by default. 
var multiplier = prompt("Enter a multiplier: ");
for (var number = 5; number <= 10; number++) {
  document.writeln(number * multiplier + "<br>");
}
document.writeln("<br>");



// 6. Take 
// a) Take three subjects name from user and store them in 3 different variables. 
// b) Total marks for each subject is 100, store it in another variable. 
// c) Take obtained marks for first subject from user and stored it in different variable. 
// d) Take obtained marks for remaining 2 subjects from user and store them in variables. 
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table) 
document.write("Subject Total Marks Obtained Marks Percentage" + "<br>");
var a = prompt("Enter a subject1: ");
var b = prompt("Enter a subject2: ");
var c = prompt("Enter a subject3: ");
var d = 100;
var e = +prompt("Enter a obtained marks: ");
var f = +prompt("Enter a obtained marks: ");
var g = +prompt("Enter a obtained marks: ");
var h = e*100/d;
document.write(a +" "+ d + " " + e + "  "  + h + "%" + "<br>");
var i = f*100/d;
document.write(b +" "+ d + "   " + f + "   "  + i + "%" + "<br>");
var j = g*100/d;
document.write(a +"  "+ d + "  " + g + "   "  + j + "%" + "<br>");
var k = e + f + g
var l = h + i + j
document.write( d*3 + "  " + k + "  "  + l  + "%" + "<br>");




// chapter_9 to 11



// 1.  Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights” 
var cityname = prompt("Enter city name: ");
if (cityname == "karachi") {
  document.write("Welcome to city of lights" + "<br>" + "<br>")
};

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. 
// If the user is female, give the message: Good Morning Ma’am. 
var gender = prompt("Enter gender: ");
if (gender == "male") {
  document.write("Good Morning Sir" + "<br>" + "<br>")
};
if (gender == "female") {
  document.write("Good Morning Ma’am" + "<br>" + "<br>")
};


// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table: 

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, 
//   show the message “Please refill the fuel in your car” 
var fuel = prompt("Enter fuel in car (in liters):  ");
if (fuel < 0.25) {
  document.write("Please refill the fuel in your car" + "<br>" + "<br>");
}


// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs. 
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}
if ("car" < "cat") {
  alert("car is smaller than cat");
} 


// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. 
// Take percentage & compute grade as per following table: 
document.write("Marks Sheet" + "<br>");
var a = +prompt("Enter marks obtained in three subjects: ");
var b = +prompt("Enter total marks: ");
document.write("Total marks : " + b + "<br>");
document.write("Marks obtained : " + a + "<br>");
var c = a*100/b;
document.write("Percentage : "  + c + "%" + "<br>");
if (c >= 80){
document.write("Grade :  A-one" + "<br>");
document.write("Remarks :  Excellent" + "<br>");
}
else if (c >= 70){
  document.write("Grade :  A" + "<br>");
  document.write("Remarks :  Good" + "<br>");
  }
else if (c >= 60) {
  document.write("Grade :  B" + "<br>");
  document.write("Remarks :  You need to improve" + "<br>");
}
else if (c < 60) {
  document.write("Grade :  Fail" + "<br>");
  document.write("Remarks :  Sorry" + "<br>");
}
document.write("<br>");



// 7. Guess game: 
// Store a secret number (ranging from 1 to 10) in a variable. 
// Prompt user to guess the secret number. 
// a. If user guesses the same number, show “Bingo! Correct answer”. 
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”. 
//create secret number
var secretNumber = 4;

//ask user for a number
var StringGuess = prompt("Guess the number!");
var guess = Number(StringGuess);

//check if guess is right
if (guess === secretNumber) {
    document.write("Bingo! Correct answer"+ "<br>" + "<br>");
}

//otherwise, check if higher
else if (
    guess == secretNumber + 1) {
    document.write("Close enough to the correct answer"+ "<br>" + "<br>")
}




// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3. 
var x = prompt("Enter the number: ");
if(x % 3 === 0 ) {
  document.write("number is divisible"+ "<br>" + "<br>");
} 



// 9. Write a program that checks whether the given input is an even number or an odd number. 
var x = prompt("Enter the number: ");
if ( x % 2 == 0) {
	document.write('Even Number'+ "<br>" + "<br>");
}else{
	document.write('Odd Number'+ "<br>" + "<br>");
}

// 10.  Write a program that takes temperature as input and shows a message based on following criteria 
// a. T > 40 then “It is too hot outside.” 
// b. T > 30 then “The Weather today is Normal.” 
// c. T > 20 then “Today’s Weather is cool.” 
// d. T > 10 then “OMG! Today’s weather is so Cool.” 

var a = +prompt("Enter Temprature: ");
if (a > 40){
document.write("It is too hot outside." + "<br>");
}
else if (a > 30){
  document.write("The Weather today is Normal." + "<br>");
}
else if (a > 20) {
  document.write("Today’s Weather is cool." + "<br>");
}
else if (a < 10) {
  document.write("OMG! Today’s weather is so Cool." + "<br>");
}
document.write("<br>");


// 11.  Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: 
// a. First number 
// b. Second number 
// c. Operation (+, -, *, /, %) 
// Compute & show the calculated result to user. 
var a = +prompt("First number: ");
var b = prompt("Operation: ");
var c = +prompt("Second number: ");
if (b == "+"){
  document.write(a + c + "<br>")
}
else if (b == "-"){
  document.write(a - c + "<br>");
}
else if (b == "*") {
  document.write(a * c + "<br>");
}
else if (b == "/") {
  document.write(a / c + "<br>");
}
document.write("<br>");


// chapter_12 to 13





// 1.  Write a program that takes a character (number or string) in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122). 




// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal. 
var a = +prompt("First number: ");
var b = +prompt("Second number: ");
if (a > 0 && b > 0 && a > b) {
  document.write("The larger number is " + a+ "<br>"+ "<br>");
} else if (a > 0 && b > 0 && a < b) {
  document.write("The larger number is " + b+ "<br>"+ "<br>");
} else if (a === b && a > 0 && b > 0) {
  document.write("Both numbers are equal!"+ "<br>"+ "<br>")
} else {
  document.write("Please add an integer!"+ "<br>"+ "<br>");
}


// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero. 
var a = +prompt("Enter number: ");
if (a > 0){
   document.write("Positive number"+ "<br>"+ "<br>") ;
}
else if (a == 0){
   document.write("Zero"+ "<br>"+ "<br>") ;
}
else{
   document.write("Negative number"+ "<br>"+ "<br>") ;
}


// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise 
var char = prompt("Enter a character: ");
if (char == 'a') {
  document.write("True"+ "<br>"+ "<br>");
}
else if (char == "e") {
  document.write("True"+ "<br>"+ "<br>");
}
else if (char == "i") {
  document.write("True"+ "<br>"+ "<br>");
}
else if (char == "o") {
  document.write("True"+ "<br>"+ "<br>");
}
else if (char == "u") {
  document.write("True"+ "<br>"+ "<br>");
}
else {
  document.write("False"+ "<br>"+ "<br>");
}

// 5. Write a program that 
// a. Store correct password in a JS variable. 
// b.  Asks user to enter his/her password 
// c.  Validate the two passwords: 
// i.  Check if user has entered password. If not, then give message “ Please enter your password” 
// ii.  Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. 
// Show “Incorrect password” otherwise. 

var password1 = prompt("Enter a password1: ");
var password2 = prompt("Enter a password2: ");

// If password not entered 
if (password1 == ''){
document.write("Please enter Password"+ "<br>"+ "<br>");
}

// If confirm password not entered 
else if (password2 == ''){
  document.write("Please enter confirm password"+ "<br>"+ "<br>");
}

// If Not same return False.     
else if (password1 != password2) {
  document.write("\nPassword did not match: Please try again..."+ "<br>"+ "<br>");
}

// If same return True. 
else {
  document.write("Password Match: Welcome to GeeksforGeeks!"+ "<br>"+ "<br>");
} 


// 6. This if/else statement does not work. Try to fix it: 
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; 
// else 
// greeting = "Good evening"; 
// } 
var greeting; 
var hour = prompt("Enter the hour: "); 
if (hour < 18) { 
  document.write(greeting = "Good day"+ "<br>"+ "<br>"); 
}
else {
document.write(greeting = "Good evening"+ "<br>"+ "<br>"); 
} 


// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. 
// Implement the following case using if, else & else if statements 
var n = prompt("Enter a number: ");
if (n >= 0000 && n < 1200)                  
  { document.write("Good morning!"+ "<br>"+ "<br>")}
else if (n >= 1200 && n < 1700)
  { document.write("Good afternoon!"+ "<br>"+ "<br>")}
else if (n >= 1700 && n < 2100)
  { document.write("Good evening!"+ "<br>"+ "<br>")}
else if (n >= 2100 && n <= 2359)
  { document.write("Good night!"+ "<br>"+ "<br>")}
else
  { document.write("You did not enter a number!"+ "<br>"+ "<br>")}




// chapter_14 to 16




// 1.  Declare an empty array using JS literal notation to store student names in future. 
var myArray = [];

// 2. Declare an empty array using JS object notation to store student names in future. 



// 3. Declare and initialize a strings array. 
var stringArray = ["one", "two", "three"];
document.write(stringArray + "<br>"+ "<br>"); 

// 4.  Declare and initialize a numbers array. 
var numericArray = [1, 2, 3, 4];
document.write(numericArray + "<br>"+ "<br>"); 

// 5.  Declare and initialize a boolean array. 
var booleanArray = [true, false, false, true];
document.write(booleanArray + "<br>"+ "<br>"); 

// 6. Declare and initialize a mixed array. 
var mixedArray = [1, "two", "three", 4];
document.write(mixedArray + "<br>"+ "<br>"); 

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). 
// Show the listed qualifications in your browser like: 
var nums = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("Qualifications:" + "<br>"+ "<br>"); 
document.write("1) "+ nums[0] + "<br>"); 
document.write("2) "+ nums[1] + "<br>"); 
document.write("3) "+ nums[2] + "<br>"); 
document.write("4) "+ nums[3] + "<br>"); 
document.write("5) "+ nums[4] + "<br>"); 
document.write("6) "+ nums[5] + "<br>"); 
document.write("7) "+ nums[6] + "<br>"); 
document.write("8) "+ nums[7] + "<br>" + "<br>"); 

// 8.  Write a program to store 3 student names in an array.Take another array to store score of these three students. 
// Assume that total marks are 500 for each student, display the scores & percentages of students like:
var students = ["Michel", "John", "Tony"];
var score = [320, 230, 480];
var percentages = score/500;
document.write("Score of "+ students[0] + " is " + score[0] + "." + " Percentages: " +  score[0]*100/500 + "%"  + "<br>"); 
document.write("Score of "+ students[1] + " is " + score[1] + "." + " Percentages: " +  score[1]*100/500 + "%"  + "<br>"); 
document.write("Score of "+ students[2] + " is " + score[2] + "." + " Percentages: " +  score[2]*100/500 + "%"  + "<br>" + "<br>"); 


// 9. Initialize an array with color names. Display the array elements in your browser. 
var color = ["blue","yellow","green"];
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. 
color.unshift("white");
// Display the updated array in your browser. 
document.write(color + "<br>"); 
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser. 
color.push("red");
// Display the updated array in your browser.  
document.write(color + "<br>"); 
// c. Add two more color to the beginning of the array. 
color.unshift("orange", "brown");
document.write(color + "<br>"); 
// d. Delete the first color in the array. Display the updated array in your browser. 
color.shift();
document.write(color + "<br>"); 
// e. Delete the last color in the array. Display the updated array in your browser. 
color.pop();
document.write(color + "<br>"); 
// f. Ask the user at which index he/she wants to add a color & color name. 
// Then add the color to desired position/index. . Display the updated array in your browser. 
color.splice( 1, 0, "orange"); // at index position 1, remove 0 elements, then add "orange" to that position
document.write(color + "<br>"); 
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. 
// Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser. 
color.splice( 1, 2); // at index position 1, remove 2 elements
document.write(color + "<br>" + "<br>"); 

// 10.  Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method. 
var score = [320,230,480,120];
document.write("Scores of Students: " + score + "<br>"); 
score.sort((a, b) => a - b);
document.write("Ordered Scores of Students: " + score + "<br>"+ "<br>"); 


// 11.  Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. 
var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("Cities list: " + "<br>" + cities  + "<br>" + "<br>");
var city = cities.slice(2, 4);
document.write("Selected cities list: " + "<br>" + city + "<br>" + "<br>"); 


// 12.   Write a program to create a single string from the below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method) 
var arr = ["This", "is" , "my" ,  "cat"]; 
document.write("Array: " + "<br>" + arr  + "<br>" + "<br>");
var str = ["This is my cat"]; 
document.write("String: " + "<br>" + str  + "<br>" + "<br>");

// 13.  Create a new array. Store values one by one in such a way that you can 
// access the values in the order in which they were stored. (FIFO-First In First Out)  
var arr = ["keyboard", "mouse" , "printer" ,  "monitor"]; 
document.write("Devices: " + "<br>" + arr  + "<br>" + "<br>");
document.write("Out: " + "<br>" + arr[0]  + "<br>");
document.write("Out: " + "<br>" + arr[1]  + "<br>");
document.write("Out: " + "<br>" + arr[2]  + "<br>");
document.write("Out: " + "<br>" + arr[3]  + "<br>" + "<br>");

// 14.  Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)  
var arr = ["keyboard", "mouse" , "printer" ,  "monitor"]; 
document.write("Devices: " + "<br>" + arr  + "<br>" + "<br>");
document.write("Out: " + "<br>" + arr[3]  + "<br>");
document.write("Out: " + "<br>" + arr[2]  + "<br>");
document.write("Out: " + "<br>" + arr[1]  + "<br>");
document.write("Out: " + "<br>" + arr[0]  + "<br>" + "<br>");

// 15.  Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in your browser using document.write() method:
var arr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"]; 
document.write(arr[0]  + "<br>");
document.write(arr[1]  + "<br>");
document.write(arr[2]  + "<br>");
document.write(arr[3]  + "<br>");
document.write(arr[4]  + "<br>");
document.write(arr[5]  + "<br>");



// chapter_17 to 20


// 1.  Declare and initialize an empty multidimensional array. (Array of arrays)    
var arr = [[], []];


// 2. Declare and initialize a multidimensional array representing the following matrix:    
var temps = [
  ["0 1 2 3"],
  ["1 0 1 2"],
  ["2 1 0 1"],
];
// Prints first array 
for (var i = 0; i < temps.length; i++) {
  document.write(temps[i] + "<br>");
}
document.write("<br>");

// 3. Write a program to print numeric counting from 1 to 10.    
for (var a = 1; a < 11; a++) {
  document.write(a + "<br>");
}
document.write("<br>");


// 4.  Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.    

var n = prompt("Enter a number to show its multiplication table");
var len = prompt("Enter length multiplication table");
document.write("Multiplication table of " + n + "<br>");
document.write("Length " + len + "<br>" + "<br>");
for (var i = 1; i <= len; ++i) {
  document.write(n + " * " + i + " = " + n * i + "<br>");
}


// 5. Write a program to print items of the following array using for loop: 
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”] 
var a = ["apple", "banana", "mango", "orange", "strawberry"];
var len = a.length;	//no. of elements of the array

//print elements of the array
for (var i = 0; i < len; i++) {
  document.write(a[i] + "<br>");
}
document.write("<br>");
for (var i = 0; i < len; i++) {
  document.write("Element at index " + i + " is " + " " + a[i] + "<br>")
}
document.write("<br>");


// 6. Generate the following series in your browser. See example output. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
document.write("Counting: " + "<br>" + "<br>");
document.write(arr1 + "<br>" + "<br>");

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.write("Reverse counting: " + "<br>" + "<br>");
var arr1 = arr.reverse();
document.write(arr1 + "<br>" + "<br>");
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
document.write("Even: " + "<br>" + "<br>");
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var len = arr.length;
for (var i = 0; i < len; i++) {
  if (arr[i] % 2 === 0) {
    document.write(arr[i] + ", ");
  }
}
document.write("<br>" + "<br>");
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
document.write("Odd: " + "<br>" + "<br>");
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var len = arr.length;
for (var i = 1; i < len; i++) {
  if (i % 2 !== 0) {
    document.write(arr[i] + ", ");
  }
}
document.write("<br>" + "<br>");
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("Series: " + "<br>" + "<br>");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var len = arr.length;
for (var i = 0; i < len; i++) {
  if (arr[i] % 2 === 0) {
    document.write(arr[i] + "k, ");
  }
}
document.write("<br>" + "<br>");

// 7. You have an array 
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an array. 
// After searching, prompt the user whether the given item is found in the list or not. Example: 
var food = prompt("Welcome to ABC Bakery. what do you want to order sir/ma'am?");
if (food.indexOf("cake") !== -1) {
  document.write(food + " is availabe at index " + " in our bakery " + "<br>" + "<br>")
}
else if (food.indexOf("apple pie") !== -1) {
  document.write(food + " is availabe at index " + " in our bakery " + "<br>" + "<br>")
}
else if (food.indexOf("cookie") !== -1) {
  document.write(food + " is availabe at index " + " in our bakery " + "<br>" + "<br>")
}
else if (food.indexOf("chips") !== -1) {
  document.write(food + " is availabe at index " + " in our bakery " + "<br>" + "<br>")
}
else if (food.indexOf("patties") !== -1) {
  document.write(food + " is availabe at index " + " in our bakery " + "<br>" + "<br>")
}
else {
  document.write("We are sorry. " + food + " is not available in our bakery" + "<br>" + "<br>")
}


// 8. Write a program to identify the largest number in the given array. 
var array = [24, 53, 78, 91, 12];
document.write("Array items: " + array + "<br>")
var largest = 0;

for (i = 0; i <= largest; i++) {
  if (array[i] > largest) {
    var largest = array[i];
  }
}
document.write("The largest number is " + largest + "<br>" + "<br>");

// 9. Write a program to identify the smallest number in the given array. 
// A = [24, 53, 78, 91, 12] 
var array = [24, 53, 78, 91, 12];
document.write("Array items: " + array + "<br>")
var minvalue = array[0];
for (var i = 0; i < array.length; i++) {
  if (array[i] < minvalue) {
    minvalue = array[i];
  }

}
document.write("The smallest number is " + minvalue + "<br>" + "<br>");

// 10.  Write a program to print multiples of 5 ranging 1 to 100. 
var x = 5;
for(var i=1; i<=20; i++){
document.write(x * i  + ", ")};
document.write("<br>")

// chapter_21 to 25


// 1.  Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. 
// Greet the user using his full name. 
var fname = prompt("Enter first name: ");
var lname = prompt("Enter last name: ");
document.write("Welcome " + fname + " " + lname + "<br>" + "<br>");


// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser 

var mobile = prompt("Enter mobile model: ");
var len = mobile.length;
document.write("My favorite phone is: " + mobile + "<br>");
document.write("Length of string: " + len + "<br>" + "<br>");


// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser  .  

var str = ("Pakistani");
var n = str.indexOf("n");
document.write("String: " + str + "<br>");
document.write("Index of 'n': " + n + "<br>" + "<br>");


// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser .  
var str = ("Hello World");
var n = str.lastIndexOf("l");
document.write("String: " + str + "<br>");
document.write("Last index of 'l': " + n + "<br>" + "<br>");


// 5. Write a program to find the character at 3 rd  index in the word “Pakistani” and display the result in your browser .  
var str = "Pakistani";
var res = str.charAt(3);
document.write("String: " + str + "<br>");
document.write("Character at index 3: " + res + "<br>" + "<br>");


// 6. Repeat Q1 using string concat() method. 
var fname = prompt("Enter first name: ");
var lname = prompt("Enter last name: ");
document.write("Welcome " + fname.concat(" ", lname) + "<br>" + "<br>");


// var hello = 'Hello, '
// console.log(hello.concat('saleem', '. Have a nice day.'))
// // Hello, saleem. Have a nice day.



// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser. 
var city = ("Hyderabad");
document.write("City: " + city + "<br>");
var newText = city.replace("Hyder", "Islam");
document.write("After replacement: " + newText + "<br>" + "<br>");



// 8.  Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. 
var message = ("Ali and Sami are best friends. They play cricket and football together."); 
document.write("Paragraph: " + message + "<br>");
var newText = message.replace(/and/g, "&");
document.write("After replacement: " + newText + "<br>" + "<br>");

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser. 
var str = ("472");
document.write("Value: " + str + "<br>");
document.write("Type: " + "string" + "<br>");
var num = parseInt(str);
document.write("Value: " + num + "<br>");
document.write("Type: " + "number" + "<br>" + "<br>");

// 10.  Write a program that takes user input. Convert and show the input in capital letters. 
var str = prompt("Enter your dryfruit name: ");
document.write("User input: " + str + "<br>");
var cityToCheck = str.toUpperCase();
document.write("Upper case: " + cityToCheck + "<br>" + "<br>");

// 11.  Write a program that takes user input. Convert and show the input in title case. 
var str = prompt("Enter program name: ");
document.write("User input: " + str + "<br>");
var fchar = str.slice(0,1);
fchar = fchar.toUpperCase();
var ochar = str.slice(1);
ochar = ochar.toLowerCase();
var cityToCheck = fchar + ochar;
document.write("Title case: " + cityToCheck + "<br>" + "<br>");


// 12.  Write a program that converts the variable num to string. 
// var num = 35.36 ; 
// Remove the dot to display “3536” display in your browser. 
var num = 35.36 ; 
document.write("Number: " + num + "<br>");
document.write("Result: " + num.toString()*100 + "<br>" + "<br>");   

// 13.  Write a program to take user input and store username in a variable. 
// If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ . 
//     Note: 
//     ASCII code of ! is 33 
//     ASCII code of , is 44 
//     ASCII code of . is 46 
//     ASCII code of @ is 64 

var str = prompt("Enter the username: ")
if (str.indexOf("!") >= 0 || str.indexOf(",") >= 0 || str.indexOf("@") >= 0 || str.indexOf(".") >= 0) {
    alert("Please enter a valid username");
    document.write(str + "<br>" + "<br>");
}
else {
    document.write(str + "<br>" + "<br>");
}


// 14.  You have an array 
// A = ["cake", "apple pie", "cookie", "chips", "patties"] 
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. 
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example: 
var A = ["cake","apple pie","cookie","chips","patties"];
var search=prompt("Welcome to ABC Bakery.What do you want to order Sir/Ma'm");
search = search.toLowerCase();
var size=A.length;
var index = A.indexOf(search);
if (index > -1) {
    document.write(search+" is available at index "+(index+1)+" of our bakery" + "<br>" + "<br>");
    check=true;
}
else {
    document.write("We are sorry "+search  +" is not available in our bakery" + "<br>" + "<br>");
}



// 15.  Write a program to take password as an input from user. The password must qualify these requirements: 
// a. It should contain alphabets and numbers 
// b. It should not start with a number 
// c. It must at least 6 characters long 
// If the password does not meet above requirements, prompt the user to enter a valid password. 
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document. 


// 16.  Write a program to convert the following string to an array using string split method. 
// var university = “University of Karachi”; 
// Display the elements of array in your browser. 
var university = ("University of Karachi"); 
var ar = university.split(''); // empty string separator
document.write( ar + "<br>" + "<br>"); // [ "a", "b", "c", "d", "e", "f", "g" ]


// 17.  Write a program to display the last character of a user input.

var str = ("Pakistan"); 
document.write("User input: " + str + "<br>")
var res = str.charAt(str.length-1); 
document.write("Last character of input: " + res + "<br>" + "<br>")
              
// 18.  You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string. 
// var str = "The quick brown fox jumps over the lazy dog";
// document.write("Text: " + str + "<br>");
// str = str.toLowerCase();



// chapter_26 to 30



// 1.  Write a program that takes a positive integer from user & display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number    
var num = prompt("Enter the number ");
document.write("number: " + num + "<br>");
var roundoff = (Math.round(num));
document.write("round off value: " + roundoff + "<br>");
var floor =  (Math.floor(num));
document.write("floor value: " + floor + "<br>");
var ceil = (Math.ceil(num));
document.write("ceil value: " + ceil + "<br>" + "<br>");


// 2. Write a program that takes a negative floating point number from user & display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number 
var num = prompt("Enter the number ");
document.write("number: " + num + "<br>");
var roundoff = (Math.round(num));
document.write("round off value: " + roundoff + "<br>");
var floor =  (Math.floor(num));
document.write("floor value: " + floor + "<br>");
var ceil = (Math.ceil(num));
document.write("ceil value: " + ceil + "<br>" + "<br>");

// 3. Write a program that displays the absolute value of a number. 
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5 
var num = -4;
var absolute = Math.abs(num);
document.write("The absolute value of " + num + " is " + absolute + "<br>" + "<br>");

// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.: 
var die1 = Math.floor( Math.random() * 6 ) +1;
var die2 = Math.floor( Math.random() * 6 ) +1;
if(die1 === die2){
    document.write("random dice value: " + die1 + "<br>" + "<br>");
  }
  else{
    document.write("rancdom dice value: " + die2 + "<br>" + "<br>");
  }

// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser.
var prob1 = Math.floor(Math.random() * 2) +1;
var prob2 = Math.floor(Math.random() * 2) +1;
if(prob1 === prob2){
   document.write(prob1  + "<br>" );
   document.write('random coin value: Heads' + "<br>" + "<br>");
 }
 else{
   document.write(prob2  + "<br>" );
   document.write('random coin value: Tails' + "<br>" + "<br>");
 }


//  6. Write a program that shows a random number between 1  and 100 in your browser. 
var prob1 = Math.floor(Math.random() * 101);
document.write('random number between 1 and 100: ' + prob1 + "<br>" + "<br>");



// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. 
// Possible user inputs can be: 
// a. 50 
// b. 50kgs 
// c. 50.2kgs 
// d. 50.2kilograms 


// 8. Write a program that stores a random secret number from 1 to 10 in a variable. 
// Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user. 
var num = Math.ceil(Math.random() * 10);
var guess = prompt("Enter a number between 1 and 10 ")
if (guess != num) {
    alert("Try again!");
}
else {
    alert('Congratulations!\nThe number was ' + num);
}







// chapter_31 to 34




// 1. Write a program that displays current date and time in your browser. 
var rightNow = new Date();
document.write(rightNow + "<br>" + "<br>");

// 2. Write a program that alerts the current month in words. For example December. 
var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var now       = new Date();
var thisMonth = months[now.getMonth()]; // getMonth method returns the month of the date (0-January :: 11-December)
document.write("Current month: " + thisMonth + "<br>" + "<br>");


// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun. 
var days = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat']
var date = new Date();
var day = date.getDay();
document.write('Today is ' + days[day] + "<br>" + "<br>");


// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today. 
var today = new Date();
if(today.getDay() == 6 || today.getDay() == 0) {
document.write("It's Fun day" + "<br>" + "<br>");
}


// 5. Write a program that shows the message “First fifteen days of the month” 
// if the date is less than 16 th  of the month else shows “Last days of the month”. 
var today = new Date();
if(today.getDate() <= 15)  {
document.write("First fifteen days of the month" + "<br>" + "<br>");
}
else{
document.write("Last days of the month" + "<br>" + "<br>");
}



// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like to represent the Date object. 
var rightNow = new Date();
document.write("Current date: " + rightNow + "<br>");
// var d = new Date('January 1, 1970'); 
// var n = d.getMilliseconds();
var d = new Date();
// day of the week from above Date Object is 
// being extracted using getDay() 
var n = d.getTime();
// Printing day of the week 
document.write("Elapsed milliseconds since January 1, 1970: " + n + "<br>");
var minutes = 1000 * 60;
var secondsSinceEpoch = (Date.now() / minutes)
document.write("Elapsed minutes since January 1, 1970: " + secondsSinceEpoch + "<br>" + "<br>");



// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 
var date_format = '12'; /* FORMAT CAN BE 12 hour (12) OR 24 hour (24)*/
var d           = new Date();
var hour        = d.getHours();  /* Returns the hour (from 0-23) */
var minutes     = d.getMinutes();  /* Returns the minutes (from 0-59) */
var ext;
if (date_format == '12') {
    if (hour > 12) {
        ext = 'PM';

        if (hour < 10) {
        } else if (hour == 12) {
            ext = 'AM';
        }
    }
    else if (hour < 12) {
        ext = 'AM';
    } else if (hour == 12) {
        ext = 'PM';
    }
}
document.write("It's " + ext + "<br>" + "<br>");

// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate. 
var d = new Date(2020, 11, 31, 00, 00);
document.write("Later date: " + d + "<br>" + "<br>");


// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1 st  Ramadan? 
// Note: 1 st  Ramadan was on June 18, 2015 
// JavaScript program to illustrate  
// calculation of no. of days between two date  

// To set two dates to two variables 
var date1 = new Date("06/18/2015");
var date2 = new Date();

// To calculate the time difference of two dates 
var Difference_In_Time = (date2.getTime() - date1.getTime()); 
  
// To calculate the no. of days between two dates 
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
var difference = Math.round(Difference_In_Days)
  
//To display the final no. of days (result) 
document.write(difference + " days have passed since 1st Ramadan,2015" + "<br>" + "<br>"); 



// 10.  Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015. 
date1 = new Date( "Dec 05, 2015 20:15:10" );
document.write("On reference date " + date2 + "<br>"); 
var date2 = new Date();
// To calculate the time difference of two dates 
var Difference_In_Time = (date2.getTime() - date1.getTime()); 
 
// To calculate the no. of days between two dates 
var seconds = Difference_In_Time / (1000); 
var difference = Math.round(seconds)
document.write(difference + " seconds had passed since beginning of 2015" + "<br>" + "<br>"); 



// 11.  Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and finally display the date object in your browser. 
var rightNow = new Date();
document.write("current date: " + rightNow + "<br>");
var pasthr = rightNow.getMinutes() - 60;
rightNow.setMinutes(pasthr);
document.write("1 hour ago, it was " + rightNow + "<br>" + "<br>");


// 12.  Write a program that creates a date object and show the date in an alert box that is reset to 100 years back? 
var d = new Date();
document.write("current date: " + d + "<br>");
var pastYear = d.getFullYear() - 100;
d.setFullYear(pastYear);
document.write("100 years back, it was " + d + "<br>" + "<br>");


// 13.  Write a program to ask the user about his age. Calculate and show his birth year in your browser. 
var number = prompt("Enter the age"); 
document.write("Your age is " + number + "<br>");
var date = new Date().getFullYear()
var birthyear = (date - number);
document.write("Your birth year is " + birthyear + "<br>" + "<br>");

// 14.  Write a program to generate your K-Electric bill in your browser. 
// All the amounts should be rounded off to 2 decimal places. Display the following fields: 
// a. Customer Name 
// b. Current Month 
// c. Number of units 
// d. Charges per unit 
// e. Net Amount Payable (within Due Date) 
// f. Late Payment Surcharge 
// g. Gross Amount Payable (after Due Date) 
// Where, 
// Net Amount Payable (within Due Date) = Number of units * Charges per unit 
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge 
document.write("K-Electric Bill " + "<br>" + "<br>");
var name = prompt("Enter the Customer Name "); 
document.write("Customer Name: " + name + "<br>");
var month = prompt("Enter the Current Month "); 
document.write("Month: " + name + "<br>");
var units = prompt("Enter the Number of units "); 
document.write("Number of units: " + units + "<br>");
var Charges = prompt("Enter the Charges per unit "); 
document.write("Charges per unit: " + Charges + "<br>" + "<br>");
var Payable = (units * Charges);
document.write("Net Amount Payable (within Due Date): " + Payable + "<br>");
var late = 350;
document.write("Late Payment Surcharge: " + late + "<br>");
var Surcharge = (Payable + late);
document.write("Gross Amount Payable (after Due Date): " + Surcharge + "<br>" + "<br>");




// chapter_35 to 38


// 1. Write a function that displays current date & time in your browser.  
function date() {
    var rightNow = new Date();
    document.write(rightNow + "<br>" + "<br>");
    }
    // Invoke the function
    date();
    
    // 2. Write a function that takes first & last name and then it greets the user using his full name. 
    function greet() {
       var fname =  prompt("Enter the first name: ");
       var lname =  prompt("Enter the last name: ");
       document.write("Hello " + fname + " " + lname + "<br>" + "<br>");
    }
    // Invoke the function
    greet();
    
    
    // 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.  
    function add() {
        var a,b;
        a = +prompt("Enter a 1st value");
        b = +prompt("Enter a 2nd value");
        var c = a + b;
        document.write("the sum of two numbers is " + c + "<br>" + "<br>");
    
    }
    add();
    
    
    // 4. Calculator:  
    // Write a function that takes three arguments num1, num2 & operator & compute the desired operation. 
    // Return and show the desired result in your browser. 
    function calculate() {
        var v1, v2, d;
        v1 = +prompt("Enter a 1st value");
        d = prompt("Enter a operator");
        v2 = +prompt("Enter a 2nd value");
        var result;
        if (d == "*"){
            result = v1 * v2;
        }
        else if (d == "/"){
            result = v1 / v2;
        }
        else if (d == "+"){
            result = v1 + v2;
        }
        else if (d == "-"){
            result = v1 - v2;
        }
        document.write("Result is " + result + "<br>" + "<br>")
    }
    calculate();
    
    
    
    // 5. Write a function that squares its argument. 
    function doMath(){
        var inputNum1 = +prompt("Enter the value");
        var c = (inputNum1 * inputNum1);
        document.write("Result is " + c + "<br>" + "<br>")
    }
    doMath();
    
    
    // 6. Write a function that computes factorial of a number.  
    function factorial(n) {
        var answer = 1;
        if (n == 0 || n == 1) {
            return answer;
        } else {
            for (var i = n; i >= 1; i--) {
                answer = answer * i;
            }
            return answer;
        }
    }
    var n = prompt("Enter a factnum");
    answer = factorial(n)
    document.write("The factorial of " + n + " is " + answer + "<br>" + "<br>");
    
    // 7. Write a function that take start and end number as inputs & display counting in your browser. 
    
    
    
    
    
    // 8. Write a nested function that computes hypotenuse of a right angle triangle.  
    // Take base and perpendicular as inputs. 
    // Outer function : calculateHypotenuse() 
    // Inner function: calculateSquare() 
    function calculateHypotenuse(){
        var base = +prompt("Enter the base");
        var perp = +prompt("Enter the perpendicular");
        var hypot = Math.sqrt(base*base + perp*perp);
        document.write("Result is " + hypot + "<br>" + "<br>");
    }
    calculateHypotenuse();
    
    // 9. Write a function that calculates the area of a rectangle. 
    //      A = width * height 
    //     Pass width and height in following manner: 
    // i.  Arguments as value 
    // ii.  Arguments as variables 
    var length = prompt("Enter a whole number for the length of your rectangle.");
    var width = prompt("Enter a whole number for the width of your rectangle.");
    function area(length, width) {
        return length * width;
    }
    function perimeter(length, width) {
        return 2 * (length + width);
    }
    
    document.write('The area of your rectangle is ' + area(length, width) +  "<br>");
    document.write('The perimeter of your rectangle is ' + perimeter(length, width) + "<br>" + "<br>");
    
    // 10.  Write a JavaScript function that checks whether a passed string is palindrome or not?   
    // A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.
    function checkPalindrom(){ 
    var hi = prompt("Enter a word");
    var bye = hi.split("").reverse().join("");
    if (hi == bye) {
        document.write('A palindrome is word' + "<br>" + "<br>");
    }
    else {
        document.write('Try again' + "<br>" + "<br>");
    }
    }
    checkPalindrom();
    
    
    // 11.  Write a JavaScript function that accepts a string as a parameter and 
    // converts the first letter of each word of the string in upper case.  
    // EXAMPLE STRING : 'the quick brown fox'  
    // EXPECTED OUTPUT : 'The Quick Brown Fox' 
    function titleCase(str) {
        var splitStr = str.toLowerCase().split(' ');
        var nstr = "";
        for (var i = 0; i < splitStr.length; i++) {
            nstr += (splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1) + " ");
        }
        document.write(nstr + "<br>" + "<br>");
    }
    var strng = "the quick brown fox";
    titleCase(strng);
    
    
    // 12.  Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.  
    // EXAMPLE STRING : 'Web Development Tutorial'  
    // EXPECTED OUTPUT : 'Development' 
    var input = "Web Development Tutorial";
    
    function longest(str) {
      var longestStart = 0;
      var longestEnd = 0;
      var current = 0;
      var currentLength = 0;
      while (current < str.length) {
        if (str.charAt(current) == ' ') {
          if (currentLength > (longestEnd - longestStart)) {
            longestStart = (current - currentLength);
            longestEnd = current;
          }
          currentLength = 0;
        } else {
          currentLength++;
        }
        current++;
      }
      return str.substring(longestStart, longestEnd);
    }
    
    document.write(longest(input) + "<br>" + "<br>");
    
    // 13.  Write a JavaScript function that accepts two arguments, 
    // a string and a letter and the function will count the number of 
    // occurrences of the specified letter within the string.  
    // Sample arguments : 'JSResourceS.com', 'o'  
    
    function char_count(str, letter) 
    {
     var letter_Count = 0;
     for (var position = 0; position < str.length; position++) 
     {
        if (str.charAt(position) == letter) 
          {
          letter_Count += 1;
          }
      }
      return letter_Count;
    }
    
    document.write(char_count('JSResourceS.com', 'o') + "<br>" + "<br>");
    
    
    
    
    // 14.  The Geometrizer 
    // Create 2 functions that calculate properties of a circle, using the definitions here. 
    // Create a function called calcCircumference: 
    // •  Pass the radius to the function. 
    // •  Calculate the circumference based on the radius, and output "The circumference is NN". 
    // Create a function called calcArea: 
    // •  Pass the radius to the function. 
    // •  Calculate the area based on the radius, and output "The area is NN". 
    // Circumference of circle    =     2πr 
    // Area of circle         =     πr 2 
    
    function calcCircumfrence(radius) {
        var y = (Math.PI * radius) * 2;
      document.write("The circumfrence is " + y + "." + "<br>");
      }
      function calcArea(radius) {
        var x = (Math.PI * radius) * radius;
      document.write("The area is " + x + "." + "<br>" + "<br>");
      }
      
      calcCircumfrence(30);
      calcArea(10);
      
    
    
    
// chapter_38 42



// task 1

function display()  
{  
  var x=document.getElementById("base").value;  
  var y=document.getElementById("exp").value;  
    
  document.getElementById("result").innerHTML=Math.pow(x,y);  
}  

// task 2

function check_leapyear(){
    //define variables
    var year;

    //get the entered year from text box 
    year = document.getElementById("year").value;

    //three conditions to find out the leap year
    if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
    {
        alert(year+" is a leap year");  
    }
    else
    {
        alert(year+" is not a leap year");  
    }
}

// task 3
 

    var a = +prompt("enter length a : ");
    var b = +prompt("enter length b : ");
    var c = +prompt("enter length c : ");
    var S = 0;4.5,2.5,0.5
    function swl(a,b,c)
    {
        S = (a + b + c)/2;
        return S;
    }
    swl(a,b,c);
    
    function area(S,a,b,c)
    {
        alert("Area of triangle is " + (S * (S-a) * (S-b) * (S-c)) + " units");
    }
    area(S,a,b,c);






    // task 4


      function mainFunction(){
        average(33,44,55)
        percentage(33,44,55)
    }
    function average(sub1,sub2,sub3){
        x = (sub1+sub2+sub3)/3
        alert("Average is " + x)
    }
    function percentage(sub1,sub2,sub3){
        var total = 300;
        y = ((sub1+sub2+sub3)/total)*100
        alert("Percentage is " + y)
    }
    mainFunction()


// task 5
function indexof(chr, str) {
    var str_arr = str.split("");
    alert(str_arr.indexOf(chr));
}
indexof('i', 'This is a string');

   
// task 6
function removeVowels(str) {
    if (str.length > 25) {
        alert("length of the string must be less then 25.");
    } else {
        str = str.replace(/[aeiou]/gi, "")
        alert(str);
    }
}
removeVowels("This is a Sentance");



// task 7
var para = "Pleases read this application and give me gratuity";
    var count = 0
     function vowelsCounter(txt){
       for(var i=0;i<=para.length;i++){
           switch(para.slice(i,i+2)){
               case "ae":
               count ++;
               break;
               case "ai":
               count ++;
               break;
               case "ao":
               count ++;
               break;
               case "au":
               count ++;
               break;
               case "aa":
               count ++;
               break;
               case "ea":
               count ++;
               break;
               case "ee":
               count ++;
               break;
               case "ei":
               count ++;
               break;
           }
       }
       return count;
     } alert(vowelsCounter(para))


// task 8

var kiloMeters = prompt("Enter distance in kilometers? ")
    function citiesDist(distance){
        function meters(){
            var meter = distance * 1000;
            return meter
        }
        function feet(){
            var feet = distance * 3280.84
            return feet
        }
        function inches(){
            var inches = distance * 39370.1
            return inches
        }
        function centiMeter(){
            var cm = distance * 100000
            return cm 
        }
        alert("Meters = " + meters() + " Feet = " + feet() + " Inches = " + inches() + " Centimeters = " + centiMeter())
    }
    citiesDist(kiloMeters)



// task 9

function get_salary() {

    var hours = prompt("Please enter the number of hours you worked this week");
    var rate = 12;
    
    //Calculates over time pay or regular pay
    if (hours>= 40)
    
    {
    regpay = (rate * 40)
    overtimepay = rate * (hours - 40)
    pay = (regpay + overtimepay)
    
    // Send an alert with over time pay values
    alert ("You earned overtime this week! Your total pay is " + pay);
    
    }
    
    else 
    {
    regpay = (rate * hours)
    overtimepay = 0.00
    
    //send an alert with regular paid amount
    alert ("Your total pay is " + regpay);
    }
    }

    get_salary();
    
// task 10
    a=prompt("Enter number"," ");
    n=parseInt(a);
    h=Math.floor(n/100);
    n=n-h*100;
    f=Math.floor(n/50);
    n=n-f*50;
    t=Math.floor(n/10);
    n=n-t*10;
    document.write("you will have "+h+" hundred notes "+f+" fifty notes "+t+" ten notes."+"<br>"+"<br>");




// chapter_43 to 48


//task 2

function getbox(){
    alert('Thanks for purchasing a phone from us')
}


// task 3

function myFunction(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
  }



//task 4

function mouseOver() {
    document.getElementById("img").src = "images/car1.jpg";
}

function mouseOut() {
    document.getElementById("img").src = "images/car.jpg";
}




//task 5

var x = 0;

document.getElementById('output-area').innerHTML = x;

function button1() {
  document.getElementById('output-area').innerHTML = ++x;
}

function button2() {
  document.getElementById('output-area').innerHTML = --x;
}






// chapter_49 to 52



// task 1
function showMessage(){
    var input1 = document.getElementById('1').value;
    var input2 = document.getElementById('2').value;
    var input3 = document.getElementById('3').value;
    var input4 = document.getElementById('4').value;
    var output = "<h1>Your Details</h1>" + "<br>" + "First Name: " + input1 + '<br> ' + "Last Name: " + input2 + '<br> '+ "Email: " + input3 + ' <br>'+ "Password: " + input4;
    var a = document.getElementById('print').innerHTML = output;
    document.write(a)
}


// task 2
function readMore(){
    var text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit beatae similique laudantium eaque dicta reprehenderit vel, accusantium odit facere perspiciatis sint, optio fuga, cum magnam saepe sit accusamus provident error!"
    var paragraph = document.getElementById('paragraph')
    paragraph.innerHTML = text;
}



  // task 3
function myFunction(r) {
    var i = r.parentNode.parentNode.rowIndex;                      
    document.getElementById("myTable").deleteRow(i);
  }



// chapter_53 to 57




// task 1

function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
  }


// task 2
  var fontSize = 10;
  function zoomIn() {
    fontSize += 10;
    document.getElementById("para").style.fontSize = fontSize + "px";
  }
  function zoomOut() {
    fontSize -= 10;
    document.getElementById("para").style.fontSize = fontSize + "px";
  }




// chapter_58 to 67


// Getting element of id “main-content” and assigning them in a variable
var mainId = document.getElementById('main-content');

// // Displaying all child elements of “main-content” element.
var childElements = document.getElementById('dataId');
childElements.innerText = mainId.innerHTML;

// // Get all elements of class “render” and show their innerHTML in browser
var render = document.getElementsByClassName('render');
for (i = 0; i < render.length; i++) {
    childElements.innerHTML += '<br/>' + render[i].innerHTML;
}

// // Filling input value whose element id first-name , ”last-name” and “email” using javascript.
var fName = document.getElementById('first-name');
var lName = document.getElementById('last-name');
var email = document.getElementById('email');

fName.value = 'Saleem';
lName.value = 'Raza';
emailId.value = 'Saleem@yahoo.com';

// // What is node type of element having id “form-content” , “lastName” and its child node..
var formControl = document.getElementById('form-content');
childElements.innerHTML += '<br/>' + formControl.nodeType;

// // Getting First and last child of id “main-content”.
childElements.innerHTML += '<br/>' + mainId.firstElementChild;
childElements.innerHTML += '<br/>' + mainId.lastElementChild;

// // Getting next and previous siblings of id “lastName”.
childElements.innerHTML += '<br/>' + lName.previousElementSibling;
childElements.innerHTML += '<br/>' + lName.nextElementSibling;

// // Getting parent node and node type of element having id “email”
childElements.innerHTML += '<br/>' + emailId.parentNode;
childElements.innerHTML += '<br/>' + emailId.nodeType;






























































































