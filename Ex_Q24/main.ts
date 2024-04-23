
/* Question_24
 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

 • Tests for equality and inequality with strings

 • Tests using the lower case function

 • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

 • Tests using "and" and "or" operators

 • Test whether an item is in a array

 • Test whether an item is not in a array
*/


// Tests for equality and inequality with strings
const str1 : string = "Mehwish";
const str2 : string = "mehwish";

// Equality Test
console.log("Equality test with strings: ",str1 === str2);  // false
console.log("Equality test with strings: ",str1 == "Mehwish"); // true

// Inquality Test
console.log("Inequality test with strings: ",str1 !== str2);  // true
console.log("Inequality test with strings: ",str1 !== "Mehwish"); // false


// Tests using the lower case function
const text1 : string = "Mehwish Razzak";
const text2 : string = "mehwish razzak";
console.log("LowerCase function test: ",text1.toLowerCase() === text2);  // true
console.log("LowerCase function test: ",text1.toLowerCase() !== text2);  // false


// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1 : number = 15;
const num2 : number = 10;

// Numerical Tests Involving Equality 
console.log("Equality test with numbers: ",num1 === num2);  // false
console.log("Equality test with numbers: ",num1 == 15);  // true

// Numerical Tests Involving Inequality
console.log("Inequality test with numbers: ",num1 !== num2);  // true
console.log("Inequality test with numbers: ",num1 !== 15);  // false

// Greater than Test
console.log("Greater than test: ",num1 > num2);  // true
console.log("Greater than test: ",num2 > num1);  // false

// Less than Test
console.log("Less than test: ",num1 < num2);  // false
console.log("Less than test: ",num2 < num1);  // true

// Greater than or equal to Test
console.log("Greater than or equal to test: ",num1 >= num2);  // true
console.log("Greater than or equal to test: ",num2 >= num1);  // false

// Less than or equal to Test
console.log("Less than or equal to test: ",num1 <= num2);  // false
console.log("Less than or equal to test: ",num2 <= num1);  // true


// Tests using "and" and "or" operators
const x : number = 5;
const y : number = 10;
const z : number = 15;

// Test of "AND" operator
console.log("And operator test: ",x < y && y < z); // true, both conditions are true
console.log("And operator test: ",x > y && y < z); // false, both conditions are false

// Test of "OR" operator
console.log("Or operator test: ",x < y || y > z); // true, atleast one condition is true
console.log("Or operator test: ",x > y || y > z); // false, both conditions are false 


// Test whether an item is in an array
const colors : string[] = ["red","blue","green","orange","purple"];

console.log("Test 'purple' color is in the array: ",colors.includes("purple")); // true
console.log("Test 'black' color is in the array: ",colors.includes("black")); // false


// Test whether an item is not in an array

console.log("Testing 'white' color is not in the array: ",!colors.includes("white")); // true
console.log("Testing 'green' color is not in the array: ",!colors.includes("green")); // false

