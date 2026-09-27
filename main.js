let navLinks = document.querySelector("header .nav-links .links");
let listIcon = document.querySelector("header .nav-links i");

listIcon.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

let arrowBtn = document.querySelector("body .arrow");
window.onscroll = function () {
    if (window.scrollY >= 700 ) {
        arrowBtn.style.display = "flex";
    }
    else (
        arrowBtn.style.display = "none"
    )
}

arrowBtn.addEventListener("click", function () {
    window.scrollTo(0, 0);
})

window.scrollTo(0, 28);