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

*/