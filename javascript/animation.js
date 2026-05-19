// ==========================
// SCROLL ANIMATIONS
// ==============================

// Seleccionar elementos ocultos
const hiddenElements = document.querySelectorAll(
    ".hidden, .hidden-bottom, .hidden-slow, .hidden-scale"
);

// Observer
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        // Si entra en pantalla
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    })
})

//Observar elementos
hiddenElements.forEach(function(element) {
    observer.observe(element);
})

