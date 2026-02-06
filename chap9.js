//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser: 

var num = 10;
document.write("Result: <br>");
document.write("The value of num is: " + num + "<br><br>");
document.write("The value of ++num is: " + (++num) + "<br>");
document.write("Now the value of num is: " + num + "<br><br>");
document.write("The value of num++ is: " + (num++) + "<br>");   
document.write("Now the value of num is: " + num + "<br><br>");
document.write("The value of --num is: " + (--num) + "<br>");
document.write("Now the value of num is: " + num + "<br><br>");
document.write("The value of num-- is: " + (num--) + "<br>");
document.write("Now the value of num is: " + num + "<br><br>");

//End 1
//2. What will be the output in variables a, b & result after execution of the following script: 
// var a = 2, b = 1; 
// var result = --a - --b + ++b + b--; 
// Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--; 
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
document.write("result is: " + result + "<br><br>");
// Explanation:
// --a decrements a by 1, so a becomes 1
// --b decrements b by 1, so b becomes 0
// --a - --b is 1 - 0 = 1
// ++b increments b by 1, so b becomes 1
// --a - --b + ++b is 1 + 1 = 2
// b-- uses the current value of b (1) and then decrements it by 1, so b becomes 0
// --a - --b + ++b + b-- is 2 + 1 = 3
//End 2

//3. Write a program that takes input a name from user & greet the user. 
var name = prompt("Please enter your name:");
document.write("Hello, " + name + "! Welcome to our website!");

// Alternative way to greet the user using alert and document.write

        var userName = prompt("Please enter your name:");

    
        if(userName) {
            
            alert("Hello, " + userName + "! Welcome to our website.");
            document.write("Hello, <b>" + userName + "</b>! Welcome to our website.");
        } else {
            alert("Hello! You did not enter your name.");
            document.write("Hello! You did not enter your name.");
        }
//End 3
//4. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
var number = prompt("Please enter a number to display its multiplication table (default is 5):");
if (number === null || number.trim() === "") {
    number = 5; // Default to 5 if no input is provided
}       
number = parseInt(number);
document.write("Multiplication Table of " + number + ":<br><br>");
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}
//second method
    // Step 1: Take input from the user
        var userInput = prompt("Enter a number to see its multiplication table:");

        // Step 2: Set default number to 5 if input is empty
        var number = userInput ? parseInt(userInput) : 5;

        // Step 3: Display the multiplication table
        document.write("<h3>Multiplication Table of " + number + "</h3>");
        document.write("<ul>");
        for(var i = 1; i <= 10; i++) {
            document.write("<li>" + number + " x " + i + " = " + (number * i) + "</li>");
        }
        document.write("</ul>");
//End 4
//5.  Take a) Take three subjects name from user and store them in 3 different variables. 
// b) Total marks for each subject is 100, store it in another variable. 
// c) Take obtained marks for first subject from user and stored it in different variable. 
// d) Take obtained marks for remaining 2 subjects from user and store them in variables. 
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");  
var totalMarks = 100;
var obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
var obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
document.write("<h3>Marks Sheet</h3>");
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td><td>" + ((obtainedMarks1 / totalMarks) * 100).toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td><td>" + ((obtainedMarks2 / totalMarks) * 100).toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td><td>" + ((obtainedMarks3 / totalMarks) * 100).toFixed(2) + "%</td></tr>");
document.write("<tr><td><b>Total</b></td><td><b>" + (totalMarks * 3) + "</b></td><td><b>" + totalObtainedMarks + "</b></td><td><b>" + percentage.toFixed(2) + "%</b></td></tr>");
document.write("</table>");
//second method

    // a) Take three subject names
    var subject1 = prompt("Enter first subject name:");
    var subject2 = prompt("Enter second subject name:");
    var subject3 = prompt("Enter third subject name:");

    // b) Total marks for each subject
    var totalMarksPerSubject = 100;

    // c) & d) Take obtained marks
    var marks1 = parseInt(prompt("Enter obtained marks for " + subject1));
    var marks2 = parseInt(prompt("Enter obtained marks for " + subject2));
    var marks3 = parseInt(prompt("Enter obtained marks for " + subject3));

    // e) Calculate total and percentage
    var totalObtained = marks1 + marks2 + marks3;
    var totalMarks = totalMarksPerSubject * 3;
    var percentage = (totalObtained / totalMarks) * 100;

    // Display result in table
    document.write("<h2>Marks Sheet</h2>");
    document.write("<table border='1' cellpadding='8'>");
    document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");

    document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + marks1 + "</td></tr>");
    document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + marks2 + "</td></tr>");
    document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + marks3 + "</td></tr>");

    document.write("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + totalObtained + "</th></tr>");
    document.write("<tr><th colspan='2'>Percentage</th><th>" + percentage.toFixed(2) + "%</th></tr>");

    document.write("</table>");

//End 5












