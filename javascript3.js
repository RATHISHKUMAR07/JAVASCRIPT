/*
HTML DOM
Finding HTML element by id
While using it we have to place Js file after html code
make sure the JS script tag is loaded
after the DOM elements are declared and
you're using an existing identifier to get the element.

const element = document.getElementById("intro");
document.getElementById("demo").innerHTML =
" Hello" + element.innerHTML;

Finding HTML element by tagname
const element = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML =
    'The text ' + element[1].innerHTML;

Finding HTML element by tagname ang id
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");
document.getElementById("demo").innerHTML =
    'This is 2 p tag ' + y[1].innerHTML;

Finding HTML element by class name
const x = document.getElementsByClassName('class1');
document.getElementById('demo').innerHTML =
    "This is class 2 " + x[1].innerHTML;

To change the value of an HTML attribute, use this syntax:
document.getElementById(id).attribute = new value

To change img in html
document.getElementById("img").src = "gif.gif";


Js Form validation
function validateForm() {
    let x = document.forms["my"]["fname"].value;
    if (x == "") {
        alert("Name must filled");
    }
    else {
        return false;
    }
}


Dom Animate
function myMove() {
    let id = null;
    const element = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        }
        else {
            pos++;
            element.style.top = pos + "px";
            element.style.right = pos + "px";
        }
    }

}

Dom Events
function checkCookies() {
    var text = "";
    if (navigator.cookieEnabled == true) {
        text = "cookies enabled";
    }
    else {
        text = "cookies not";
    }
    document.getElementById("demo").innerHTML = text;
}
Change lower to upper
function toUpperCase() {
    const x = document.getElementById('fname');
    x.value = x.value.toUpperCase();
}

function mOver(obj) {
    obj.innerHTML = "Thank you";
}
function mOut(obj) {
    obj.innerHTML = "Mouse over me";
}

function mDown(obj) {
    obj.style.backgroundColor = "blue";
    obj.innerHTML = "Release Me"
}
function mUp(obj) {
    obj.style.backgroundColor = "green";
    obj.innerHTML = "Thank you";
}

Syntax
element.addEventListener(event, function, useCapture);

document.getElementById("btn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById('demo').innerHTML = Date();
}


var x = document.getElementById('btn');
x.addEventListener("mouseover", my1);
x.addEventListener("click", my2);
x.addEventListener("mouseout", my3);

function my1() {
    document.getElementById('demo').innerHTML = "Mouse over<br>";
}
function my2() {
    document.getElementById('demo').innerHTML += "Mouse clicked<br>";
}
function my3() {
    document.getElementById('demo').innerHTML = "Mouse out<br>";
}

Dom Navigate
document.getElementById("id2").innerHTML =
    document.getElementById('id1').firstChild.nodeValue;

DOM NODES
const para = document.createElement("p");
const node = document.createTextNode("This is new");
para.appendChild(node);
const element = document.getElementById("div1");
element.appendChild(para);

const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
const child = document.getElementById("p1");

Insert Before
element.insertBefore(para, child);

const remove = document.getElementById('p1');
remove.remove();

DOM Collections
const myNodelist = document.getElementsByTagName("p");
for (let i = 0; i < myNodelist.length; i++) {
  myNodelist[i].style.color = "blue";
}

DOM Node List
const myNodelist = document.querySelectorAll("p");
for (let i = 0; i < myNodelist.length; i++) {
  myNodelist[i].style.color = "red";
}
*/