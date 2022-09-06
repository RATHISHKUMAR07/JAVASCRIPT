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


//Js Form validation
function validateForm() {
    let x = document.forms["my"]["fname"].value;
    if (x == "") {
        alert("Name must filled");
    }
    else {
        return false;
    }
}
*/