//Add To-cart
const totalPrice = document.getElementById("total_price");
const products = JSON.parse(localStorage.getItem("CartData")) || [];

var totalItems = products.length;
document.querySelector("#quntity").innerText =
  "Total Quantity : " + " " + totalItems;

function updateTotalPrice() {
  const totalSum = products.reduce((sum, item) => sum + item.price, 0);
  totalPrice.textContent = `Subtotal: ₹${totalSum.toFixed(2)}`;
  totalPrice.classList.add("removePriceTotal");
}

function renderItems(products) {
  const container = document.querySelector(".box-container");

  container.innerHTML = ""; // Clear the container to prevent duplicate items

  products.forEach((ele, index) => {
    const box = document.createElement("div");
    box.className = "box";

    // Create and append Image
    const img = document.createElement("img");
    img.src = ele.image_url;
    // box.appendChild(img);

    // Create and append Title
    const name = document.createElement("p");
    name.innerText = ele.name;
    name.className = "name";
    // box.appendChild(title);
    // Create and append Title
    const des = document.createElement("p");
    des.innerText = ele.description.slice(0,40);
    des.className = "des";
    // box.appendChild(title);

    // Create and append Price
    const price = document.createElement("p");
    price.innerText = `$${ele.price}`;
    price.className = "price";
    // box.appendChild(price);

    // Create and append Cart Trash Icon
    const cartTrash = document.createElement("i");
    cartTrash.className = "fa-sharp fa-solid fa-trash";
    cartTrash.addEventListener("click", () => removeItem(index));
    // box.append(title,cartTrash,img,price);
    box.append(img,cartTrash,price,name,des);

    container.append(box);
  });

  updateTotalPrice();
}
function renderItems() {
  const container = document.querySelector(".box-container");
  container.innerHTML = ""; // Clear the container to prevent duplicate items

  products.forEach((product, index) => {
      const box = document.createElement("div");
      box.className = "box";

      const img = document.createElement("img");
      img.src = product.image_url;

      const name = document.createElement("p");
      name.innerText = product.name;
      name.className = "name";

      const description = document.createElement("p");
      description.innerText = product.description.slice(0, 40);
      description.className = "des";

      const price = document.createElement("p");
      price.innerText = `$${product.price}`;
      price.className = "price";

      const cartTrash = document.createElement("i");
      cartTrash.className = "fa-sharp fa-solid fa-trash";
      cartTrash.addEventListener("click", () => removeItem(index));

      box.append(img, cartTrash, price, name, description);
      container.append(box);
  });

  updateTotalPrice();
}

function removeItem(index) {
  products.splice(index, 1);
  localStorage.setItem("CartData", JSON.stringify(products));
  renderItems();
}
// function removeItem(index) {
//   productsItems.splice(index, 1);
//   // console.log(productsItems);
//   localStorage.setItem("CartData", JSON.stringify(productsItems));
//   renderItems(productsItems);
// }

// function removeItem(index, productsItems) {
//   productsItems.splice(index, 1);
//   localStorage.setItem("CartData", JSON.stringify(productsItems));
//   renderItems(productsItems);
// }

// Assuming `productsGet` is defined elsewhere and contains the products data
renderItems();

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
