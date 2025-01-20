
// Deklarasi variable dengan tipe data explicit
let age: number = 25;
let name: string = "Poda Alvien Damanik";
let isActive: boolean = true;
let notFound: null = null;
let notDefined: undefined = undefined;
let anything: any = "bisa apa aja /any value";
anything = 70;

// Type inference (Typescript akan menebak tipe data secara otomatis)
let gaji = 5000; //Typescript akan menganggap variable ini sebagai number
let pesan = "Hello W`orld"//akan menganggap variavle ini sebagai string

function logPesan():void {
    console.log("Ini adalah fungsi void");
}

console.log("Age: ",age);
console.log("Name: ",name);
console.log("is Active: ",isActive);


export{};