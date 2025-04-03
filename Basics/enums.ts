/* Enums are like custom labels for fixed values. */

/* Create an enum Season with Summer, Winter, Spring, Autumn

Create a variable with your favorite season using the enum

Print: "My favorite season is: Summer" */

enum Season {
  Summer,
  Winter,
  Spring,
  Autumn
}

let move: Season = Season.Summer;

console.log(`My favorite season is: ${Season[move]}`);

//if i write this seasons as string in the object i can just print it using ${move}
