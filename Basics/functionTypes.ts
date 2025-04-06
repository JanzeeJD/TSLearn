/* Functions with Type Notations
 In TypeScript, we can specify the types of parameters and the return type of a function.
*/

/* Create a function greet that:

Accepts a name (string)

Returns a greeting message (string)

Call the function and print the message. */

function greet (name:string): string {
  return "Hello " + name;
}

let greeting = greet("Moana")
console.log(greeting);