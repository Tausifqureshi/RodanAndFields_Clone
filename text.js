const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.querySelector(".icon");

bar.addEventListener("click", () => {
  nav.classList.add("active");
  // document.body.style.overflow = "hidden"; // optional scroll lock
});

close.addEventListener("click", () => {
  nav.classList.remove("active");
  // document.body.style.overflow = "auto"; // optional scroll unlock
});

document.querySelectorAll(".items li a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    // document.body.style.overflow = "auto"; // optional scroll unlock
    
  });
});
