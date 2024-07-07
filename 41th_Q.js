"use strict";
//41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.
function show_Magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magician_names = ["Harry Houdini", "Uri Geller", "Albus Dumbledore", "Wizard"];
show_Magicians(magician_names);
