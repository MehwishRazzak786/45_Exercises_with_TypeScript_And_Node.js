// Question_16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
//  • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
// Start with Exercise_15
let guestList = ["Adeeba", "Aisha", "Mehwish", "Maria"];
// for(let i = 0; i < guestList.length; i++){
//     console.log(`Dearest friend! ${guestList[i]},\n I warmly invite you to join me for dinner at my home.\n Thank You!\n`);
// }
// Maria will not come
console.log(`Due to personal Issues Miss ${guestList[3]} Will Not Come At My Home For Dinner.\n`);
// Modify list by replacing the name
guestList[3] = "Alishba";
// Print Invitation Messages
console.log(`New Invitation List Of My Friends Who Are Coming To My Home For Dinner.\n`);
guestList.forEach((guest => { console.log(`Dearest Friend! ${guest},\n Join me for a delightful dinner at my place this sunday.\n Thank You!\n`); }));
// Start solving Ex_16
// Informing about the bigger dinner table
console.log("Good News ! I found a bigger dinner table. Now I have 3 more friends to invite on dinner.\n");
// Adding three more friends
// Add at the beginning
guestList.unshift("Anum");
//  ["Anum","Adeeba","Aisha","Mehwish","Alishba"];
console.log(guestList);
// Add at the middle
guestList.splice(2, 0, "Maham");
console.log(guestList);
// Add at Last
guestList.push("Mehak");
console.log(guestList);
// Print new invitations alongwith messages
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear friend ${guestList[i]},\n I would be honoured to have you to join me for dinner at my place.\n Thank You.\n`);
}
export {};
