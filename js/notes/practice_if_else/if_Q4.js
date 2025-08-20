//Check if a given year is a leap year or not. 
 
 let year =2025;
if (year % 4 === 0 && year % 100 !== 0) {
  console.log(year + " is a leap year.");
} else if (year % 400 === 0) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}