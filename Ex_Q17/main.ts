
// Question_17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


// Start With Exercise_16
let guestList : string [] = ["Adeeba","Aisha","Mehwish","Maria"];
// for(let i = 0; i < guestList.length; i++){
//     console.log(`Dearest friend! ${guestList[i]},\n I warmly invite you to join me for dinner at my home.\n Thank You!\n`);
// }

// Maria will not come
// console.log(`Due to personal Issues Miss ${guestList[3]} Will Not Come At My Home For Dinner.\n`);

// Modify list by replacing the name
guestList[3] = "Alishba";

// Print Invitation Messages
// console.log(`New Invitation List Of My Friends Who Are Coming To My Home For Dinner.\n`);

// guestList.forEach((guest =>{console.log(`Dearest Friend! ${guest},\n Join me for a delightful dinner at my place this sunday.\n Thank You!\n`);}))


// Start solving Ex_16
// Informing about the bigger dinner table

// console.log("Good News ! I found a bigger dinner table. Now I have 3 more friends to invite on dinner.\n");

// Adding three more friends

// Add at the beginning

guestList.unshift("Anum");
//  ["Anum","Adeeba","Aisha","Mehwish","Alishba"];
// console.log(guestList);

// Add at the middle
guestList.splice(2,0,"Maham");
// console.log(guestList);

// Add at Last
guestList.push("Mehak");
// console.log(guestList);


// Print new invitations alongwith messages

for(let i = 0; i < guestList.length; i++){
    console.log(`Dear friend ${guestList[i]},\n I would be honoured to have you to join me for dinner at my place.\n Thank You.\n`);
}

// Start Soiving Ex_17

// Inform that two people can be Invited

console.log("\nUnfortunately,The New Dinner Table Can Not arrange, So I Can Invite Only Two People For Dinner.\n");

// Remove the guest using pop until only two names remain

while(guestList.length > 2){
   let remove_guest = guestList.pop()
   console.log(`Sorry Miss. ${remove_guest}, I Couldn't Invite You For Dinner.`);
}

// Print messages for two people still on the list

for(let i = 0; i < guestList.length; i++){
    console.log(`\nDearest Friend ${guestList[i]},\n\n You are still invited to the dinner.See you there!\n\n Thank You.`);
}

// Remove the last two names from the list

guestList.splice(0,2);

// Print to ensure an empty list

console.log("\nUpdated Invitation List : ",guestList);

export{guestList} //for Question_19

