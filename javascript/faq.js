// ==========================================
// CONTROL DESPLEGABLES FAQ (ANCHO E INTERACTIVO)
// ==========================================
const faqTriggers = document.querySelectorAll(".faq-trigger");

faqTriggers.forEach(function(trigger) {
    trigger.addEventListener("click", function() {
        const faqBox = trigger.closest(".faq-box");
        const faqPanel = trigger.nextElementSibling;

        // Alternamos la clase activa en el contenedor padre (.faq-box)
        faqBox.classList.toggle("active");

        // Controlamos el colapso/despliegue de altura
        if (faqBox.classList.contains("active")) {
            faqPanel.style.maxHeight = faqPanel.scrollHeight + "px";
        } else {
            faqPanel.style.maxHeight = "0px";
        }
    });
});