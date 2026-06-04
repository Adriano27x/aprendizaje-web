// EMAILJS
emailjs.init("f4NFOC4mDbTZHeImn");

const formulario = document.getElementById("formularioContacto");
const estadoMensaje = document.getElementById("estadoMensaje");
const botonEnviar = formulario.querySelector("button");
const successCard = document.getElementById("successCard");

formulario.addEventListener("submit", function(e) {

    e.preventDefault();

    // Captura segura e independiente de la estructura interna
    const nombre = formulario.querySelector('input[name="name"]').value.trim();
    const correo = formulario.querySelector('input[name="email"]').value.trim();
    const mensajeTexto = formulario.querySelector('textarea[name="message"]').value.trim();

    // Validar campos vacíos
    if (nombre === "" || correo === "" || mensajeTexto === "") {
        estadoMensaje.textContent = "⚠️ Completa todos los campos";
        estadoMensaje.className = "error";

        const inputs = formulario.querySelectorAll("input, textarea");

        inputs.forEach(function(input) {
            if (input.value.trim() === "") {
                input.classList.add("input-error");

                setTimeout(() => {
                    input.classList.remove("input-error");
                }, 2000);
            }
        });
        return;
    }

    // Validar correo
    if (!correo.includes("@") || !correo.includes(".")) {
        estadoMensaje.textContent = "⚠️ Escribe un correo válido";
        estadoMensaje.className = "error";

        const emailInput = formulario.querySelector('input[name="email"]');
        emailInput.classList.add("input-error");

        setTimeout(() => {
            emailInput.classList.remove("input-error");
        }, 2000);

        return;
    }

    // Cambiar texto botón
    botonEnviar.textContent = "Enviando...";
    botonEnviar.disabled = true;
    estadoMensaje.textContent = "";

    // Enviamos usando 'this' que apunta al formulario completo
    emailjs.sendForm(
        "service_aacp27",
        "template_vy1pa7h",
        this
    )
    .then(() => {
        // Ocultar textos de error y mostrar tarjeta de éxito
        estadoMensaje.textContent = "";
        successCard.classList.add("show");

        // Limpiar formulario
        formulario.reset();

        // Ocultar el mensaje de éxito tras 4 segundos de forma limpia
        setTimeout(() => {
            successCard.classList.remove("show");
        }, 4000);
        
    })
    .catch((error) => {
        estadoMensaje.textContent = "❌ Error al enviar mensaje.";
        estadoMensaje.className = "error";
        console.log("Error de EmailJS:", error);

        setTimeout(() => {
            estadoMensaje.textContent = "";
        }, 3000);
    })
    .finally(() => {
        // Restaurar botón
        botonEnviar.textContent = "Enviar mensaje";
        botonEnviar.disabled = false;
    });

});