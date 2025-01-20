"use strict";
/*

Typescript Tuples

tuple adalah array dengan:
- jumlah element yang tetap
- tipe data yang sudah ditentukan untuk setiap posisi
*/
Object.defineProperty(exports, "__esModule", { value: true });
//Deklarasi tuples
let person = ["Poda", 30, true];
//tuple untuk koordinat
let kordinat = [10.7, 20.5];
//tuple dengan opsional element
let optionalTuple = ["Halo halo"];
optionalTuple = ["Hello", 48];
//Destructuring tuple
let [name, age, isEmployed] = person;
console.log("Name: ", name);
console.log("Age: ", age);
console.log("Employed: ", isEmployed);
let employees = [
    ["John", 30],
    ["Sukijok", 20],
    ["Yesaya", 19],
];
employees.forEach(([name, age]) => {
    console.log(`${name} is ${age} years old`);
});
