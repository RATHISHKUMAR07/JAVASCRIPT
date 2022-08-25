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

*/