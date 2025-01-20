/*

Typescript enums

enum digunakan untuk mendefinisikan sekumpulan nilai yang bernama dan berhubungan,
yang memudahkan representasi dan manipulasi data yang memiliki nilai tetap atau pilihan yang terbaik
*/


enum Direction{
    Up,
    Down,
    Left,
    Right,
}

console.log(Direction.Up);

//string enum

enum color{
    Red ="RED",
    Green ="GREEN",
    Blue ="BLUE",
}

console.log("Direction: ", Direction.Down);
console.log("Color: ", color.Green);


