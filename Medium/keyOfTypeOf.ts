/*typeof is used to get the type of a variable or object.
keyof gets a union type of all property keys of a type*/

/*
Use typeof to define the type of employee.
Use keyof to extract the keys from the employee type.
Create a function getEmployeeDetail that accepts the employee object and a key (keyof typeof employee) and prints the value.*/

const employee = {
  id: 171,
  name: "Moana",
  role: "Developer",
};

type Employee = typeof employee;
type EmployeeKey = keyof Employee;

function getEmployeeDetail(emp: Employee, key: EmployeeKey):void{
  console.log(`Value of ${key} is ${emp[key]}`);
  
}

getEmployeeDetail(employee, "name");
getEmployeeDetail(employee,"id");
getEmployeeDetail(employee,"role");