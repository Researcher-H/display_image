// js-02 //

// https://www.quora.com/How-do-you-insert-an-image-in-Javascript

var src = document.querySelector("#js2"); // find target element
// console.log(src); // this is for sanity check
src.innerHTML = ""; // remove strings

var img = document.createElement("img"); // create element first

// img.src = "images/dog1.jpg"; // assign an image to the element
// img.width = "300"; // assign an image to the element
// img.alt = "dog1";
// img.title = "dog1";

// console.log(Math.random());
// create a function to generate a random integer number
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))+1;
}

// try to create a random integer number
var randint = getRandomInt(10);
// console.log(randint);

// try to assign random int number to each image

function getDogCatImg(){
  if (randint > 5) {
    var randint4img = randint - 5;
    var dog_cat = "dog";
    // console.log("images/" dog_cat + randint4dog + ".jpg");
  } else {
    var randint4img = randint;
    var dog_cat = "cat";
    // console.log("images/cat" + randint  + ".jpg");
  }
  img.width = "300";
  img.alt = dog_cat + randint4img;
  img.title = dog_cat + randint4img;
  img.src = "images/" + dog_cat + randint4img + ".jpg";
  document.querySelector("#hidden_mssg").innerHTML = "ページをリロードしてね";
}

function runpersec() {
  thisVar = setTimeout(getDogCatImg(), 1000);
}

src.appendChild(img); // assign the image element to the target element



