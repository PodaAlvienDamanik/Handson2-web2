"use strict";
/*

Typescript enums

enum digunakan untuk mendefinisikan sekumpulan nilai yang bernama dan berhubungan,
yang memudahkan representasi dan manipulasi data yang memiliki nilai tetap atau pilihan yang terbaik
*/
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
//string enum
var color;
(function (color) {
    color["Red"] = "RED";
    color["Green"] = "GREEN";
    color["Blue"] = "BLUE";
})(color || (color = {}));
console.log("Direction: ", Direction.Down);
console.log("Color: ", color.Green);
