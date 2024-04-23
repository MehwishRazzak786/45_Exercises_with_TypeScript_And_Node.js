// Question_37
/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */
function make_shirt(size = "Large", message = "I Love TypeScript..") {
    console.log(`Size: ${size}, Message: "${message}"`);
}
// Large shirt with default message
make_shirt(); // Output: Size: Large, Message: "I Love TypeScript.."
// Medium shirt with default message
make_shirt("Medium"); // Output: Size: Medium, Message: "I Love TypeScript.."
// Custom shirt with a different message and size
make_shirt("Small", "TypeScript is fun!"); // Output: Size: Small, Message: "TypeScript is fun!"
export {};
