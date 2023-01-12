console.log("Yay!! Im on");


/* let myName;
console.log(myName);

myName = '"Thomas"';
console.log(myName);

myName = "Danne";
console.log(myName.charAt(0));



let myArray = ["gris", "Får", "Svinhund", "FylleHund"];
console.log(myArray[4]);

if (iceCream === "chocolate") {
   // alert("Yay, I love chocolate ice cream!");
    console.log("Yay, I love chocolate ice cream!");
} else {
   // alert("Awwww, but chocolate is my favorite…");
    console.log("Awwww, but chocolate is my favorite…");
} */

// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/firefox2.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('#button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + "<br />" + myName + " 🍉";
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}