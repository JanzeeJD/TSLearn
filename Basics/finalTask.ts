/* Create a small TypeScript program that generates a student report card.
Your task is to use everything you've learned so far in the Basics section:*/

enum GradeLevel{
  Primary,
  Middle,
  HighSchool
}

type SubjectResult = [sujectName: string, score: number];

interface Student {
  name:string;
  age: number;
  grade: GradeLevel;
  isEnrolled: boolean;
  results: SubjectResult[];
}

