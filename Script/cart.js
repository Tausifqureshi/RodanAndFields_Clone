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


