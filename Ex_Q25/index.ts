// Question_25
/*
Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
*/


// Defines Alien's color
let alien_color : string = 'green';

// Check green color
if(alien_color === 'green'){
    console.log("The Player just earned 5 points!");
}


// Second Version
// Change Alien's color
alien_color = 'yellow';

// This code will not run because condition is false
if(alien_color === 'green'){
    console.log("The Player just earned 5 points!")
}
