/*
--------------FUNCTIONS--------------------
function myFunction() {
        document.getElementById("demo").innerHTML = "paragraph";
     }
function my() {
        document.getElementById("demo").innerHTML = 5 + 10;
     }
--------------DISPLAY CONTENT--------------
 document.write("Hello");
 window.alert("Help");
 console.log(1 + 1);
--------------VARIABLES--------------------
function add() {
        let x, y;
        let z;
        x = 1;
        y = 1;
        z = x + y;
        const m = "Hello ";
        document.getElementById('demo').innerHTML =
                m + z + ".";
}
--------------LET--------------------
function details() {
        let person = "rathish",
        carName = "volvo ",
        price = 200;
document.getElementById("demo1").innerHTML = person +" "+price;
}
--------------CONST--------------------
const cars = ["BMW", "AUDI", "BENZ"];
cars[0] = "R8";
cars.push("VOLVO");
document.write(cars);
document.write("<br>");
---------------JS OBJECTS-----------------
const car = { type: "fiat", model: "500", color: "white" };
car.color = "red";
car.owner = "John";
document.write("Car owner is " + car.owner);

--------------OPERATORS--------------------
let x = 5, y = 2;
document.write("Addition "+ (x + y) + "<br>");
document.write("Subtraction "+ (x - y) + "<br>");
document.write("Multiply "+ x * y + "<br>");
document.write("Division "+ x / y + "<br>");
document.write("Modulus "+ x % y + "<br>");
document.write("Exponentiation "+ x ** y + "<br>");
document.write("Increment "+ ++x + "<br>");
document.write("Decrement "+ --y);

let text1 = "rathish";
let text2 = "kumar";
let text3 = text1 + " " + text2;
document.write("<br>" + text3);

let text1 = "Hello!";
text1 += "Everyone";
document.write("<br>" + text1);

let x = "5" + 5;
let y = "Hello" + 5 + 2;
let z = "Hello " + 5;
document.write(x + " " + y + " " + z);

let x = 123e5;
let y = 123e-5;
document.write("123e5 - " + x + "<br> 123e-5 - " + y);

------------------JS FUNCTIONS-----------------

function my(p1, p2) {
        return p1 * p2;     
}
document.write(my(3,3));

------------------JS OBJECTS--------------------

const car = { type: "Fiat", color: "Red", model: 200 };
document.write("Model is :" + car.model + "<br>");

const person = {
        firstName : "Rathish",
        lastName : "M",
        age: 21,
        fullName: function () {
                return this.firstName + " " + this.lastName;
        }
}
document.write("Name : " + person.firstName + " " + person.lastName +
        "<br>" + "Age : " + person.age);
If We access fullname without () then it will return inside function content
function () { return this.firstName + " " + this.lastName; }

document.write("<br>Name : " + person.fullName() + "<br>" +
        "Age : " + person.age);

function displayDate(){
        document.getElementById("demo1").innerHTML = Date();
}

---------------ESCAPE SEQUENCE-----------------
document.write("Hello \b everyone <br>");
document.write("Hello \f everyone <br>");
document.write("Hello \n everyone <br>");
document.write("Hello \r everyone <br>");
document.write("Hello \t everyone <br>");
document.write("Hello \v everyone <br>");

-------------EXTRACTING STRING------------------

let str = "Apple, Orange, Pineapple";
let part = str.slice(7, 13);
let part$ = str.slice(-18, -11);
document.write(part + " - " + part$);
IN SUBSTRING START AND END VALUES LESS THAN 0 TREATED AS 0
let part1 = str.substring(7, 13);
document.write("<br>" + part1);
let part2 = str.substr(7, 6);
document.write("<br>" + part2);

-----------------TEMPLATE LITERALS--------------
let firstName = "Rathish";
let lastName = "M";
let fullName = `Hello ${firstName} ${lastName}`;
document.write(fullName);

let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(4)}`;
toFixed number of digits after .(dot)
document.write("<br>" + total);
------------------NUMERIC STRINGS-----------------

let x = "100";
let y = "10";
document.writeln(x / y + "<br>");
document.writeln(x * y + "<br>");
document.writeln(x - y + "<br>");
document.writeln(x + y + "<br>");
document.writeln(x / "Apple" + "<br>");
Show error we can't do arithmetic using non-numeric string
document.writeln(x / "10" + "<br>");
------------------BASE NUMBERS--------------------

let myNumber = 32;
document.write("Decimal 32 = " + "<br>" + 
"Hexatrigesimal (base 36): " + myNumber.toString(36) + "<br>" +
"Duotrigesimal (base 32): " + myNumber.toString(32) + "<br>" +
"Hexadecimal (base 16): " + myNumber.toString(16) + "<br>" +
"Duodecimal (base 12): " + myNumber.toString(12) + "<br>" +
"Decimal (base 10): " + myNumber.toString(10) + "<br>" +
"Octal (base 8): " + myNumber.toString(8) + "<br>" +
"Binary (base 2): " + myNumber.toString(2));
---------------------NEW OBJECT---------------------

Do not create Number objects.
The new keyword complicates the code and slows down execution speed.
Number Objects can produce unexpected results:

let x = new Number(123);
let y = 123;
document.write(typeof x + "<br>" + typeof y);


The toString() method returns a number as a string.

let x = 123;
document.write(x.toString()+" ");
document.write((123).toString()+" ");
document.write((100 + 23).toString() + " ");
let y = (100 + 23).toString();
document.write(typeof y);

The valueOf() method is used internally in JavaScript
To convert Number objects to primitive values.

let x = 123;
document.write(x.valueOf()+" ");
document.write((123).valueOf()+" ");
document.write((100 + 23).valueOf() + " ");
let y = (100 + 23).valueOf();
document.write(typeof y);

document.write(
        Number(true) + "<br>" +
        Number(false) + "<br>" +
        Number("10") + "<br>" +
        Number("  10") + "<br>" +
        Number("10  ") + "<br>" +
        Number(" 10  ") + "<br>" +
        Number("10.33") + "<br>" +
        Number("10,33") + "<br>" +
        Number("10 33") + "<br>" +
        Number("John") + "<br>"+ "<br>"
);
document.write(
        parseInt("-10") + "<br>" +
        parseInt("-10.33") + "<br>" +
        parseInt("10") + "<br>" +
        parseInt("10.33") + "<br>" +
        parseInt("10 6") + "<br>" +
        parseInt("10 years") + "<br>" +
        parseInt("years 10") + "<br>"+ "<br>"
);
document.write(
        parseFloat("10") + "<br>" +
        parseFloat("10.33") + "<br>" +
        parseFloat("10 6") + "<br>" +  
        parseFloat("10 years") + "<br>" +
        parseFloat("years 10") + "<br>"
);
In JavaScript, arrays use numbered indexes.  

In JavaScript, objects use named indexes.

PUSH - POP
Means it will add and remove from the last index

const fruits = ["Apple", "Mango", "Orange"];
fruits.push("Kiwi")
document.write("PUSH - " + fruits + "<br>");
fruits.pop();
document.write("POP - " + fruits + "<br>");

SHIFT - UNSHIFT
Means it will add and remove from the first index

fruits.unshift("Pineapple");
document.write("UNSHIFT - " + fruits + "<br>");
fruits.shift();
document.write("SHIFT - " + fruits + "<br>");

Merging arrays

const ar1 = ["Tea", "Coffee"];
const ar2 = ["Water", "Juice"];
const ar3 = ["Ice", "Soda"];
document.write("TWO ARRAY CONCAT - " + ar1.concat(ar2) + "<br>");
document.write("THREE ARRAY CONCAT - " + ar1.concat(ar2,ar3) + "<br>");


ARRAY SPLICE

const fruits = ["Apple", "Orange", "Goa", "Kiwi"];

The first parameter(2) defines 
the position where new elements should be added(spliced in).
The second parameter(0) defines 
how many elements should be removed

fruits.splice(2, 0, "Lemon", "Pineapple");
document.write(fruits + " <br>");

Splice also remove the elements
The first parameter (0) defines 
the position where new elements should be added (spliced in).
The second parameter (1) defines
 how many elements should be removed

fruits.splice(0, 1);
document.write(fruits);


ARRAY SLICE
const fruits = ["Apple", " Orange", "Kiwi"];
It wil slice from 0 Pos to len - 2 in the array

document.write(fruits.slice(2)); //Output is Kiwi
document.write(fruits.slice(0, 2)); //Output is Apple , Orange


Number Sort Ascending
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
        return a - b
});
document.write(points + "<br>");

Number sort Descending
const point = [40, 100, 1, 5, 25, 10];
point.sort(function (a, b) {
        return b - a
});
document.write(point);

const points = [40, 100, 1, 5, 25, 10];
points.sort(function () {
        return 0.5 - Math.random();
});
document.write(points);

const cars = [
        { type: "Volvo", year: 2017 },
        { type: "BMW", year: 2015 },
        { type: "Audi", year: 2013 }
];
cars.sort(function (a, b) {
        return a.year - b.year;
})
cars.sort(function (a, b) {
        return a.type - b.type;
})
document.write(cars[0].year + " " + cars[1].year + " " + cars[2].year + " ");
document.write(cars[0].type + " " + cars[1].type + " " + cars[2].type);
-----------------ARRAY ITERATION----------------

const numbers = [1, 2, 3, 4, 5, 6, 7];
let txt = "";
numbers.forEach(iterate);
function iterate(value) {
        txt += value;
        document.write(txt + "<br>");
}
----------------------MAP()-----------------------

const num1 = [1, 2, 3, 4, 5];
const num2 = num1.map(no);

Note that the function takes 3 arguments:

The item value
The item index
The array itself

function no(value,index,array) {
        return 2 * value;
}
document.write(num2);
-------------------FILTER()-----------------------

const numbers = [1, 23, 45, 67, 89, 0];
const over45 = numbers.filter(greater);

function greater(value) {
        return value > 45;
}
document.write(over45);
-------------------REDUCE()-----------------------
The reduce() method runs a function on each array 
element to produce (reduce it to) a single value

const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(addition);

function addition(total, value) {
        return total + value;
}
document.write(sum);
---------------------EVERY()-----------------------
The every() method check if all array values pass a test.

const numbers = [1, 2, 3, 4, 5];
let sum = numbers.every(addition);

function addition(value) {
        return value > 3;
}
document.write(sum);

---------------------SOME()-----------------------
The some() method check if some array values pass a test.


const numbers = [1, 2, 3, 4, 5];
let sum = numbers.some(addition);

function addition(value) {
        return value > 3;
}
document.write(sum);

---------------------INDEXOF()-----------------------
The some() method check if some array values pass a test.

array.indexOf(item, start)
const numbers = [1, 2, 3, 4, 5];
let pos = numbers.indexOf(2);

document.write(pos + 1);
-------------------------FIND()----------------------------

const numbers = [1, 2, 3, 4, 5];
let first = numbers.find(findFirst);

function findFirst(value,index,array) {
        return value > 3;
}
document.write(first + 1);

const numbers = [1, 2, 3, 4, 5];
let firstIndex = numbers.findIndex(findFirst);

function findFirst(value,index,array) {
        return value == 3;
}
document.write(firstIndex + 1);
------------------------INCLUDES()-------------------------

const fruits = ["Mango", "Orange", "Apple"];
document.write(fruits.includes('apple'));
------------------------JS DATE OBJECTS-------------------

You cannot omit month.If you supply only one parameter 
it will be treated as milliseconds.
        Eg : new Date(2018);

const d = new Date();
document.write(d + "<br>");
document.write("Date " + d.getDate() + "<br>");

JavaScript counts months from 0 to 11, So add 1

document.write("Month " + (d.getMonth() + 1) + "<br>");
document.write("Year " + d.getFullYear() + "<br>");
document.write("Hour " + d.getHours() + "<br>");
document.write("Minutes " + d.getMinutes() + "<br>");
document.write("Seconds " + d.getSeconds() + "<br>");
document.write("MilliSeconds " + d.getMilliseconds() + "<br>");
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
document.write("Day " + d.getDay() + " - "
        + days[d.getDay()] + "<br>");

document.write(d.toDateString() + "<br>");

const dt = new Date("2015-03-25T12:00:00Z");
document.write(dt + "<br>");

Date.parse() returns the number of milliseconds

let msec = Date.parse("December 20, 2000");
document.write("MilliSeconds " + msec);


const d = new Date();
document.write("Date " + d.setDate(7) + "<br>");
document.write("Month " + (d.setMonth(7) + 1) + "<br>");
document.write("Year " + d.setFullYear(2000) + "<br>");
document.write("Hour " + d.setHours(7) + "<br>");
document.write("Minutes " + d.setMinutes(7) + "<br>");
document.write("Seconds " + d.setSeconds(7) + "<br>");
document.write("MilliSeconds " + d.setMilliseconds(77) + "<br>");
document.write(d);

---------------------JS MATH---------------------

document.write(
        "<p><b>Math.E:</b> " + Math.E + "</p>" +
        "<p><b>Math.PI:</b> " + Math.PI + "</p>" +
        "<p><b>Math.SQRT2:</b> " + Math.SQRT2 + "</p>" +
        "<p><b>Math.SQRT1_2:</b> " + Math.SQRT1_2 + "</p>" +
        "<p><b>Math.LN2:</b> " + Math.LN2 + "</p>" +
        "<p><b>Math.LN10:</b> " + Math.LN10 + "</p>" +
        "<p><b>Math.LOG2E:</b> " + Math.LOG2E + "</p>" +
        "<p><b>Math.Log10E:</b> " + Math.LOG10E + "</p>"
);
Math.round(x)	Returns x rounded to its nearest integer



document.write("Round() - " + Math.round(4.6) +" ");
document.write(Math.round(4.5) + " ");
document.write(Math.round(4.4));

Math.ceil(x)	Returns x rounded up to its nearest integer

document.write("Ceil() - " + Math.ceil(4.6) +" ");
document.write(Math.ceil(4.5) + " ");
document.write(Math.ceil(4.4));

Math.floor(x)	Returns x rounded down to its nearest integer

document.write("floor() - " + Math.floor(4.6) +" ");
document.write(Math.floor(4.5) + " ");
document.write(Math.floor(4.4));

Math.trunc(x)	Returns the integer part of x


document.write("Trunc() - " + Math.trunc(4.6) +" ");
document.write(Math.trunc(4.5) + " ");
document.write(Math.trunc(4.4));

document.write("Sign() - " + Math.sign(-4) + " ");
document.write(Math.sign(4) + " ");
document.write(Math.sign(0) + " ");

document.write("Power - " + Math.pow(2,2) + " ");
document.write("Sqrt - " + Math.sqrt(49) + " ");

Math.abs(x) returns the absolute (positive) value

document.write("Abs - " + Math.abs(-49) + " ");

document.write("Min - " + Math.min(2, 1, 4, 0, 3, 5));
document.write("Max - " + Math.max(2, 1, 4, 0, 3, 5));

Math.random() returns a random number
between 0(inclusive), and 1(exclusive):

document.write("Random - " + Math.random());

It will print 0 - 99 randomly
document.write(Math.floor(Math.random() * 100));
---------------------JS BOOLEANS-----------------------

Everything Without a "Value" is False

document.write(Boolean(1 > 2));
document.write(Boolean(false));
document.write(Boolean(0));
document.write(Boolean("false"));
document.write(Boolean(""));

Ternary Operator
let age = 19;
let dec = (age < 18) ? "To Young" : "Perfect";
document.write(dec);
-------------------JS IF ELSE----------------------------

let age = 41;
if (age < 18) {
        document.write("Young age");
}
else if(age > 18 && age < 40){
        document.write("Middle age")
}
else {
        document.write("Old age")
}
-------------------JS SWITCH----------------------------

let hour = 21;
switch (true) {
        case (hour < 10):
                document.write("Morning");
                break;
        case (hour > 12 && hour < 14):
                document.write("Afternoon");
                break;
        case (hour > 15 && hour < 18):
                document.write("Evening");
                break;
        case (hour > 19 && hour < 24):
                document.write("Night");
                break;
}
-------------------JS FOR LOOP----------------------------

const cars = ["Audi", "BMW", "Volvo", "Benz", "Jeep"];
for (let i = 0; i < cars.length; i++){
        document.write(cars[i] + "<br>");
}
-------------------JS FOR IN LOOP----------------------------
for (x in cars) {
        document.write(cars[x] + "<br>");
}
-------------------JS FOR OF LOOP----------------------------
let text = "";
for (y of cars) {
        text += y + "<br>";
}
document.write(text);


let lang = "Javasript";
let text = "";
for (x of lang) {
        text += x + "<br>";
}
document.write(text);

-------------------JS WHILE LOOP----------------------------

let i = 0;
while (i <= 10) {
        document.write(i + "<br>");
        i++;
}
-------------------JS DO WHILE LOOP----------------------------
let i = 0;
do {
        i++;
        document.write(i + "<br>");
}
while (i < 10);
---------------------------JS ITERABLES------------------------
let text ="";
const names = "rathish";
for (const x of names) {
        text += x + "<br>";
}
document.write(text);

let text = "";
const names = ["Apple", "Mango", "Orange"];
for (const x of names) {
        text += x + "<br>";
}
document.write(text);

let text = "";
const names = new Set(["a", "b", "c"]);
for (const x of names) {
        text += x + "<br>";
}
document.write(text);


let text = "";
const names = new Map([
        ["a", 1],
        ["b", 2],
        ["c",3]
]);
for (const x of names) {
        text += x + "<br>";
}
document.write(text);

*/