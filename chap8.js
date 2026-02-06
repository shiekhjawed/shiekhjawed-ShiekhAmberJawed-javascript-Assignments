//1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
var input = prompt("Enter a character (number or string):");//first method
var charCode = input.charCodeAt(0);
if (charCode >= 48 && charCode <= 57) {
    console.log("The input is a number.");
}
else if (charCode >= 65 && charCode <= 90) {
    console.log("The input is an uppercase letter.");
}
else if (charCode >= 97 && charCode <= 122) {
    console.log("The input is a lowercase letter.");
}
else {
    console.log("The input is not a number or letter.");
}
//same code with switch statement second method

 var input = prompt("Enter a character (number or string):");

if (!input || input.length !== 1) {
    console.log("Please enter exactly one character.");
} else {
    var charCode = input.charCodeAt(0);

    if (charCode >= 48 && charCode <= 57) {
        console.log("The input is a number.");
    }
    else if (charCode >= 65 && charCode <= 90) {
        console.log("The input is an uppercase letter.");
    }
    else if (charCode >= 97 && charCode <= 122) {
        console.log("The input is a lowercase letter.");
    }
    else {
        console.log("The input is not a number or letter.");
    }
}

//2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

// Accept two integers from the user
var num1 = prompt("Enter the first integer:");
var num2 = prompt("Enter the second integer:");

// Convert the inputs from string to integer
num1 = parseInt(num1);
num2 = parseInt(num2);

// Check if inputs are valid numbers
if (isNaN(num1) || isNaN(num2)) {
    console.log("Please enter valid integers.");
} else {
    // Compare the numbers
    if (num1 > num2) {
        console.log(num1 + " is larger than " + num2);
    } else if (num2 > num1) {
        console.log(num2 + " is larger than " + num1);
    } else {
        console.log("Both numbers are equal.");
    }
}
//3. Write a program that takes input a number from user & state whether the number is positive, negative or zero. 

// Take input from the user
var num = prompt("Enter a number:");

// Convert input to a number
num = parseFloat(num); // parseFloat allows decimals too

// Check if input is a valid number
if (isNaN(num)) {
    console.log("Please enter a valid number.");
} else {
    // Determine if positive, negative, or zero
    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}

//4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

// Take input from the user
var char = prompt("Enter a character:");    
// Check if input is a single character
if (!char || char.length !== 1) {
    console.log("Please enter exactly one character.");     
} else {
    // Convert character to lowercase for case-insensitive comparison
    char = char.toLowerCase();
    // Check if the character is a vowel
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        console.log(true); // It's a vowel
    } else {
        console.log(false); // It's not a vowel
    }       
}
//same code with switch statement

var char = prompt("Enter a character:");
if (!char || char.length !== 1) {
    console.log("Please enter exactly one character.");
} else {
    char = char.toLowerCase();      
    switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log(true); // It's a vowel
            break;
        default:
            console.log(false); // It's not a vowel
    }
}

//same code with array method

var char = prompt("Enter a character:");
if (!char || char.length !== 1) {
    console.log("Please enter exactly one character.");
} else {
    char = char.toLowerCase();
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(char)) {
        console.log(true); // It's a vowel
    }
    else {
        console.log(false); // It's not a vowel
    }
}   
// 5. Write a program that 
// a. Store correct password in a JS variable. 
// b.  Asks user to enter his/her password 
// c.  Validate the two passwords: 
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password” 
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.
// a. Store correct password in a JS variable.
var correctPassword = "amber123";
// b. Asks user to enter his/her password
var userPassword = prompt("Please enter your password:");   
// c. Validate the two passwords:

if (!userPassword) {
    // i. Check if user has entered password. If not, then give message “ Please enter your password”
    console.log("Please enter your password.");
}   
else if (userPassword === correctPassword) {
    // ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”.
    console.log("Correct! The password you entered matches the original password.");
} 
else {
    // Show “Incorrect password” otherwise.
    console.log("Incorrect password.");
}  
//same code with switch statement

// var correctPassword = "amber123";
// var userPassword = prompt("Please enter your password:");           
// switch (true) {
//     case !userPassword:
//         console.log("Please enter your password.");
//         break;
//     case userPassword === correctPassword:
//         console.log("Correct! The password you entered matches the original password.");
//         break;
//     default:
//         console.log("Incorrect password.");
// }   
//same code with ternary operator

// var correctPassword = "amber123";    
// var userPassword = prompt("Please enter your password:");
// var message = !userPassword ? "Please enter your password." :
//               (userPassword === correctPassword) ? "Correct! The password you entered matches the original password." :
//               "Incorrect password.";
// console.log(message);       
    
// //same code with if else statement

// var correctPassword = "amber123";
// var userPassword = prompt("Please enter your password:");
// if (!userPassword) {
//     console.log("Please enter your password.");
// }
// else if (userPassword === correctPassword) {
//     console.log("Correct! The password you entered matches the original password.");
// }
// else {
//     console.log("Incorrect password.");
// }
// same code with nested if statement
// var correctPassword = "amber123";
// var userPassword = prompt("Please enter your password:");       
// if (!userPassword) {
//     console.log("Please enter your password.");
// }
// else {
//     if (userPassword === correctPassword) {
//         console.log("Correct! The password you entered matches the original password.");        
//     }
//     else {
//         console.log("Incorrect password.");
//     }       
// }
// same code with switch statement and nested switch

// var correctPassword = "amber123";
// var userPassword = prompt("Please enter your password:");       
// switch (true) {             
//     case !userPassword:
//         console.log("Please enter your password.");
//         break;          
//     default:
//         switch (userPassword === correctPassword) {
//             case true:      
//                 console.log("Correct! The password you entered matches the original password.");
//                 break;
//             default:
//                 console.log("Incorrect password.");
//         }
//         break;
// }   

// 6. This if/else statement does not work. Try to fix it: 
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; 
// else 
// greeting = "Good evening"; 
// }

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting); // Output: "Good day"

//7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if,else & else if statements 

    //same code with switch statement
var time = prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM): ");
time = parseInt(time);
switch (true) {
    case (time >= 0 && time < 1200):
        console.log("Good morning!");       
        break;
    case (time >= 1200 && time < 1700):
        console.log("Good afternoon!");
        break;
    case (time >= 1700 && time < 2100):
        console.log("Good evening!");
        break;
    case (time >= 2100 && time <= 2359):
        console.log("Good night!");
        break;
    default:
        console.log("Invalid time entered. Please enter time between 0000 and 2359.");
}
//same code with ternary operator

var time = prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM): ");
time = parseInt(time);
var greeting = (time >= 0 && time < 1200) ? "Good morning!" :
               (time >= 1200 && time < 1700) ? "Good afternoon!" :
               (time >= 1700 && time < 2100) ? "Good evening!" :
               (time >= 2100 && time <= 2359) ? "Good night!" :
               "Invalid time entered. Please enter time between 0000 and 2359.";
console.log(greeting); 

//same code with if else statement

var time = prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM): ");
time = parseInt(time);
if (time >= 0 && time < 1200) {
    console.log("Good morning!");
}       
else if (time >= 1200 && time < 1700) { 
    console.log("Good afternoon!");
}
else if (time >= 1700 && time < 2100) {
    console.log("Good evening!");
}
else if (time >= 2100 && time <= 2359) {
    console.log("Good night!");
}
else {
    console.log("Invalid time entered. Please enter time between 0000 and 2359.");
}
//code
var time = prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM): ");
time = parseInt(time.trim());

if (!isNaN(time)) {
    if (time >= 0 && time < 1200) {
        console.log("Good morning!");
    } else if (time >= 1200 && time < 1700) { 
        console.log("Good afternoon!");
    } else if (time >= 1700 && time < 2100) {
        console.log("Good evening!");
    } else if (time >= 2100 && time <= 2359) {
        console.log("Good night!");
    } else {
        console.log("Invalid time entered. Please enter time between 0000 and 2359.");
    }
} else {
    console.log("Invalid input! Please enter numeric time in 24-hour format.");
}

// How this works:

// If you enter 2100, 2200, or 2359 → outputs "Good night!".

// If you enter 1700–2059 → outputs "Good evening!".

// If you enter 1200–1659 → outputs "Good afternoon!".

// If you enter 0000–1159 → outputs "Good morning!".

// Invalid minutes like 2360 → prompts an error message.

// If you enter non-numeric input like "abc" → prompts an error message.














