
// Question_12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// Declaring an array of names

let names : string [] = ["Adeeba","Aaiza","Aleena","Aisha","Maria"];

// Printing message one by one

// console.log(`\nAssalam o Alaikum, ${names[0]}! How are you? `);
// console.log(`\nAssalam o Alaikum, ${names[1]}! How are you? `);
// console.log(`\nAssalam o Alaikum, ${names[2]}! How are you? `);
// console.log(`\nAssalam o Alaikum, ${names[3]}! How are you? `);
// console.log(`\nAssalam o Alaikum, ${names[4]}! How are you? `);


// Other method to print message one by one

names.forEach(name =>console.log(`\nAssalam o Alaikum, ${name}! How are you?`));