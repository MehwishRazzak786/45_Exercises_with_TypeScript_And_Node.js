
// Question_23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car : string = 'subaru';

// Test_1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');  // True

// Test_2
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');  // False

// Test_3
console.log("Is car != 'Bus'? I predict True.");
console.log(car != 'Bus');  // True

// Test_4
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');  // False

// Test_5
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');  // True

// Test_6
console.log("Is car == 'cycle'? I predict False.");
console.log(car == 'cycle');  // False

// Test_7
console.log("Is car != 'honda'? I predict True.");
console.log(car != 'honda');  // True

// Test_8
console.log("Is car === 5 ? I predict False");
console.log(car === "5");  // False

// Test_9
console.log("Is car != 'mazda'? I predict True.");
console.log(car != 'mazda');  // True

// Test_10
console.log("Is car.toUpperCase() != 'SUBARU'? I predict False.");
console.log(car.toUpperCase() != 'SUBARU');  // False