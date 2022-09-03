/*---------------------JS SET()------------------------
new Set()	Creates a new Set
add()	    Adds a new element to the Set
delete()	Removes an element from a Set
has()	    Returns true if a value exists in the Set
forEach()	Invokes a callback for each element in the Set
values()	Returns an iterator with all the values in a Set
Property	Description
size	    Returns the number of elements in a Set

const letters = new Set(["a", "b", "c"]);

const letters = new Set();
letters.add("d");
letters.add("f");
letters.add("g");
document.write(letters);
let text = "";
letters.add("m");
for (const x of letters.values()) {
    text += x + "<br>";
}
document.write(text);

--------------------------JS MAPS()----------------------
new Map()	Creates a new Map
set()	    Sets the value for a key in a Map
get()	    Gets the value for a key in a Map
delete()	Removes a Map element specified by the key
has()	    Returns true if a key exists in a Map
forEach()	Calls a function for each key/value pair in a Map
entries()	Returns an iterator with the [key, value] pairs in a Map
Property	Description
size	    Returns the number of elements in a Map


const fruits = new Map([
    ["Apple", 500],
    ["orange", 600]
]);
document.write(fruits.size);
fruits.set("Banana", 200);
text = "";
for (const x of fruits) {
    text += x + "<br>";
}
document.write(text);

document.write(fruits.get("Banana"));

const fruit = new Map([
    ["Apple", 500],
    ["orange", 600]
]);
let txt = "";
fruit.forEach(function (value, key){
    txt += key + " = " + value;
})
document.write(txt);

for (const x of fruit.entries()) {
    txt += x + " - <br>";
}
document.write(txt);

In JavaScript there are 5 different data types that can contain values:

string-number-boolean-object-function

There are 6 types of objects:

Object-Date-Array-String-Number-Boolean

And 2 data types that cannot contain values:

null-undefined
--------------------JS TYPE CONVERSION------------------

document.write(Number("3.14") + "<br>");
document.write(Number(Math.PI) + "<br>");
document.write(Number("   ") + "<br>");
document.write(Number("") + "<br>");
document.write(Number("99.88") + "<br>");
document.write(Number("John") + "<br>");

document.write(String(123) + "<br>");
document.write(String(100 + 23) + "<br>");

---------------------JS REGULAR EXP---------------------
syntax - /pattern/modifiers;

//STRING SEARCH

let txt = "Visit W3";
let pos = txt.search("W3");
document.write(pos);

//Using RegX
let text = "Visit W3";
let post = text.search(/W3/i);
document.write(post);

//STRING REPLACE
let txt = "Hello Everyone";
let repl = txt.replace("Everyone", "!");
document.write(repl);

//Using RegX
let replace = txt.replace(/Everyone/i, "!");
document.write(replace);

Modifier

i ---> Perform case-insensitive match {eg: "w3" -- "W3"} ==>W3
g ---> Perform global match(finds all matchings)
        {eg: "I hello I am",I} ==>I I
m ---> Perform multiline match

let text = "Hello hi Hello hi";
let result = text.match(/Hello/g);
document.write(result);

let txt = "\nIs th\nis it?";
let res = txt.match(/^is/m);
document.write(res);

[abc] ---> Find any characters btw brackets
[0-9] ---> Find any digits btw brackets
(x|y) --->Find any of the alternatives separated with |

let txt = "Hello I am rathish kumar 1234";
let res = txt.match(/[la]/g);
document.write(res);

let res1 = txt.match(/[1-3]/g);
document.write(res1);

let txt = "Give 100% level";
//  \d --> find a digit
let res1 = txt.match(/\d/g);
//  \s --> find a whitespace character
let res2 = txt.match(/\s/g);
//  \b --> find a match at beg or end
let res3 = txt.search(/\ble/g); //Beginning
let res4 = txt.search(/el\b/g);

document.write(res1 + " " + res2 + " " + res3 + " " + res4);

//  o+ --> Matches any string at least one n
//  o* --> Matches any string that contains 0 or more occur of o

let txt = "Helloo world";
let res = txt.match(/o+/g);
document.write(res);


const pattern = /a/;
//Since there is an "e" in the string, the output will true
document.write(pattern.test("Rathish Kumar"));
document.write(/t/.test("Rathish Kumar"));

-----------------------JS ERRORS-----------------------
Syntax :
try{
    Block of code to try
}
catch(err){
    Block of code to handle errors
}

try {
    addert("Welcome");
}
catch (err) {
    document.write(err.message);
}

let x = 11;
try {
    if (x == "") throw "Empty";
    if (isNaN(x)) throw "Not a Number";
    x = Number(x);
    if (x < 5) throw "Too low";
    if (x > 10) throw "Too high";
}
catch (err) {
    document.write("Input is " + err);
}
finally {
    document.write("<br>Thank you!");
}

//Error Objects
Property  |	Description
----------|----------------
name	  | Sets or returns an error name
message	  | Sets or returns an error message (a string)

	    
Error Name     |Description
---------------|----------------
EvalError	   | An error has occurred in the eval() function
RangeError	   | A number "out of range" has occurred
ReferenceError | An illegal reference has occurred
SyntaxError	   | A syntax error has occurred
TypeError	   | A type error has occurred
URIError	   | An error in encodeURI() has occurred            |
 
 ------------------------STRICT MODE--------------------------

"use strict";
x = 3.14;
//Error shows(x is not defined);

"use strict";
my();
function my() {
    y = 3.14;
}


//Declared inside function so it will not cause error outside
x = 3.14;
myfunc();
function myfunc() {
    "use strict";
     y = 3.14;
}

//Objects
"use strict";
x = { p1: 1, p2: 2 };

"use strict";
let y = 3.14;
delete y;
//SyntaxError: 
Delete of an unqualified identifier in strict mode

"use strict";
function x(p1, p2) { };
delete x;
Delete of an unqualified identifier in strict mode

"use strict";
function x(p1, p1) { };
//SyntaxError:
Duplicate parameter name not allowed

"use strict";
//Octal literals are not allowed in strict mode.
let x = 010; 
//Octal escape sequences are not allowed in strict mode.
let y = "\010";
---------------------------THIS KEYWORD-----------------


const person = {
    name: "rathish",
    age: 21,
    id: 136,
    details: function () {
        return this.name + " " + this.age;
    }
};

document.write(person.details());

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.


//this alone
let x = this;
document.write(x);//Output : [object Window]

//this alone strict mode
"use strict";
let y = this;
document.write(y);//Output : [object Window]

function my() {
    return this;
}
document.write(my());//Output : [object Window]


"use strict";
function my() {
    return this;
}
document.write(my());//Output : undefined


//Function call()
const per = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const person = {
    firstName: "Rathish",
    lastName: "M",
}
document.write(per.fullName.call(person));

//Function bind()
const person = {
    firstName: "john",
    lastName: "doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const member = {
    firstName: "Rathish",
    lastName: "M",
}
let fullName = person.fullName.bind(member);
document.write(fullName());

-------------------------ARROW FUNCTION-------------------

//Before
hello = function () {
    return "Hello";
}
document.write(hello());

//After Arrow
he = () => {
    return "hello";
}
document.write(he());

hlo = () => "hello1";
document.write(hlo());

hello = (val) => "Hello " + val;
document.write(hello("Guys"));

hello = val => "Hello " + val;
document.write(hello("Guys"));

------------------------JS CLASSES--------------------------
Syntax
class ClassName {
  constructor() { ... }
}
Always add a method named constructor():

class Car{
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
let myCar = new Car("Ford", 2014);
let myCar1 = new Car("Audi", 2019);
document.write(myCar.name + " " + myCar1.year);

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
let myCar = new Car("Ford", 2014);
document.write("My car is " + myCar.age() + " years old.<br>");

---------------------------JS JSON------------------------
JSON stands for JavaScript Object Notation
JSON is often used when data is sent from a server to a web page.

JSON Syntax Rules
--Data is in name/value pairs
--Data is separated by commas
--Curly braces hold objects
--Square brackets hold arrays

//JSON ARRAY
{
    "employees": [
    { "firstName": "Rathish", "lastName": "M" },
    { "firstName": "Naveen", "lastName": "M" },
    { "firstName": "Vignesh", "lastName": "M" }
]
}

//JSON text to a Javascript object

let text = '{ "employees" :[' +
    '{ "firstName": "Rathish", "lastName": "M" },' +
    '{ "firstName": "Rathish", "lastName": "M" },' +
    '{ "firstName": "Rathish", "lastName": "M" }]}';
const obj = JSON.parse(text);

document.write(
    "FirstName - " + obj.employees[1].firstName + "<br>" +
    "LastName - " + obj.employees[1].lastName
)
---------------------------JS DEBUGGER---------------------
//It will pause the browser
console.log("Hello");
let x = 15 * 5;
debugger;
document.write(x);

Don't Use new Object()
---------------------------------
Use ""   -->instead of new String()
Use 0    -->instead of new Number()
Use false--> instead of new Boolean()
Use {}   --> instead of new Object()
Use []   -->instead of new Array()
Use /()/ -->instead of new RegExp()
Use function (){} -->instead of new Function()

let x1 = "";             // new primitive string
let x2 = 0;              // new primitive number
let x3 = false;          // new primitive boolean
const x4 = {};           // new object
const x5 = [];           // new array object
const x6 = /()/;         // new regexp object
const x7 = function(){}; // new function object

// default JavaScript behavior to close a statement
// automatically at the end of a line
//No error
let power = 10

-------------------------JS OBJECTS-------------------------
JavaScript defines 7 types of primitive data types:

string
number
boolean
null
undefined
symbol
bigint

const person = { age: 20, year: 2012 };
const x = person;
x.age = 10;
document.write("the age is " + person.age);
document.write("the age is " + person['age']);
//Adding properties
person.firstName = "Rathish";
person.lastName = "M";
document.write(person.firstName + " " + person.lastName);
//Deleting properties
delete person.year;
delete person["year"];
document.write(person.year);//Undefined
//Nested objects
const obj = {
    name: "Rathish",
    age: 21,
    cars: {
        car1: "BMW",
        car2: "Audi"
    }
}
document.write(" " + obj.cars.car1 + " " + obj.cars.car2);
document.write(" " + obj.cars["car1"] + " " + obj["cars"]["car2"]);

let p1 = "cars";
let p2 = "car1";
document.write(" " + obj[p1][p2]);

//Values in obj can be arrays and Values in arrays can be obj
const obj = {
    name: "Rathish ",
    age: 21,
    cars: [
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}
let x = "";
for (let i in obj.cars) {
    x += "<h2>" + obj.cars[i].name + "</h2>";
    for (let j in obj.cars[i].models) {
        x += "<br>" + obj.cars[i].models[j];
    }
}
document.write(x);

---------------------------JS OBJECT METHODS-----------------------
const person = {
    firstName: "Rathish",
    lastName: "M",
    age: 21,
    id: 136,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
document.write(person.fullName());

const person = {
    firstName: "Rathish",
    lastName: "M",
    id: 5566,
  };
  person.name = function() {
    return this.firstName + " " + this.lastName;
};
document.write(person.name());
//Display objects
const arr = Object.values(person);
let str = JSON.stringify(person);
document.write(arr + "<br>" + str);

//JS Getter
const person1 = {
    firstName: "Rathish",
    lastName: "M",
    language: "en",
    get lang() {
        return this.language;
    }
}
document.write(person1.lang);
//JS Setter
const person2 = {
    firstName: "Rathish",
    lastName: "M",
    language: "",
    set lang(lang) {
        this.language = lang.toUpperCase();
    }
}
person2.lang = "en";
document.write(person2.language);

const person3 = {
    firstName: "rathish",
    lastName: "M",
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}
document.write(person3.fullName);

const obj = {counter : 0};

// Define Setters and Getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});
//It will go through the all function
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
document.write(obj.counter);

-----------------------JS OBJECT CONSTRUCTORS-------------------

//Good practice to name constructor with an upper-case first letter.
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.name = function() {
        return this.firstName + " " + this.lastName;
    };
    this.changeName = function (name) {
        this.lastName = name;
    }
}
const me = new Person("Rathish", "M", 21, "Blue");
Person.nationality = "English";//Error can't add a new property
//To add a new property to a constructor, you must add it to the constructor function:
document.write(me.nationality);//Error : undefined

document.write(me.eyeColor + " " + me.name());

me.changeName("m");
document.write(me.lastName);

//Using prototype property allows to add new property outside
Person.prototype.nationality = "Tamil";
document.write(me.nationality);

Person.prototype.nameAge = function() {
    return this.firstName + " " + this.age;
};
document.write(me.nameAge());
//Set don't allow duplicates

// Change a property
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN" 
};
Object.defineProperty(person, "language", { value: "NO" })
document.write(person.language);

----------------------JS FUNCTIONS-----------------------

function my(a, b) {
    return a * b;
}
document.write(my(2, 2));

const my1 = function (a, b) { return a * b };
document.write(my1(2, 2));

//Function is invoked itself without bing called
(function () {
    document.write( "Hello! I called myself");
})();

function my2(a, b) {
    return a + b;
}
let x = my2(2, 2) * 2;
document.write(x);

//ES5
var y = function (x, y) {
    return x * y;
}

//ES6 - Arrow Function
const z = (x, y) => x * y;
const z1 = (x, y) => { return x * y };

document.write(" " + y(2, 2) + " " + z(2, 2));

//Passing less parameter it will take as a Undefined
function my(x, y) {
    if (y === undefined) {
        y = 2;
    }
    return x * y;
}
document.write(my(2));

function my1(x, y = 2) {
    return x * y;
}
document.write(my1(2));

//Find Man Number using Arguments object  contains an array of the arguments
function findMax() {
    let max = -Infinity;
    //arguments.length property returns the number of arguments received
    for (let i = 0; i < arguments.length; i++){
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
//When using too many arguments we can use the arguments object
document.write(findMax(8, 5, 7, 1, 2, 9, 44, 12, 77, 3));

//Javascript call()
const person = {
    fullName : function () {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName : "Rathish",
    lastName : "M"
}
const person2 = {
    firstName : "Naveen",
    lastName : "M"
}

document.write(person.fullName.call(person1) + " " +
    person.fullName.call(person2));

//Call method with arguments
const person = {
    fullName: function (rollNo,city) {
        return this.firstName + " " + this.lastName + "," +
            rollNo + "," + city;
    } 
}
const person1 = {
    firstName: "Rathish",
    lastName: "M"
}

document.write(person.fullName.call(person1, 136, "New york"));

//The call() method takes arguments separately.
//The apply() method takes arguments as an array.
const person = {
    fullName: function (rollNo,city) {
        return this.firstName + " " + this.lastName + "," +
            rollNo + "," + city;
    } 
}
const person1 = {
    firstName: "Rathish",
    lastName: "M"
}
document.write(person.fullName.apply(person1, [136, "New york"]));

document.write(Math.max.apply(Math, [1, 2, 3, 4, 5]));
document.write(Math.max.apply(null, [1, 2, 3, 4, 5]));
document.write(Math.max.apply(" ", [1, 2, 3, 4, 5]));
document.write(Math.max.apply(0, [1, 2, 3, 4, 5]));

//Nested Function

function add() {
    let count = 0;
    function increment() {
        count += 1;
    }
    increment();
    return count;
}
document.write(add());
------------------------JS CLASSES-------------------------

//Syntax
class ClassName{
    constructor() { }
    //We have to add constructor always to the class
}

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
//Using class we can create more objects
const car1 = new Car("Ford", 2022);
let car2 = new Car("Audi", 2021);
document.write(car1.name + " " + car1.year);

//We can create has many as methods in class
class Car{
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}
let myCar = new Car("Ford", 2000);
document.write("My car is " + myCar.age() + " years old.");
--------------------CLASS INHERITANCE---------------------

class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}
//Inherits
class Model extends Car {
    constructor(brand, mod) {
        super(brand);//Super method refers to parent class 'Car'
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}
let myCar = new Model("Ford", "Mustang");
document.write(myCar.show());

class Car {
    constructor(brand) {
      this._carname = brand;
    }
    get carname() {
      return this._carname;
    }
    set carname(x) {
      this._carname = x;
    }
}
//We are using underscore to separate the getter/setter from actual property
let myCar = new Car("Ford");
//We are using below line to change brand usings setter
myCar.carname = "Volvo";
document.write(myCar.carname);
-----------------------JS ASYNC-------------------------
//JS Callback
A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished

//Callback
function myDisplay(something) {
    document.writeln(something);
}
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
myCalculator(5, 5, myDisplay);

function my() {
    document.write("Hello!");
}
//'my' is used as a callback
setTimeout(my, 2000);
//When you pass a function as an argument,not to use parenthesis.
setTimeout(function () {
    my1("Hello@");
}, 3000);

function my1(value) {
    document.write(value);
}

//In below code we setInterval to call every 1 second
setInterval(time, 1000);
function time() {
    let d = new Date();
    document.getElementById('demo').innerHTML =
        d.getHours() + ":" +
        d.getMinutes() + ":" +
        d.getSeconds();
}//It will change the time every sec eg:15:20:47

function myDisplay(some) {
    document.getElementById('demo1').innerHTML = some;
}
function getFile(myCallback){
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function () {
        if (req.status == 200) {
            myCallback(this.responseText);
        }
        else {
            myCallback("Error: " + req.status);
        }
    }
    req.send();
}
getFile(myDisplay);
*/