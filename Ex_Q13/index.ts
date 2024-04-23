
// Question_13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”


// 1st Method
const favTransports : string [] = ["Honda City","Sports Bike","Motorcycle","Car","Bus"];
favTransports.map((items)=>{console.log(`\nI would like to own a ${(items)}.`)});


// 2nd Method (Loop)
// for(let i = 0; i < favTransports.length; i++){
    // console.log(`\nI would like to own a ${favTransports[i]}.`);
// }
