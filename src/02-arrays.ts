//cara 1: tipe[]
let numbers : number[] = [1,2,3,4,5];
let names: string[] = ["Poda","Alvien","Damanik"];


//cara 2: Array[]
let scores: Array<number> = [1,2,3,4];
let buah: Array<string> = ["Mangga","Jambu","Pisang"];

//Arrat dengan multiple types (union type)
let campur:(string | number )[] = [1, "Two", 3, "Four"];

//Array methods
numbers.push(6); // menambah element
names.pop(); // Menghapus element terakhir

// Iterasi Array
numbers.forEach(num => {
    console.log("Number: ", num);
    
});

const doubledNumbers = numbers.map((num) => num * 2);
console.log("Doubled numbers: ", doubledNumbers);

export{};
