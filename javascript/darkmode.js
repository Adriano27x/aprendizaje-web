
// ==========================
// DARK MODE
// ==========================
const themeBtn = document.querySelector("#themeBtn");

// Verificar tema guardado
const temaGuardado = localStorage.getItem("tema");

// Si existe dark mode guardado
if (temaGuardado == "oscuro") {
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "☀️";
}

// Evento click
themeBtn.addEventListener("click", function() {

    // Agregar o quitar clase
    document.body.classList.toggle("dark-mode");
    
    // Verificar tema activo
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("tema", "oscuro");
        themeBtn.textContent = "☀️"

    } else {
        localStorage.setItem("tema", "claro");
        themeBtn.textContent = "🌙"
    }

})
