
// Question_21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


// Datatype of person object
interface person {
    Name : string,
    Age : number,
    Nationality : string,
    Student : boolean
}

// person object
let person : person = {
    Name : "Muhammad Shahid",
    Age : 28,
    Nationality : "Pakistani",
    Student : true
}

// print person object
console.log(person);


// Datatype of ItCourse object
interface itCourse {
    courseName : string,
    location : string,
    onSiteStudents : number,
    OnlineStudents : number
}

// ItCourse object
let itCourse = {
    courseName : "GenAI, Web3.0 & Metaverse",
    location : "Governer House Sindh",
    onSiteStudents : 50000,
    OnlineStudents : 450000
    
}

// print ItCourse object
console.log(itCourse);