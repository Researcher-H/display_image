// // // // 
// js-06 //
// // // // 

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

// console.log(Math.random());
// create a function to generate a random integer number
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))+1;
}

// try to create a random integer number
function rndInt() {
  let num = getRandomInt(5);
  console.log("func said " + num);
  return num;
}

var src_cat = document.querySelector("#cat"); // find target element
src_cat.innerHTML = ""; // remove strings

var src_dog = document.querySelector("#dog"); // find target element
src_dog.innerHTML = ""; // remove strings

var img_cat = document.createElement("img"); // create element first
var img_dog = document.createElement("img"); // create element first

var rnd5

// I'm sure there is a way, but i don't know how. so i made two codes

function getCatImg(){
  rnd5 = rndInt();
  // console.log("rnd10 is " + rnd10);
  img_cat.innerHTML = ""; // remove strings
  img_cat.width = 300;
  img_cat.alt = "cat" + rnd5;
  img_cat.title = "cat" + rnd5;

  if (add_hpath == true) {
    img_cat.src = "../images/" + "cat" + rnd5 + ".jpg";
  } else {
    img_cat.src = "images/" + "cat" + rnd5 + ".jpg";
  }

  document.querySelector("#hidden_mssg2").innerHTML = " <strong>NEKO</strong>は連続6回まで！ ";
}

function getDogImg(){
  rnd5 = rndInt();
  // console.log("rnd10 is " + rnd10);
  img_dog.innerHTML = ""; // remove strings
  img_dog.width = 300;
  img_dog.alt = "dog" + rnd5;
  img_dog.title = "dog" + rnd5;

  if (add_hpath == true) {
    img_dog.src = "../images/" + "dog" + rnd5 + ".jpg";
  } else {
    img_dog.src = "images/" + "dog" + rnd5 + ".jpg";
  }

  document.querySelector("#hidden_mssg3").innerHTML = " <strong>INUU</strong>ボタンを押してみよう！ ";
}

// source
// https://stackoverflow.com/questions/22154129/javascript-settimeout-loops

var count = 0;

// Illegal break statement for break to stop for if loop??? why???
// https://www.w3schools.com/js/js_break.asp
// https://stackoverflow.com/questions/22549032/illegal-use-of-break-statement-javascript


function timeout() {
  setTimeout( function () {
      getCatImg();
      src_cat.appendChild(img_cat); // assign the image element to the target element
      count++;

      if ( count >= 5) {
        return
      }

      timeout();
  }, 1000);
}

// function runpersec_cat() {
//   thisVar = setTimeout(getCatImg(), 1000);
//   src_cat.appendChild(img_cat); // assign the image element to the target element
// }

function runpersec_dog() {
  thisVar = setTimeout(getDogImg(), 1500);
  src_dog.appendChild(img_dog); // assign the image element to the target element
}
