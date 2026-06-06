// ==========================
// DARK MODE
// ==========================
const themeBtn = document.querySelector("#themeBtn");

// Verificar tema guardado
const temaGuardado = localStorage.getItem("tema");

// Si existe dark mode guardado al cargar la página
if (temaGuardado == "oscuro") {
    document.body.classList.add("dark-mode");
}

// Evento click
themeBtn.addEventListener("click", function() {

    // Agregar o quitar clase
    document.body.classList.toggle("dark-mode");
    
    // Verificar tema activo para guardarlo en el almacenamiento local
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("tema", "oscuro");
    } else {
        localStorage.setItem("tema", "claro");
    }
});