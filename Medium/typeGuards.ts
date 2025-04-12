/* Type guards are functions or expressions that check the type of a variable at runtime. They're used to ensure your code safely accesses 
properties or methods. */

/* Create a function processInput that takes a parameter of type string | number | boolean.

If it's a string → print its length.

If it's a number → print its square.

If it's a boolean → print "Yes" for true, "No" for false. */

function processInput(id: number |string | boolean){
  if(typeof id === "number"){
    console.log(id*id);
  }else if(typeof id==="string"){
    console.log(id.length);
  }else{
    if(id===true){
      console.log("Yes");
      
    }else{
      console.log("NO");
      
    }
  }
}

processInput(12);
processInput("haiii")
processInput(false);