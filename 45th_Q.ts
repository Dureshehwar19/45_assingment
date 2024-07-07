//45.Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly.

// function create_car(manufacturer, model, ...options:){
//     let cars = {
//         manufacturer: manufacturer,
//         model: model,
//     }
// };

// options.forEach(Option =>{
//     let[key, value]= option.split(":")
// }

// )

function createCar(manufacturer: string, model: string, ...options: Record<string, any>[]): Record<string, any> {
    const car: Record<string, any> = {
        manufacturer,
        model,
    };

    for (const option of options) {
        Object.assign(car, option);
    }
    return car;
}
const carInfo = createCar('Land Cruiser Prado', 'J250',{ color: 'black', year: 2023, feature: ["Transmission: 10-speed 4WD", "automatic"] });
console.log(carInfo)