"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//cara 1: tipe[]
let numbers = [1, 2, 3, 4, 5];
let names = ["Poda", "Alvien", "Damanik"];
//cara 2: Array[]
let scores = [1, 2, 3, 4];
let buah = ["Mangga", "Jambu", "Pisang"];
//Arrat dengan multiple types (union type)
let campur = [1, "Two", 3, "Four"];
//Array methods
numbers.push(6); // menambah element
names.pop(); // Menghapus element terakhir
// Iterasi Array
numbers.forEach(num => {
    console.log("Number: ", num);
});
const doubledNumbers = numbers.map((num) => num * 2);
console.log("Doubled numbers: ", doubledNumbers);
