
// Question_31
/*No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */

let usernames = ["Azam", "Iqra", "Admin", "Amar", "Mehwish", "Aisha"];

// To remove all members
usernames = [];
// console.log(usernames);


if (usernames.length > 0){

    for (let i = 0; i < usernames.length; i++) {
        // Inside the loop, special greeting for 'Admin', For others printing a simple greeting.. 
        if (usernames[i] == 'Admin') {
            console.log(`\nHello ${usernames[i]}, would you like to see a status report?\n`);
        }
        else {
            console.log(`Hello ${usernames[i]}, thank you for logging in again!`);
        }
    }

}else{
    console.log("\nWe need to find some users!");
}    