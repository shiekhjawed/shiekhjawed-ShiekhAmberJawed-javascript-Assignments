// 1. Declare and initialize an empty multidimensional array. 
// (Array of arrays)  
var multiArray = [];
var multiArray = [];
multiArray.push([]);
multiArray.push([]);
var multiArray = [[], []];
// 2. Declare and initialize a multidimensional array  representing the following matrix:  
var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];
// 3. Write a program to print numeric counting from 1 to 10.  
for (var i = 1; i <= 10; i++) {
  console.log(i);
}
//4.  Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

var tableNumber = prompt("Enter table number");
var tableLength = prompt("Enter table length");

for (var i = 1; i <= tableLength; i++) {
  document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}


//5. Write a program to print items of the following array using for loop: 
//fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + "<br>");
}



//6. Generate the following series in your browser. See example output. 
//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// a. Counting
document.write("<b>Counting:</b><br>");
for (var i = 1; i <= 15; i++) {
  document.write(i + ", ");
}

document.write("<br><br>");

// b. Reverse counting
document.write("<b>Reverse counting:</b><br>");
for (var i = 10; i >= 1; i--) {
  document.write(i + ", ");
}

document.write("<br><br>");

// c. Even
document.write("<b>Even:</b><br>");
for (var i = 0; i <= 20; i += 2) {
  document.write(i + ", ");
}

document.write("<br><br>");

// d. Odd
document.write("<b>Odd:</b><br>");
for (var i = 1; i < 20; i += 2) {
  document.write(i + ", ");
}

document.write("<br><br>");

// e. Series
document.write("<b>Series:</b><br>");
for (var i = 2; i <= 20; i += 2) {
  document.write(i + "k, ");
}
document.write("<br><br>");

//7. You have an array 
//A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
//Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example: 

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var searchItem = prompt("Welcome! What do you want to order?").toLowerCase();
var found = false;

// Search the array
for (var i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === searchItem) {
    found = true;
    break;
  }
}

// Display result
if (found) {
  alert(searchItem + " is available at index " + i + " in our bakery.");
} else {
  alert("We are sorry. " + searchItem + " is not available in our bakery.");
}



//8. Write a program to identify the largest number in the given array. 
//A = [24, 53, 78, 91, 12]. 
var A = [24, 53, 78, 91, 12];
var largest = A[0]; // Assume first element is the largest

for (var i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i]; // Update largest if current element is bigger
  }
}

document.write("The largest number in the array is: " + largest);



//9. Write a program to identify the smallest number in the given array. 
//A = [24, 53, 78, 91, 12] 


var A = [24, 53, 78, 91, 12];
var smallest = A[0]; // Assume first element is the smallest  
for (var i = 1; i < A.length; i++) {
  if (A[i] < smallest) {
    smallest = A[i]; // Update smallest if current element is smaller
  }
}
document.write("The smallest number in the array is: " + smallest);


//10. Write a program to print multiples of 5 ranging 1 to 100. 

for (var i = 5; i <= 100; i += 5) {
  document.write(i + ", ");//shorter method 
}
document.write("<b>Multiples of 5 from 1 to 100:</b><br>");

for (var i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    document.write(i + ", ");
  }
}


