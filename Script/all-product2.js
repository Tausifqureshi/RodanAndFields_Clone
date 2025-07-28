// ==================================================//
   
var products = localStorage.getItem("Data")
// console.log(products)
  ? JSON.parse(localStorage.getItem("Data"))  
  : [];
function displayData(allproduct) {
  console.log(products);
  const container = document.querySelector("#container");
  container.innerHTML = "";

  allproduct.forEach(function (items) {
    const box = document.createElement("div");
    box.setAttribute("class", "box");

    let cate = document.createElement("h1");
    cate.textContent = items.category;
    // cate.classList.add("cate", items.category.toLowerCase(), "hide");

    const img = document.createElement("img");
    img.src = items.image_url;

    const name = document.createElement("p");
    name.textContent = items.seller_type;
    name.classList.add("name");

    const heading = document.createElement("h4");
    heading.innerText = items.name;
    heading.classList.add("text");

    const des = document.createElement("p");
    des.innerText = items.description;
    des.classList.add("des")

    const size = document.createElement("p");
    size.innerText = items.Size;
    size.classList.add("size")

    const price = document.createElement("p");
    price.innerText = `$${items.price}`;
    price.classList.add("price")

    const rating = document.createElement("p");
    rating.innerText = "⭐⭐⭐⭐ 4.2 (2134)";
    rating.classList.add("rating")

    const button = document.createElement("button");
    button.innerText = "ADD TO CART";
    button.classList.add("addToCard")

    const navigate = () => {
      localStorage.setItem("allProduct", JSON.stringify(items));
      window.location.href = "shop3.html";
    };

    img.addEventListener("click", navigate);
    name.addEventListener("click", navigate);
    heading.addEventListener("click", navigate);
    des.addEventListener("click", navigate);
    price.addEventListener("click", navigate);
    size.addEventListener("click", navigate);
    rating.addEventListener("click", navigate);

    // Add two cart
    //  button.addEventListener("click", function () {
    //   products.push(items);
    //   localStorage.setItem("CartData", JSON.stringify(products));
    //   alert("Product Added");
    // });
    button.addEventListener("click", () => addToCart(items));

    box.append(img,name, heading, des, size, price, rating, button);
    container.append(box);
  });
  // filterProducts('all');
} 
displayData(products);

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('CartData')) || [];
  console.log(cart)
  const isItemExist = cart.some(item => item.name === product.name);
  
  if (isItemExist) {
    alert('Product Already Added');
    window.location.href = 'cart.html';
    return;
  }
  
  cart.push(product);
  localStorage.setItem('CartData', JSON.stringify(cart));
  alert('Product Added');
}

// ===========================Category  filter===========================//




// ===========================Sort pricr  filter===========================//
document.querySelector("#sort").addEventListener("change", function () {
  const sortType = document.querySelector("#sort").value;

  if (sortType === "sortbyname") {
    displayData(products);
  } else {
    let sortedProducts = [...products]; // Create a copy of products array
    sortedProducts.sort(function (a, b) {
      return sortType === "lowtohigh" ? a.price - b.price : b.price - a.price;
    });
    displayData(sortedProducts);
  }
});

// Search Filter Start==================================//
function searchItems() {
  const input = document.getElementById("search").value.toLowerCase();
  const boxes = document.querySelectorAll(".box");
  let found = false;

  boxes.forEach((box) => {
    const name = box.querySelector(".text").innerText.toLowerCase();
    const match = name.includes(input);
    box.style.display = match ? "" : "none";
    if (match) found = true;
  });

  document.getElementById("results").innerText = found ? "" : "No matches found";
}

// ✅ Only one function used below:
document.getElementById("search").addEventListener("input", searchItems);
document.getElementById("btn").addEventListener("click", searchItems);

// Search Filter End==================================//






// ===========================Pricr filter===========================//
// function filterByPrice(allProduct, maxPrice, e) {
//   event.preventDefault();
//   return allProduct.filter(function (product) {
//     return product.price <= maxPrice;
//   });
// }
// document.querySelector("#lessthen100").addEventListener("click", function () {
//   var data = filterByPrice(products, 100);
//   displayData(data);
// });

// document.querySelector("#lessthen200").addEventListener("click", function () {
//   var data = filterByPrice(products, 200);
//   displayData(data);
// });

// document.querySelector("#lessthen70").addEventListener("click", function () {
//   var data = filterByPrice(products, 70);
//   displayData(data);
// });
// ===========================category filter===========================//




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





