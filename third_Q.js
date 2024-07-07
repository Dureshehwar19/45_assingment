"use strict";
//03.Name cases: Store a persons's name in a variable and then print that persons name in lowercase, uppercase , and titlecase.
let personsName = "Shehwar siddiqui";
//lowercase
console.log("lowercase:", personsName.toLowerCase());
// uppercase
console.log("uppercase:", personsName.toUpperCase());
//titlecase
console.log("titlecase:", personsName.replace(/\b\w/g, c => c.toUpperCase()));
