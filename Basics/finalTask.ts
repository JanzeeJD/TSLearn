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

function printReportCard (student: Student): string{
 const gradeName = GradeLevel[student.grade];
 const subjects = student.results
 .map(([subject,score]) => `${subject} - ${score}`)
 .join(", ")
 return `${student.name}, age ${student.age}, is in ${gradeName} school. Entrolled: ${student.isEnrolled}. Subjects: ${subjects}.`
}

function getStudentInfo(id: number | string): void {
  console.log(`Details for student with ID: ${id}`);
}

let student1: Student = {
  name: "Moana",
  age: 14,
  grade: GradeLevel.Middle,
  isEnrolled: true,
  results: [["Math", 85], ["English", 78]],
};

let student2: Student = {
  name: "Luwai",
  age: 10,
  grade: GradeLevel.Primary,
  isEnrolled: true,
  results: [["Math", 95], ["English", 98]],
};

console.log(printReportCard(student1));
getStudentInfo(17);
getStudentInfo("M107");

console.log(printReportCard(student2));
getStudentInfo(12);
getStudentInfo("L102");



