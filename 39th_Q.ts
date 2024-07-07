// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value
// that’s returned.

function cityCountry(city: string, country: string): string {
    const formattedString = "${city.toLowerCase()}, ${country.toLowerCase()}";
    return formattedString;
  }
  const KarachiPakistan = cityCountry("Karachi", "Pakistan");
  const IstanbulTurkey = cityCountry("Istanbul", "Turkey");
  const RomeItaly = cityCountry("Rome", "Italy");
  console.log("Karachi" , "Pakistan");
  console.log("Istanbul" , "Turkey");  
  console.log("Rome" , "Italy");