/* An interface is similar to a type, but it's mostly used to describe the shape of an object.*/
/* Create an interface called Car with:

brand: string

model: string

year: number

Create a car object.

Print its brand and year. */

interface Car {
brand : string;
model : string;
year: number
}

let carOne : Car = {
  brand : "Kia",
  model: "EV6",
  year: 2023
}

let carTwo : Car ={
  brand: "Land Rover",
  model: "Defender",
  year: 2025
}

let carThree : Car ={
  brand:"Renault",
  model:"Kiger",
  year: 2025
}

console.log(`The carTwo brand and year is ${carTwo.brand}, ${carTwo.year} and car Three model is ${carThree.year}.`);
