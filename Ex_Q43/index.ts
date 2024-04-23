// Question_43

/* Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */


//start with the program of Exercise_42

// Make an array containing Magicians names
let magicians: string[] = ["Xord", "Senta", "Paul", "Alen"];

// Function to print each magician's name from an array
function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

// Function to add "The Great" to each magician's name
function make_great(magicians: string[]) {
    return magicians.map(name => `The Great ${name}.`)
  };

// Making a copy of original array through .slice() method
let magiciansCopy = magicians.slice();

// Modify the copied array to include "The Great" with their names
let greatMagiciansCopy = make_great(magiciansCopy);


// Display the original magicians array
console.log("\nThis Is My Original Magicians Array:");
show_magicians(magicians);

// Display the modified magicians array
console.log("\nThis Is My Modified Copy Of The Array:");
show_magicians(greatMagiciansCopy);
