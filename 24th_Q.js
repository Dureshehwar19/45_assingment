"use strict";
//24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
// write more tests.Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
const fruit01 = "apple";
const fruit02 = "mango";
console.log("equality test:", fruit01 == fruit02);
console.log("inequality test", fruit01 !== fruit02);
//• Tests using the lower case function
const lowerCaseSting = "hello shehwar";
console.log("lower test:", lowerCaseSting.toLowerCase() === "Hello Shehwar");
console.log("lower test:", lowerCaseSting.toLowerCase() === "hello shehwar");
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
//and less than or equal to
const number1 = 3;
const number2 = 7;
console.log("euality test:", number1 === number2);
console.log("ineuality test:", number1 !== number2);
console.log("less than test:", number1 < number2);
console.log("greater than test:", number1 > number2);
console.log("less than eual to test:", number1 <= number2);
console.log("greater than eual to test:", number1 >= number2);
//• Tests using "and" and "or" operators
const Condition01 = true;
const Condition02 = false;
console.log("and operator test", Condition01 && Condition02);
console.log("or operator test", Condition01 || Condition02);
//• Test whether an item is in a array
const Grade = [1, 2, 4, 5, 6, 7];
console.log("item is an array", Grade.includes(4));
//• Test whether an item is not in a array
const grade = [1, 2, 4, 5, 6, 7];
console.log("item is not in an array", grade.includes(3));
