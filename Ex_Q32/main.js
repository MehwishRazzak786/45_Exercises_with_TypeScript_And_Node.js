// Question_32
/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */
// currentUsers Array
const currentUsers = ["Maham", "Shahid", "Adeeba", "Aabis", "Aaraiz"];
// newUsers Array
const newUsers = ["Asif", "Aabis", "Minal", "Mehwish", "Aaraiz"];
// Loop through newUsers list
for (let newUser of newUsers) {
    // convert newUser to lowercase for case insensitivity
    const lowercase_newUser = newUser.toLowerCase();
    // checking username already exist in currentUsers or not
    if (currentUsers.map(user => user.toLowerCase()).includes(lowercase_newUser)) {
        // Username already exists
        console.log(`\nSorry, the username ${newUser} is already exists. Please enter a new username!`);
    }
    else {
        // Username is available
        console.log(`\nCongratulations! The username ${newUser} is available.`);
    }
}
export {};
