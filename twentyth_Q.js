"use strict";
//20.Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries,
//cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
//create an arry of some countries.
let countries = [
    "Pakistan",
    "Canada",
    "Plastein",
    "Turkey",
    "Iran",
    "Italy",
    "Spain",
    "Germany",
    "Poland",
];
//print the list of countries..
console.log("List of some countries");
countries.forEach((country, index) => {
    console.log(`${index + 1}. ${country}`);
});
