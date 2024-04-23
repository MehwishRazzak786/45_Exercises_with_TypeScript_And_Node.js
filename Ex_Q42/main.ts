// Question_42

/* Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified. */


//start with the program of Exercise_41

// Make an array containing Magicians names
let magicians: string[] = ["Xord", "Senta", "Paul", "Alen"];

// Function to print each magician's name from an array
function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

// Start Solving Exercise_42

// Function to add "The Great" to each magician's name
function make_great(magicians: string[]) {
   for (let i = 0; i < magicians.length; i++) {
    magicians[i] = `The Great ${magicians[i]}.`
  };
}

// call make_great function to modify magicians names
make_great(magicians);

// call show_magicians that show modified list of magicians
show_magicians(magicians);
