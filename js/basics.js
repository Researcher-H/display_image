// js-02 //

// https://www.quora.com/How-do-you-insert-an-image-in-Javascript

var src = document.querySelector("#js2"); // find target element
// console.log(src); // this is for sanity check
var img = document.createElement("img"); // create element first

img.src = "images/dog1.jpg"; // assign an image to the element
img.width = "300"; // assign an image to the element
img.alt = "dog1";
img.title = "dog1";

src.innerHTML = ""; // remove strings

src.appendChild(img); // assign the image element to the target element
