// Question_36
/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function. */


// make the function
function make_shirt (size : string, message : string):void {
    
 console.log(`Shirt size is "${size}" and it should have "${message}" printed on it.`)

}

// call the function
make_shirt ("Small","Typescript is fun")