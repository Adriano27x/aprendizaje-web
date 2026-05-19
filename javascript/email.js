//EMAILJS
emailjs.init("f4NFOC4mDbTZHeImn");

const formulario = document.getElementById("formularioContacto");
const estadoMensaje = document.getElementById("estadoMensaje");
const botonEnviar = formulario.querySelector("button");

formulario.addEventListener("submit", function(e) {

    e.preventDefault();

    const nombre = formulario.name.value.trim();
    const correo = formulario.email.value.trim();
    const mensajeTexto = formulario.message.value.trim();

    // Validar campos vacíos
    if (nombre == "" || correo == "" || mensajeTexto == "") {
        estadoMensaje.textContent= "⚠️ Completa todos los campos";
        estadoMensaje.className = "error";

        return;
    }

    // Validar correo
    if (!correo.includes("@") || !correo.includes(".")) {
        estadoMensaje.textContent = "⚠️ Escribe un correo válido";
        estadoMensaje.className = "error";

        return;
    }

    // Cambiar texto botón
    botonEnviar.textContent = "Enviando..."
    botonEnviar.disabled = true;

    emailjs.sendForm(
        "service_aacp27",
        "template_vy1pa7h",
        this
    )

    .then(() => {

        // Mensaje bonito
        estadoMensaje.textContent = "✅ Mensaje enviado correctamente";
        estadoMensaje.className = "exito";

        // Limpiar formulario
        formulario.reset();

        setTimeout(() => {
            estadoMensaje.textContent = "";
        }, 3000);
        
    })

    .catch((error) => {

        estadoMensaje.textContent = "❌ Error al enviar mensaje:"
        estadoMensaje.className = "error";

        console.log(error);

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
