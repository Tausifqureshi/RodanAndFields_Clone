const firtName = "John";
const lastName = "Doe";
const fullName = `${firtName} ${lastName}`;

console.log(fullName, "FullName Printet");
const div = document.createElement("div");
const button = document.createElement("button");


let h1 = document.getElementById("h1");
let btn = document.getElementById("btn");

btn.addEventListener("click", handleChange);
function handleChange() {
  console.log("Click me");
  if (h1.textContent === " Welcome to the Text Page") {
    h1.textContent = "Tausif";
  } else {
    h1.textContent = " Welcome to the Text Page";   

  }              
}           



   

  


