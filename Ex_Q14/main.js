// Question_14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// 1st Method using map()
let guestList = ["Adeeba", "Aisha", "Mehwish", "Maria"];
guestList.map((items) => console.log(`Dearest friend! ${items},\n I warmly invite you to join me for dinner at my home.\n Thank You!`));
export {};
// 2nd Method using Loop
// for(let i = 0; i < guestList.length; i++){
// console.log(`Dearest friend! ${guestList[i]},\n I warmly invite you to join me for dinner at my home.\n Thank You!`)
// }
