/* type lets you define a custom structure once and reuse it. */

/* Create a type called Book with:

title: string

pages: number

isPublished: boolean

Create a book object and print its title and published status. */

type Book = {
  title : string;
  pages : number;
  isPublished : boolean;
}

let myBook1 : Book = {title:"Atomic Habits",pages:320,isPublished:true};
let myBook2 : Book = {title:"The Alchemist", pages:192, isPublished:true};

console.log(`title: ${myBook1.title} , Published status: ${myBook1.isPublished}`)