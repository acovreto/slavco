// const procitajPoveke = document.querySelector(".btn");
// var poveke = document.getElementsByClassName("poveke");
// console.log(poveke);

// procitajPoveke.addEventListener("click", function () {
//   poveke.classList.toggle("show-text");
//   if (poveke.classList.contains("show-text")) {
//     this.innerHTML = "Прочитај помалку &#9650;";
//   } else {
//     this.innerHTML = "Прочитај повеќе &#9660;";
//   }
// });
var coll = [...document.querySelectorAll(".btn")];
var i;
console.log(coll);
// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     console.log(coll[i]);
//     var poveke = this.previousElementSibling;
//     var next = this.nextElementSibling;
//     console.log(poveke, next);
// if (poveke.style.maxHeight) {
//   poveke.style.maxHeight = null;
//   this.innerHTML = "Прочитај повеќе &#9660;";
// } else {
//   poveke.style.maxHeight = poveke.scrollHeight + "px";
//   this.innerHTML = "Прочитај помалку &#9650;";
// }
//   });
// }
coll.forEach(function (el) {
  el.addEventListener("click", function () {
    console.log(this);
    let poveke = this.closest(".etno-turizam").querySelector(".poveke");
    console.log(poveke);
    if (poveke.style.maxHeight) {
      poveke.style.maxHeight = null;
      this.innerHTML = "Прочитај повеќе &#9660;";
    } else {
      poveke.style.maxHeight = poveke.scrollHeight + "px";
      this.innerHTML = "Прочитај помалку &#9650;";
    }
  });
});
const navMenu = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");
const links = document.querySelectorAll("nav ul li a");

function myFunction(x) {
  console.log(x);
  x.classList.toggle("change");

  // navMenu.className = "nav-menu";
  navMenu.classList.toggle("nav-menu");
}
links.forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu.classList.contains("nav-menu")) {
      navMenu.classList.remove("nav-menu");
    }
    if (hamburger.classList.contains("change")) {
      hamburger.classList.remove("change");
    }
  });
});
