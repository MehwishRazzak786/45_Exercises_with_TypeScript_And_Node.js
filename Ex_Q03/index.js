// Question_3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "meHwiSh aBDul razZak";
// LowerCase
console.log("\nName In LowerCase: ", personName.toLowerCase());
// UpperCase
console.log("Name In UpperCase: ", personName.toUpperCase());
// TitleCase
let step1 = personName.split(' ');
let step2 = step1.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
let step3 = step2.join(' ');
console.log("Name In TitleCase: ", step3);
export {};
