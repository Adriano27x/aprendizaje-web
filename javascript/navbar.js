// ==========================
// MENU HAMBURGUESA
// ==========================
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✖"
    } else {
        menuToggle.textContent = "☰"
    }

});

// ==========================
// NAVBAR SCROLL
// ==========================

const navbar = document.querySelector("nav");

let lastScroll = 0;

window.addEventListener("scroll", function() {

    // EFECTO SHADOW
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // SOLO EN CELULAR/TABLET
    if (window.innerWidth <= 768) {

        let currentScroll = window.scrollY;

        // Bajando
        if (currentScroll > lastScroll && currentScroll > 80) {

            navbar.style.transform = "translateY(-100%)";

        }

        // Subiendo
        else {

            navbar.style.transform = "translateY(0)";
        }

        lastScroll = currentScroll;
    }

});