"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Deklarasi variable dengan tipe data explicit
let age = 25;
let name = "Poda Alvien Damanik";
let isActive = true;
let notFound = null;
let notDefined = undefined;
let anything = "bisa apa aja /any value";
anything = 70;
// Type inference (Typescript akan menebak tipe data secara otomatis)
let gaji = 5000; //Typescript akan menganggap variable ini sebagai number
let pesan = "Hello W`orld"; //akan menganggap variavle ini sebagai string
function logPesan() {
    console.log("Ini adalah fungsi void");
}
console.log("Age: ", age);
console.log("Name: ", name);
console.log("is Active: ", isActive);
