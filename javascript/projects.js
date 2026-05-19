// ========================
// BUSCADOR DE PROYECTOS
// =========================
const buscador = document.querySelector("#buscadorProyectos");
const proyectos = document.querySelectorAll(".project-card");

buscador.addEventListener("input", function() {
    
    const texto = buscador.value.toLowerCase();

    proyectos.forEach(function(proyecto) {

        const nombre = proyecto.dataset.name.toLowerCase();
        const descripcion = proyecto.textContent.toLocaleLowerCase();

        if (
            nombre.includes(texto) ||
            descripcion.includes(texto)
        ) {
            proyecto.style.display = "block";
        } else {
            proyecto.style.display = "none";
        }
    })
})
