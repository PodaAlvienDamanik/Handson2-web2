"use strict";
/*

Typescript Functions

    Typescript memungkinkan kita untuk menentukan
    - Tipe parameter
    - Tipe  return value
    - Optional parameters
    - Default parameters
    - Rest parameters

*/
Object.defineProperty(exports, "__esModule", { value: true });
//Object type annotation
let user = {
    name: "Poda",
    age: 30,
    email: "alvindamanik578@gmail.com",
};
//Implementasi interface
let employee = {
    id: 1,
    name: "Poda Alvien Damanik",
    department: "IT",
    salary: 50,
    contact: "alvindamanik578@gmail.com"
};
let company = {
    name: "Dana",
    address: {
        street: "123 Main St",
        city: "Tech City",
        country: "Techland",
    },
    employees: [employee],
};
console.log("User: ", user);
console.log("Employee: ", employee);
console.log("Company: ", company);
