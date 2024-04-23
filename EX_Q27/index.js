// Question_27
/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien. */
// Version_1 "Alien's color is green"
console.log(`\n1st Version: "Alien's Color Is Green"`);
let alien_color = 'green';
if (alien_color === 'green') {
    console.log("The player earned 5 points!");
}
else if (alien_color === 'yellow') {
    console.log("The player earned 10 points!");
}
else if (alien_color === 'red') {
    console.log("The player earned 15 points!");
}
else {
    console.log("Unknown Alien Color..");
}
// Version_2 "Alien's color is yellow"
console.log(`\n2nd Version: "Alien's Color Is Yellow"`);
alien_color = 'yellow';
if (alien_color === 'green') {
    console.log("The player earned 5 points!");
}
else if (alien_color === 'yellow') {
    console.log("The player earned 10 points!");
}
else if (alien_color === 'red') {
    console.log("The player earned 15 points!");
}
else {
    console.log("Unknown Alien Color..");
}
// Version_3 "Alien's color is red"
console.log(`\n3rd Version: "Alien's Color Is Red"`);
alien_color = 'red';
if (alien_color === 'green') {
    console.log("The player earned 5 points!");
}
else if (alien_color === 'yellow') {
    console.log("The player earned 10 points!");
}
else if (alien_color === 'red') {
    console.log("The player earned 15 points!");
}
else {
    console.log("Unknown Alien Color..");
}
export {};
