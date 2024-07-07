"use strict";
/*15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.*/
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
var guestArr = ["Uzair", "Ali", "Moeez", "Hamza", "Uzma"];
// • Modifying my list, replacing the name of the guest who can’t make it for dinner
//add the name of the new person I am inviting.
let canNotAttend = "Ali";
console.log(canNotAttend + " " + "Can not make It, For Dinner!");
let newGuest = "Shazia";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
// • Print a second set of invitation messages, one for each person who is still
// in your list.
guestArr.map((item) => console.log(`Dear ${item}, You Are Cordinally Invited to a Dinner`));
