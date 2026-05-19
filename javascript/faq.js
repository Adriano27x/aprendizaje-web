// ==========================
// FAQ
// ===========================
const faqBtns = document.querySelectorAll(".faq-btn");

faqBtns.forEach(function(btn) {

    btn.addEventListener("click", function() {

        const texto = btn.nextElementSibling;

        texto.classList.toggle("active");

        btn.classList.toggle("active");
        
    });
});
