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

window.scrollTo(0,28)

// classification of projects
let all = document.querySelector(".classification-box .all");
let website = document.querySelector(".classification-box .website");
let ui = document.querySelector(".classification-box .ui");
let landing = document.querySelector(".classification-box .landing");
let platform = document.querySelector(".classification-box .platform");

let classs = document.querySelectorAll(".classification-box .class");
let projects = document.querySelectorAll(".projects-container .project-box");
let webprject = document.querySelectorAll(".projects-container .website");
let uiproject = document.querySelectorAll(".projects-container .ui-clone");
let landingproject = document.querySelectorAll(".projects-container .landing-page");
let platformproject = document.querySelectorAll(".projects-container .platform");

website.onclick = function () {
    projects.forEach((project) => {
        project.style.display = "none";
    });
    webprject.forEach((project) => {
        project.style.display = "block";
    });
}
ui.onclick = function () {
    projects.forEach((project) => {
        project.style.display = "none";
    });
    uiproject.forEach((project) => {
        project.style.display = "block";
    });
}
landing.onclick = function () {
    projects.forEach((project) => {
        project.style.display = "none";
    });
    landingproject.forEach((project) => {
        project.style.display = "block";
    });
}
platform.onclick = function () {
    projects.forEach((project) => {
        project.style.display = "none";
    });
    platformproject.forEach((project) => {
        project.style.display = "block";
    });
}

all.onclick = function () {
    projects.forEach((project) => {
        project.style.display = "block";
    });
}
classs.forEach((btn) => {
    btn.addEventListener("click", function () {
        all.classList.remove("active");
        website.classList.remove("active");
        ui.classList.remove("active");
        landing.classList.remove("active");
        platform.classList.remove("active");

        if (this === website) {
            website.classList.add("active");
        } else if (this === ui) {
            ui.classList.add("active");
        } else if (this === landing) {
            landing.classList.add("active");
        } else if (this === platform) {
            platform.classList.add("active");
        }
    });
});