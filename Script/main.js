// Only Navbwr ke liye sue yaha i
// import { getNavbar } from "./navbar.js";
// document.addEventListener("DOMContentLoaded", () => {
//   const navbarContainer = document.getElementById("navbar");

//   if (navbarContainer) {
//     navbarContainer.innerHTML = getNavbar();
//   }
// });




import { getNavbar } from "./navbar.js";
import { getFooter } from "./footer.js";

document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");
  const footerContainer = document.getElementById("footer");

  if (navbarContainer) {
    navbarContainer.innerHTML = getNavbar();
  }

  if (footerContainer) {
    footerContainer.innerHTML = getFooter();

    // Footer ke render hone ke baad wait karo.
    // setTimeout isliye lagaya hai taaki footer DOM me render hone ke baad hi scroll button add ho

    setTimeout(() => {
      const header = document.querySelector("#section-hero");
      const footerElemnt = document.querySelector("#footer-top");

      if (!footerElemnt) {
        console.warn("footer-top nahi mila");
        return;
      }

      const scrollElemnt = document.createElement("div");
      scrollElemnt.classList.add("back-to-top");
      scrollElemnt.innerText = "UP";

      footerElemnt.after(scrollElemnt);

      scrollElemnt.addEventListener("click", () => {
        if (header) {
          header.scrollIntoView({ behavior: "smooth" });
        }
      });
    }, 100); // 100ms ka delay — safe margin
  }
});


// <div id="navbar"></div>
//  <div id="footer"></div>
//<script type="module" src="./Script/main.js"></script>
// <link rel="stylesheet" href="/css/layout.css"></link>
