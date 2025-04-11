/* Type narrowing is how TypeScript figures out the exact type of a variable when there are 
multiple possible types (like in union types). */

/* Create a function logValue(value: number | string) that:

If the value is a number, multiplies it by 2.

If it’s a string, prints it in uppercase.

Call this function with both a number and a string. */

function logValue(value:number | string){
  if (typeof value === "number"){
    console.log(value*2);    
  } else {
    console.log(value.toUpperCase());
  }
}

logValue(17);
logValue("haiii");

