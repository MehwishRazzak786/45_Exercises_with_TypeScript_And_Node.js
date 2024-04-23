// Question_45
/* Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly. */
// Define a function to store car information
function storeCarInfo(manufacturer, modelName, ...extras) {
    // Create a carInfo object with manufacturer and model name 
    const carInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extras));
    // Return the car object
    return carInfo;
}
// Call the function to create a car object
const car = storeCarInfo("Toyota", "Camry", { color: "black" }, { features: ['navigation', 'sunroof'] }, { year: 2021 });
// Print the car object
console.log(car);
console.log("----------------------------");
// Call the function to create a car object
const car2 = storeCarInfo("Honda", "Accord", { color: "blue" }, { year: 2020 });
// Print the car object
console.log(car2);
export {};
