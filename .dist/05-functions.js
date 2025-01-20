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
// Basic function dengan tipe
function add(a, b) {
    return a + b;
}
// Arrow function dengan tipe
const perkalian = (x, y) => {
    return x * y;
};
// Function dengan optional parameter
function greet(name, greeting) {
    if (greeting) {
        return `${greeting},${name}!`;
    }
    return `Hello, ${name}`;
}
// Function dengan default parameter
function createEmail(to, subject = "No Subject") {
    return `Email to : ${to}, Subject:${subject}`;
}
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
function processInput(input) {
    if (typeof input === "number") {
        return input * 2;
    }
    return input.toUpperCase();
}
;
console.log(greet("John"));
