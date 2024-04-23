// Question_34
/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza! */
// Array of favourite Pizza's name
let favouritePizza = ["Fajita pizza", "Pepperoni pizza", "Chicken tikka pizza"];
// Loop to print only names of pizzas
for (let i = 0; i < favouritePizza.length; i++) {
    console.log(favouritePizza[i]);
}
// Loop to print the name and a sentence for each pizza
for (let i = 0; i < favouritePizza.length; i++) {
    console.log(`I really like to eat ${favouritePizza[i]}!`);
}
// Additional line outside the loop
console.log(`\n${favouritePizza[0]} is very spicy & full of flavors.It contains chicken, bell pepper, onion, jalapenos & lots of chedder & mozerella cheese on the top of it. I love to eat all variety of pizzas! `);
export {};
