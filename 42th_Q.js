"use strict";
//42.Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
let Magicians = ["Harry Houdini", "Uri Geller", "Albus Dumbledore", "Wizard"];
function show_magicians(Magicians) {
    console.log(Magicians.join("\n"));
}
function make_great(Magicians) {
    return Magicians.map((Magician) => `The Great ${Magician}`);
}
console.log("Original magicians:");
show_magicians(Magicians);
const great_magicians = make_great(Magicians);
console.log("\nModified list:");
show_magicians(great_magicians);
