// Instructions: Solve the following problems using JavaScript. Test your code in the browser console. Write comments explaining each step.



// 1. Get Current Date & Time
// a) Print the current date and time in the console.

// b) Print only the current year, month, day, hour, minute, and second separately.
// a) Print the current date and time in the console
let now = new Date(); // Create a new Date object for the current date and time
console.log( now);

// b) Print only the current year, month, day, hour, minute, and second separately
let year = now.getFullYear(); // Get the full year (e.g., 2026)
let month = now.getMonth() + 1; // Get month (0-11), so add 1 for correct month
let day = now.getDate(); // Get day of the month (1-31)
let hour = now.getHours(); // Get current hour (0-23)
let minute = now.getMinutes(); // Get current minute (0-59)
let second = now.getSeconds(); // Get current second (0-59)

console.log( year);
console.log( month);
console.log (day);
console.log( hour);
console.log( minute);
console.log( second);




// 2. Setting Date & Time
// a) Create a Date object and set it to your birthday. Print it.
let myBirthday = new Date("2002-03-08"); // my birthday: March 8, 2002
console.log( myBirthday);

// b) Update the Date object to one week later from your birthday and print it.
myBirthday.setDate(myBirthday.getDate() + 7); // Add 7 days to the birthday
console.log( myBirthday);   


// 3. Calculating Differences

// a) Calculate the difference in days between today and your next birthday.
let today = new Date(); // Get today's date
let nextBirthday = new Date(today.getFullYear(), 2, 8); // Next birthday: March 8 of this year  
if (today > nextBirthday) {
    nextBirthday.setFullYear(today.getFullYear() + 1); // If birthday has passed this year, set to next year
}
let diffTime = nextBirthday - today; // Difference in milliseconds
let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
console.log( diffDays)


// b) Convert your age in milliseconds into years, months, and days
let birthDate = new Date("2002-03-08"); // my birthday: March 8, 2002
let ageInMilliseconds = today - birthDate; // Age in milliseconds   
let ageDate = new Date(ageInMilliseconds); // Convert milliseconds to Date object
let ageYears = ageDate.getFullYear() - 1970; // Calculate years
let ageMonths = ageDate.getMonth(); // Calculate months
let ageDays = ageDate.getDate() - 1; // Calculate days       
console.log( ageYears + " years, " + ageMonths + " months, " + ageDays + " days");
