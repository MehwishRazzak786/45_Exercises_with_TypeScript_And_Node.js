// Question_44
/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time. */
// Define a function with rest parameters that accepts items arguments representing  sandwitch
function make_sandwich(items) {
    console.log(`You ordered a sandwich with ${items.join(', ')}. Enjoy your sandwitch!\n`);
}
// call the function 3 times with 3 different number of arguments
make_sandwich(['bread', 'cheese', 'lettuce', 'sauces']);
make_sandwich(['bread', 'butter', 'chicken', 'egg', 'mayo', 'ketchup', 'cheddar cheese']);
make_sandwich(['bread', 'mustard', 'mayo', 'avocado', 'meat']);
export {};
