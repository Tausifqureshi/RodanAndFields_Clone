//Add To-cart
// const totalPrice = document.getElementById("total_price");
// const products = JSON.parse(localStorage.getItem("CartData")) || [];

// var totalItems = products.length;
// document.querySelector("#quntity").innerText =
//   "Total Quantity : " + " " + totalItems;

// function updateTotalPrice() {
//   const totalSum = products.reduce((sum, item) => sum + item.price, 0);
//   totalPrice.textContent = `Subtotal: ₹${totalSum.toFixed(2)}`;
//   totalPrice.classList.add("removePriceTotal");
// }

// // 
// function renderItems() {
//   const container = document.querySelector(".box-container");
//   container.innerHTML = ""; // Clear the container to prevent duplicate items

//   if (products.length === 0) {
//     // Agar cart empty hai toh message dikhaye
//     const emptyMessage = document.createElement("p");
//     emptyMessage.innerText = "Cart is empty";
//     emptyMessage.className = "empty-message";
//     container.append(emptyMessage);
//     totalPrice.textContent = ""; // Empty cart hone par total price ko bhi clear kar do
//   } else {
//     products.forEach((product, index) => {
//       const box = document.createElement("div");
//       box.className = "box";

//       const img = document.createElement("img");
//       img.src = product.image_url;

//       const name = document.createElement("p");
//       name.innerText = product.name;
//       name.className = "name";

//       const description = document.createElement("p");
//       description.innerText = product.description.slice(0, 40);
//       description.className = "des";

//       const price = document.createElement("p");
//       price.innerText = `$${product.price}`;
//       price.className = "price";

//       const cartTrash = document.createElement("i");
//       cartTrash.className = "fa-sharp fa-solid fa-trash";
//       cartTrash.addEventListener("click", () => removeItem(index));

//       box.append(img, cartTrash, price, name, description);
//       container.append(box);
//     });

//     updateTotalPrice();
//   }

  
// }


// function removeItem(index) {
//   products.splice(index, 1);
//   localStorage.setItem("CartData", JSON.stringify(products));
//   renderItems();
// }


// renderItems();

// // Scroll Bar
// let header = document.querySelector("#section-hero");
// let footerElemnt = document.querySelector("#footer-top");
// let scrollElemnt = document.createElement("div");
// scrollElemnt.classList.add("back-to-top");
// scrollElemnt.innerText = "UP";
// footerElemnt.after(scrollElemnt);

// function scrollTop() {
//   header.scrollIntoView({ behavior: "smooth" });
// }

// scrollElemnt.addEventListener("click", scrollTop);









const totalPrice = document.getElementById("total_price");
let products = JSON.parse(localStorage.getItem("CartData")) || {};

// Debugging: Check if products is an object
if (!Array.isArray(products)) {
  console.log("Products is an object. Converting it to an array.");
  products = Object.values(products); // Convert object to array
}

console.log("Products:", products); // Ensure products is now an array

var totalItems = products.length;
document.querySelector("#quntity").innerText =
  "Total Quantity : " + totalItems;

function updateTotalPrice() {
  const totalSum = products.reduce((sum, item) => sum + item.price, 0);
  totalPrice.textContent = `Subtotal: ₹${totalSum.toFixed(2)}`;
  totalPrice.classList.add("removePriceTotal");
}

function renderItems() {
  const container = document.querySelector(".box-container");
  container.innerHTML = ""; // Clear the container to prevent duplicate items

  if (products.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.innerText = "Cart is empty";
    emptyMessage.className = "empty-message";
    container.append(emptyMessage);
    totalPrice.textContent = ""; // Clear total price if cart is empty
  } else {
    products.forEach((product, index) => {
      const box = document.createElement("div");
      box.className = "box";

      // Create and append Image
      const img = document.createElement("img");
      img.src = product.image_url;

      // Create and append Name
      const name = document.createElement("p");
      name.innerText = product.name;
      name.className = "name";

      // Create and append Description
      const des = document.createElement("p");
      // des.innerText = product.description.slice(0, 40);
      des.className = "des";

      // Create and append Price
      const price = document.createElement("p");
      price.innerText = `$${product.price}`;
      price.className = "price";

      // Create and append Trash Icon
      const cartTrash = document.createElement("i");
      cartTrash.className = "fa-sharp fa-solid fa-trash";
      cartTrash.addEventListener("click", () => removeItem(index));

      // Append all created elements to the box
      box.append(img, cartTrash, price, name, des);
      container.append(box);
    });

    updateTotalPrice();
  }
}

function removeItem(index) {
  products.splice(index, 1);
  localStorage.setItem("CartData", JSON.stringify(products));
  renderItems();
}

// Initial render
renderItems(products);

// Scroll Bar
let header = document.querySelector("#section-hero");
let footerElemnt = document.querySelector("#footer-top");
let scrollElemnt = document.createElement("div");
scrollElemnt.classList.add("back-to-top");
scrollElemnt.innerText = "UP";
footerElemnt.after(scrollElemnt);

function scrollTop() {
  header.scrollIntoView({ behavior: "smooth" });
}

scrollElemnt.addEventListener("click", scrollTop);



// function renderItems(products) {
//     const container = document.querySelector(".box-container");
  
//     container.innerHTML = ""; // Clear the container to prevent duplicate items
  
//     products.forEach((ele, index) => {
//       const box = document.createElement("div");
//       box.className = "box";
  
//       // Create and append Image
//       const img = document.createElement("img");
//       img.src = ele.image_url;
//       // box.appendChild(img);
  
//       // Create and append Title
//       const name = document.createElement("p");
//       name.innerText = ele.name;
//       name.className = "name";
//       // box.appendChild(title);
//       // Create and append Title
//       const des = document.createElement("p");
//       des.innerText = ele.description.slice(0,40);
//       des.className = "des";
//       // box.appendChild(title);
  
//       // Create and append Price
//       const price = document.createElement("p");
//       price.innerText = `$${ele.price}`;
//       price.className = "price";
//       // box.appendChild(price);
  
//       // Create and append Cart Trash Icon
//       const cartTrash = document.createElement("i");
//       cartTrash.className = "fa-sharp fa-solid fa-trash";
//       cartTrash.addEventListener("click", () => removeItem(index));
//       // box.append(title,cartTrash,img,price);
//       box.append(img,cartTrash,price,name,des);
  
//       container.append(box);
//     });
  
//     updateTotalPrice();
//   }
  