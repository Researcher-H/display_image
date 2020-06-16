// // // // 
// js-04 //
// // // // 

// source
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_loc_href
document.getElementById("demo1").innerHTML = "The full URL of this page is:<br>" + window.location.href;
document.getElementById("demo2").innerHTML = "The full URL of this hostname is:<br>" + window.location.hostname;
document.getElementById("demo3").innerHTML = "The full URL of this pathname is:<br>" + window.location.pathname;
// this should be "/display_image/" + "contents/js" + "xxx" + ".html"

var hweb_path = window.location.pathname;
var count_path = hweb_path.length;

if ( count_path > 15 ) {
  // console.log ("more than 15");
  var add_hpath = true;
  // source
  // add_hpath = hweb_path.substr(15,count_path);
} else {
  // console.log ("less or equal to 15!");
  var add_hpath = false;
}

// console.log(add_hpath);

var demo4adr = document.getElementById("demo4").innerHTML;

// prev code

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

  if (add_hpath == true) {
    img.src = "../images/" + dog_cat + randint4img + ".jpg";
  } else {
    img.src = "images/" + dog_cat + randint4img + ".jpg";
  }

  document.querySelector("#hidden_mssg").innerHTML = "ページをリロードしてね";
}

function runpersec() {
  thisVar = setTimeout(getDogCatImg(), 1000);
}

src.appendChild(img); // assign the image element to the target element




// // // // 
// js-05 //
// // // // 

// try to create a random integer number
function rndInt() {
  let num = getRandomInt(10);
  console.log("func said " + num);
  return num;
}

// this is for testing this func
// function runpersec2() {
//   thisVar = setTimeout(rndInt(), 1000);
// }

var src2 = document.querySelector("#js3"); // find target element
src2.innerHTML = ""; // remove strings

var img2 = document.createElement("img"); // create element first
var rnd10
// console.log("rnd10 is " + rnd10);

function getDogCatImg2(){
  rnd10 = rndInt();
  // console.log("rnd10 is " + rnd10);
  img2.innerHTML = ""; // remove strings

  if (rnd10 > 5) {
    var randint4img2 = rnd10 - 5;
    var dog_cat2 = "dog";
    // console.log("images/" dog_cat + randint4dog + ".jpg");
  } else {
    var randint4img2 = rnd10;
    var dog_cat2 = "cat";
    // console.log("images/cat" + rnd10  + ".jpg");
  }

  img2.width = 300;
  img2.alt = dog_cat2 + randint4img2;
  img2.title = dog_cat2 + randint4img2;

  if (add_hpath == true) {
    img2.src = "../images/" + dog_cat2 + randint4img2 + ".jpg";
  } else {
    img2.src = "images/" + dog_cat2 + randint4img2 + ".jpg";
  }

  document.querySelector("#hidden_mssg2").innerHTML = " <strong>連続</strong>ボタンを押してみよう！ ";
}

function runpersec2() {
  thisVar = setTimeout(getDogCatImg2(), 1000);
  src2.appendChild(img2); // assign the image element to the target element
}
