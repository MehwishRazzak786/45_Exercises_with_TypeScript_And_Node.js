// Question_29
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas! */
// Define the array of fruits
const favorite_fruits = ["peach", "mango", "grapes"];
// check for specific fruits using independent if statements
if (favorite_fruits.includes("peach")) {
    console.log("I really like peaches!");
}
if (favorite_fruits.includes("mango")) {
    console.log("Mangoes are one of my favourites!");
}
if (favorite_fruits.includes("grapes")) {
    console.log("I like juicy grapes!");
}
if (favorite_fruits.includes("banana")) {
    console.log("I don't like bananas!");
}
if (favorite_fruits.includes("oranges")) {
    console.log("I don't like oranges");
}
export {};
