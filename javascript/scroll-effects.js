window.addEventListener("scroll", () => {

    const navbar = document.querySelector("nav");

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

const hiddenElements = document.querySelectorAll(
    ".hidden, .hidden-bottom, .hidden-slow, .hidden-scale"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

hiddenElements.forEach((element) => {

    observer.observe(element);

});