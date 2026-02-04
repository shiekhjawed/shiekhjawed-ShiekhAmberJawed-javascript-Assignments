//1. Declare an empty array using JS literal notation to store student names in future.
var studentNames = [];


//2. Declare an empty array using JS object notation to store student names in future. 
var studentNamesObject = new Array();

//3. Declare and initialize a strings array.

var fruits = ["Apple", "Banana", "Mango", "Orange"];

//4.  Declare and initialize a numbers array.
var numbers = [1, 2, 3, 4, 5]; 
//5.  Declare and initialize a boolean array. 
var booleanArray = [true, false, true, false];
//6. Declare and initialize a mixed array. 
var mixedArray = [1, "Hello", true, 3.14, "World", false];
var mixedArray = ["Alice", 25, true, "Bob", false, 42];

//7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h3>Qualifications in Pakistan:</h3>");
document.write("<ol>"); //first method
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];//second method

document.write("<h3>Available Education Qualifications in Pakistan:</h3>");
for (let i = 0; i < qualifications.length; i++) {
    document.write((i+1) + ") " + qualifications[i] + "<br>");
}
document.write("</ol>");
//8. Write a program to store 3 student names in an array. Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

// Student names
var students = ["ziyann", "Salaar", "Afanan"];

// Scores of students
 var scores = [320, 230, 480];

// Total marks
var totalMarks = 500;

// Display scores and percentages
for (var i = 0; i < students.length; i++) {
    var percentage = (scores[i] / totalMarks) * 100;
    document.write("Student: " + students[i] + "<br>");
    document.write("Score: " + scores[i] + " / " + totalMarks + "<br>");
    document.write("Percentage: " + percentage.toFixed(2) + "%<br><br>");
}
//9. Initialize an array with color names. Display the array elements in your browser. 
//a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser. 
//b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser. 
//c. Add two more color to the beginning of the array. Display the updated array in your browser. 
//d. Delete the first color in the array. Display the updated array in your browser. 
//e. Delete the last color in the array. Display the updated array in your browser. 
//f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser. 
//g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then Page 2 of 6 
// Arrays | JAVASCRIPT 
// remove the same number of color(s) from user-defined 
// position/index. . Display the updated array in your 
// browser.
var colors = ["Red", "Green", "Blue"];
document.write("Initial colors: " + colors.join(", ") + "<br>");
// a. Add color to the beginning
var colorToAddBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddBeginning);
document.write("After adding to beginning: " + colors.join(", ") + "<br>");
// b. Add color to the end
var colorToAddEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddEnd);
document.write("After adding to end: " + colors.join(", ") + "<br>");

// c. Add two more colors to the beginning
colors.unshift("Yellow", "Purple");
document.write("After adding two more to beginning: " + colors.join(", ") + "<br>");
// d. Delete the first color
colors.shift();
document.write("After deleting first color: " + colors.join(", ") + "<br>");
// e. Delete the last color
colors.pop();
document.write("After deleting last color: " + colors.join(", ") + "<br>");
// f. Add color at user-defined index
var indexToAdd = parseInt(prompt("Enter the index to add a color:"));
var colorToAddAtIndex = prompt("Enter the color to add at index " + indexToAdd + ":");
colors.splice(indexToAdd, 0, colorToAddAtIndex);
document.write("After adding color at index " + indexToAdd + ": " + colors.join(", ") + "<br>");
// g. Delete color(s) at user-defined index
var indexToDelete = parseInt(prompt("Enter the index to delete color(s):"));
var numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
colors.splice(indexToDelete, numberOfColorsToDelete);
document.write("After deleting " + numberOfColorsToDelete + " color(s) at index " + indexToDelete + ": " + colors.join(", ") + "<br>");

//10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method. 
var studentScores = [320, 230, 480, 120];
document.write("Scores of students: " + studentScores.join(", ") + "<br>");
studentScores.sort(function(a, b){return a-b});
document.write("Scores of students in ascending order: " + studentScores.join(", ") + "<br>");
//11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array

// Initialize cities array
        var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
        document.write("All Cities: " + cities.join(", ") + "<br>");

        
        var selectedCities = cities.slice(2, 4); // slice(startIndex, endIndex) - endIndex not included

        // Display selectedCities array 
        document.write("Selected Cities: " + selectedCities.join(", ") + "<br>");

//12.  Write a program to create a single string from the  below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
// (Use array’s join method)

     // Initialize array
        var arr = ["This ", " is ", " my ", " cat"];

        // Create a single string using join
        var singleString = arr.join(""); // join("") joins without extra separators

        // Display the result
        document.write("Array elements: " + arr.join(", ") + "<br>");
        document.write("Single String: " + singleString + "<br>");
//13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
        var fifoArray = [];

        // Adding values to the array   
        fifoArray.push("keyboard");
        fifoArray.push("mouse");
        fifoArray.push("printer");
        fifoArray.push("monitor");
        document.write("Devices: " + fifoArray.join(", ") + "<br>");

        // Accessing values in FIFO order
    
        while(fifoArray.length > 0) {
            var device = fifoArray.shift(); // removes the first element
            document.write(device + "<br>");
        }
        //14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In
//First Out)
       // Create a new array
        var lifoArray = [];

        // Store values one by one
        lifoArray.push("Keyboard");
        lifoArray.push("Mouse");
        lifoArray.push("Printer");
        lifoArray.push("Monitor");

        // Display original array
        document.write("Original Array: " + lifoArray.join(", ") + "<br><br>");

        // Access values in reverse order (LIFO)
        document.write("Accessing values in LIFO order:<br>");

        while (lifoArray.length > 0) {
            document.write(lifoArray.pop() + "<br>"); // remove last element first
        }


//15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method: 

        var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
        document.write("<select>");
        for(var i = 0; i < manufacturers.length; i++) {
            document.write("<option>" + manufacturers[i] + "</option>");
        }
        document.write("</select>");




        



