let navLinks = document.querySelector("header .nav-links .links");
let listIcon = document.querySelector("header .nav-links i");

listIcon.addEventListener("click", function (e) {
e.stopPropagation();
navLinks.classList.toggle("show");
});

// إخفاء القائمة عند الضغط خارجها
document.addEventListener("click", function (e) {
if (!navLinks.contains(e.target) && !listIcon.contains(e.target)) {
navLinks.classList.remove("show");
}
});

// إخفاء القائمة عند عمل Scroll
window.addEventListener("scroll", function () {
navLinks.classList.remove("show");
});

let arrowBtn = document.querySelector("body .arrow");

window.addEventListener("scroll", function () {
if (window.scrollY >= 700) {
arrowBtn.style.display = "flex";
} else {
arrowBtn.style.display = "none";
}
});

arrowBtn.addEventListener("click", function () {
window.scrollTo(0, 0);
});