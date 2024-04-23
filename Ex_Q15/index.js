// Question_15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// Start with Exercise_14
let guestList = ["Adeeba", "Aisha", "Mehwish", "Maria"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dearest friend! ${guestList[i]},\n I warmly invite you to join me for dinner at my home.\n Thank You!\n`);
}
// Start solving Ex_15
// Maria will not come
console.log(`Due to personal Issues Miss ${guestList[3]} Will Not Come At My Home For Dinner.\n`);
// Modify list by replacing the name
guestList[3] = "Alishba";
// Print Invitation Messages
console.log(`New Invitation List Of My Friends Who Are Coming To My Home For Dinner.\n`);
guestList.forEach((guest => { console.log(`Dearest Friend! ${guest},\n Join me for a delightful dinner at my place this sunday.\n Thank You!\n`); }));
export {};
