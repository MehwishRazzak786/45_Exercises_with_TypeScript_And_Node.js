// Question_41
/* Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */
// Make an array containing Magicians names
let magicians = ["Xord", "Senta", "Paul", "Alen"];
// Function to print each magician's name from an array
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
// Call the function to print the names
show_magicians(magicians);
export {};
