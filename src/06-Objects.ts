/*

Typescript Functions

    Typescript memungkinkan kita untuk menentukan
    - Tipe parameter
    - Tipe  return value
    - Optional parameters
    - Default parameters
    - Rest parameters

*/

//Object type annotation
let user:{ name: string; age:number; email: string } ={
    name:"Poda",
    age: 30,
    email: "alvindamanik578@gmail.com",
};

//interface untuk object
interface Employee{
    id: number;
    name: string;
    department : string;
    readonly salary: number;
    contact? : string;
}

//Implementasi interface
let employee : Employee = {
    id:1,
    name:"Poda Alvien Damanik",
    department:"IT",
    salary:50,
    contact: "alvindamanik578@gmail.com"
}

//Nested Objects
interface Company {
    name: string;
    address:{
        street: string;
        city: string;
        country: string;
    };
    employees: Employee[];
}

let company: Company = {
    name : "Dana",
    address:{
        street: "123 Main St",
        city: "Tech City",
        country: "Techland",
    },
    employees: [employee],
};

console.log("User: ", user);
console.log("Employee: ", employee);
console.log("Company: ", company);

export{};



