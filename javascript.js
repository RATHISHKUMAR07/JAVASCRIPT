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

*/


