
const myImage = document.querySelector("img");
var index=0;

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  var imageNames = ["nature1.jpg", "nature2.jpeg", "nature3.jpg", "nature4.webp"];
  index++;
  myImage.setAttribute("src", "images/" + imageNames[index%imageNames.length]);
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Welcome to tranquility, ` + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome to tranquility, ' + storedName;
}

myButton.onclick = () => {
  setUserName();
};
