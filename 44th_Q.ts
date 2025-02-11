//44.Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered. Call the function three times,
// using a different number of arguments each time.

function makeSandwich(...items: string[]): void {
    console.log("\nmaking Sandwich with these items:\n");
    
   items.forEach(anyItem => console.log("_" + anyItem));
   console.log("\nEnjoy your sandwich!\n");
};
   //Calling the function three times...
   makeSandwich("Ketchup", "Cheese", "Chicken", "Mayonnaise", "Bread", "Cabage",);
   makeSandwich("Nutella", "Bread");
   makeSandwich("Cabage", "Onion", "Origano", "Olives", "Capsicum", "Chapli Kabab", "Bread");