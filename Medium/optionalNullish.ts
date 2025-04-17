/* Optional Chaining ?.
It allows you to access deeply nested properties without checking each level.
If something is undefined or null, it stops and returns undefined instead of throwing an error.
eg:- console.log(user?.profile?.name); // won't throw if profile is undefined */

/* Nullish Coalescing ??
It gives you a default value when the left-hand side is null or undefined. 
eg:-  let name = userName ?? "Guest"; // use "Guest" if userName is null or undefined */


/* Then do the following:

Create two users:
One with all fields filled
One with only name

Write a function printUserInfo(user: User) that:
Prints the user's name
Prints the email if available, or "Email not provided"
Prints age if available, or "Age not available"

Use ?. and ?? smartly in this function. */

type User = {
  name: string;
  age?: number;
  contact?: {
    email?: string;
    phone?: string;
  };
};

let user1 ={
  name: "Moana",
  age: 12,
  contact:{
    email:"moana111@gmail.com",
    phone: "8888777990"
  }
}

let user2 ={
  name:"Elsa",
}

function printUserInfo (user:User){
  console.log("Name:",user.name);
  
  const age = user.age ?? "Age not available";
  console.log("Age:", age);
  
  const email = user.contact?.email?? "Email not provided";
  console.log("Email:", email);

  const phone = user.contact ?.phone?? "Phone not provided";
  console.log("Phone:", phone);
}

printUserInfo(user1);

printUserInfo(user2);
