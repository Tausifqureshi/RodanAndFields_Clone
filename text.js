const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.querySelector(".items");

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
    document.body.style.overflow = "auto"; // optional scroll unlock
  });
});






























// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

//     <link rel="stylesheet" href="text.css" />
//     <title>Text Page</title>
//   </head>

//   <body>
 
//   <header>
//     <div class="container">
//       <div class="mian-container">
//         <div class="right">
//           <div class="navbar">
//             <div class="link">
//               <a href="#" style="color: #3f3f3f; margin-left: 10px; font-size: 18px;">FIND A CONSULTANT</a>
//             </div>
//             <div class="image">
//               <a href="#">
//                 <img class="logo"
//                   src="https://www.rodanandfields.com/en-us/medias/rf-logo.svg?context=bWFzdGVyfGltYWdlc3w3MzczfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g2MC9oYWIvODgyMjE0NzE4NjcxOC5zdmd8YjNmMmU2YTg5MTM0NTMzM2Y2ODg2ZmRkZTJhNmY2OWZhYmYyYjk5NWQxODkxODFiYjVkY2MxY2NjOWRlMzA5OA"
//                   alt="" />
//               </a>
//             </div>

//             <div class="icon">
//               <div class="icons-control">
//                 <a href="#" style="text-decoration: none;">Search
//                   <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
//                 </a>
//               </div>
//               <div class="icons-control">
//                 <a href="#" style="text-decoration: none;">Sign In
//                   <i class="fa-regular fa-user"></i>
//                 </a>
//               </div>
//               <div class="icons-control">
//                 <a href="cart.html">
//                   <i class="fa-sharp fa-solid fa-bag-shopping"
//                     style="font-size: 22px;margin-bottom: 0.3rem;"></i>
//                 </a>
//               </div>
//               <div class="icons-control">
//                 <a href="#" style="text-decoration: none; font-weight: 700;">
//                   <p>English</p>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="flexitem">
//         <nav>
//           <!-- <div id="menu-bar">
//   <ul class="items">
//     <li class="has-child hover-bottom"><a href="#">SKINCARE</a></li>
//     <li class="hover-bottom"><a href="#">HAIRCARE</a></li>
//     <li class="hover-bottom"><a href="best-sell.html">BEST SELLERS</a></li>
//     <li class="hover-bottom"><a href="#">SPECIAL OFFERS</a></li>
//     <li class="hover-bottom"><a href="#">ABOUT</a></li>
//     <li class="hover-bottom"><a href="#">PERKS PROGRAM</a></li>
//     <li class="hover-bottom"><a href="#">BECOME A CONSULTANT</a></li>
//   </ul>
//           </div> -->
          
//           <div class="wrapper">
//             <ul class="items">
//               <li class="has-child hover-bottom">
//                 <a href="#">SKINCARE</a>
//                 <div class="show-contaent">
//                   <div class="wrapping">
//                     <div class="flexcol">
//                       <div class="row">
//                         <h4>SHOP BY CATEGORY</h4>
//                         <ul>
//                           <li><a href="#">Skincare Regimens</a></li>
//                           <li><a href="#">Lash & Brow</a></li>
//                           <li><a href="#">Eye Creams & Treatments</a></li>
//                           <li><a href="#">Face Serums & Treatments</a></li>
//                           <li><a href="#">Exfoliants</a></li>
//                           <li><a href="#">Face Masks</a></li>
//                           <li><a href="#">Moisturizers</a></li>
//                           <li><a href="#">Cleansers & Makeup Removers</a></li>
//                           <li><a href="#">Toners</a></li>
//                           <li><a href="#">Sun Protection</a></li>
//                           <li><a href="#">Tools & Accessories</a></li>
//                           <li><a href="#">Hand & Body</a></li>
//                           <li><a href="#">Shop All Skincare</a></li>
//                         </ul>
//                       </div>
//                     </div>

//                     <div class="flexcol">
//                       <div class="row">
//                         <h4>SHOP BY CATEGORY</h4>
//                         <ul>
//                           <li><a href="#">Anti-Aging</a></li>
//                           <li><a href="#">Acne, Pores & Blackheads</a></li>
//                           <li><a href="#">Dark Spots & Uneven Skin Tone</a></li>
//                           <li><a href="#">Sensitivity & Visible Redness</a></li>
//                           <li><a href="#">Dull & Tired Skin</a></li>
//                           <li><a href="#">Dry Skin</a></li>
//                           <li><a href="#">Teen Acne</a></li>
//                         </ul>
//                       </div>
//                     </div>

//                     <div class="flexcol">
//                       <div class="row">
//                         <h4>SHOP BY CATEGORY</h4>
//                         <ul>
//                           <li><a href="#">Redefine</a></li>
//                           <li><a href="#">Reverse</a></li>
//                           <li><a href="#">Unblemish</a></li>
//                           <li><a href="#">Soothe</a></li>
//                           <li><a href="#">Recharge</a></li>
//                           <li><a href="#">Spotless</a></li>
//                           <li><a href="#">Enhancements</a></li>
//                           <li><a href="#">Pro Skincare Tools</a></li>
//                           <li><a href="#">Essentials</a></li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </li>
//               <li class="hover-bottom"><a href="#">HAIRCARE</a></li>
//               <li class="hover-bottom"><a href="best-sell.html">BEST SELLERS</a></li>
//               <li class="hover-bottom"><a href="#">SPECIAL OFFERS</a></li>
//               <li class="hover-bottom"><a href="#">ABOUT</a></li>
//               <li class="hover-bottom"><a href="#">PERKS PROGRAM</a></li>
//               <li class="hover-bottom"><a href="#">BECOME A CONSULTANT</a></li>
//               <a href="#" id="close"><i class="fa fa-times"></i></a>

//             </ul>
//           </div>

//            <div id="mobail">
//           <a href="cart.html"><i class="fa fa-bag-shopping"></i></a>
//           <i id="bar" class="fa-solid fa-outdent"></i>    
//           </div>
//         </nav>
//       </div>
//     </div>
//   </header>

//   <script src="text.js"></script>
//   </body>
// </html>
















// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>Responsive Navbar</title>
//   <link rel="stylesheet" href=".css" />
//   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
// </head>
// <body>

//   <header>
//     <!-- Top bar -->
//     <div class="top-nav">
//       <a href="#">FIND A CONSULTANT</a>
//       <a href="#">
//         <img class="logo" src="https://www.rodanandfields.com/en-us/medias/rf-logo.svg?context=bWFzdGVyfGltYWdlc3w3MzczfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g2MC9oYWIvODgyMjE0NzE4NjcxOC5zdmd8YjNmMmU2YTg5MTM0NTMzM2Y2ODg2ZmRkZTJhNmY2OWZhYmYyYjk5NWQxODkxODFiYjVkY2MxY2NjOWRlMzA5OA" alt="Logo">
//       </a>
//       <div class="icons">
//         <a href="#"><i class="fas fa-search"></i> Search</a>
//         <a href="#"><i class="far fa-user"></i> Sign In</a>
//         <a href="cart.html"><i class="fas fa-bag-shopping"></i></a>
//         <a href="#"><span>English</span></a>
//       </div>
//       <div class="mobile-menu-icon" id="menu-toggle">
//         <i class="fas fa-bars"></i>
//       </div>
//     </div>

//     <!-- Navigation bar -->
//     <nav class="main-nav" id="main-nav">
//       <ul>
//         <li class="has-dropdown">
//           <a href="#">SKINCARE</a>
//           <div class="dropdown">
//             <div class="dropdown-col">
//               <h4>SHOP BY CATEGORY</h4>
//               <ul>
//                 <li><a href="#">Skincare Regimens</a></li>
//                 <li><a href="#">Lash & Brow</a></li>
//                 <li><a href="#">Eye Creams & Treatments</a></li>
//                 <li><a href="#">Face Serums</a></li>
//                 <li><a href="#">Exfoliants</a></li>
//                 <li><a href="#">Face Masks</a></li>
//                 <li><a href="#">Moisturizers</a></li>
//               </ul>
//             </div>
//             <div class="dropdown-col">
//               <h4>SHOP BY CONCERN</h4>
//               <ul>
//                 <li><a href="#">Anti-Aging</a></li>
//                 <li><a href="#">Acne</a></li>
//                 <li><a href="#">Dark Spots</a></li>
//                 <li><a href="#">Dry Skin</a></li>
//                 <li><a href="#">Dull Skin</a></li>
//               </ul>
//             </div>
//             <div class="dropdown-col">
//               <h4>SHOP COLLECTIONS</h4>
//               <ul>
//                 <li><a href="#">Redefine</a></li>
//                 <li><a href="#">Reverse</a></li>
//                 <li><a href="#">Unblemish</a></li>
//                 <li><a href="#">Soothe</a></li>
//               </ul>
//             </div>
//           </div>
//         </li>
//         <li><a href="#">HAIRCARE</a></li>
//         <li><a href="best-sell.html">BEST SELLERS</a></li>
//         <li><a href="#">SPECIAL OFFERS</a></li>
//         <li><a href="#">ABOUT</a></li>
//         <li><a href="#">PERKS PROGRAM</a></li>
//         <li><a href="#">BECOME A CONSULTANT</a></li>
//       </ul>
//     </nav>
//   </header>

//   <script>
//     const menuBtn = document.getElementById('menu-toggle');
//     const nav = document.getElementById('main-nav');

//     menuBtn.addEventListener('click', () => {
//       nav.classList.toggle('active');
//     });
//   </script>
// </body>
// </html>




















// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// body {
//   font-family: "Poppins", sans-serif;
//   background: #fff;
//   color: #222;
// }

// ul {
//   list-style: none;
// }
// a {
//   text-decoration: none;
//   color: inherit;
// }
// img {
//   max-width: 100%;
//   display: block;
// }

// /* Header */
// .header {
//   position: sticky;
//   top: 0;
//   background: #fff;
//   z-index: 999;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
// }

// .top-bar {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem;
//   border-bottom: 1px solid #eee;
// }

// .consultant-link {
//   font-weight: 600;
//   font-size: 14px;
//   color: #2a2a2a;
// }

// .nav-icons {
//   display: flex;
//   gap: 1.5rem;
//   align-items: center;
// }

// .nav-link {
//   font-size: 14px;
//   display: flex;
//   align-items: center;
//   gap: 0.3rem;
//   color: #333;
// }

// .main-nav {
//   padding: 0 1rem;
//   background-color: #fff;
// }

// .nav-items {
//   display: flex;
//   gap: 2rem;
//   align-items: center;
//   padding: 1rem 0;
// }

// .nav-item > a {
//   font-weight: 500;
//   position: relative;
//   transition: color 0.3s;
// }

// .nav-item > a::after {
//   content: "";
//   position: absolute;
//   left: 0;
//   bottom: -5px;
//   height: 2px;
//   width: 0;
//   background: #3498db;
//   transition: width 0.3s;
// }

// .nav-item > a:hover::after {
//   width: 100%;
// }

// .dropdown {
//   position: absolute;
//   top: 100%;
//   left: 0;
//   background: #fff;
//   width: 100vw;
//   padding: 2rem;
//   display: flex;
//   gap: 3rem;
//   visibility: hidden;
//   opacity: 0;
//   transition: 0.3s ease;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
//   z-index: 1000;
// }

// .has-dropdown:hover .dropdown {
//   visibility: visible;
//   opacity: 1;
// }

// .dropdown-column h4 {
//   font-size: 14px;
//   margin-bottom: 1rem;
//   font-weight: 600;
//   color: #111;
// }

// .dropdown-column ul li {
//   margin-bottom: 0.5rem;
//   font-size: 14px;
// }

// .mobile-toggle {
//   display: none;
//   font-size: 20px;
//   cursor: pointer;
// }

// .nav-close {
//   display: none;
//   cursor: pointer;
// }

// @media (max-width: 768px) {
//   .nav-items {
//     position: fixed;
//     right: -100%;
//     top: 0;
//     flex-direction: column;
//     background-color: #fff;
//     height: 100vh;
//     width: 300px;
//     padding: 2rem;
//     transition: right 0.3s;
//   }

//   .nav-items.active {
//     right: 0;
//   }

//   .nav-close {
//     display: block;
//     font-size: 20px;
//     margin-top: 1rem;
//   }

//   .nav-icons,
//   .consultant-link {
//     display: none;
//   }

//   .mobile-toggle {
//     display: block;
//   }
// }
