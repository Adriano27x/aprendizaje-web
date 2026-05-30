//EMAILJS
emailjs.init("f4NFOC4mDbTZHeImn");

const formulario = document.getElementById("formularioContacto");
const estadoMensaje = document.getElementById("estadoMensaje");
const botonEnviar = formulario.querySelector("button");
const successCard = document.getElementById("successCard");

formulario.addEventListener("submit", function(e) {

    e.preventDefault();

    const nombre = formulario.name.value.trim();
    const correo = formulario.email.value.trim();
    const mensajeTexto = formulario.message.value.trim();

    // Validar campos vacíos
    if (nombre == "" || correo == "" || mensajeTexto == "") {
        estadoMensaje.textContent= "⚠️ Completa todos los campos";
        estadoMensaje.className = "error";

        // Inputs
        const Inputs = formulario.querySelectorAll("input, textarea");

        Inputs.forEach(function(input) {
            
            if (input.value.trim() == "") {

                input.classList.add("input-error");

                setTimeout(() => {
                    input.classList.remove("input-error");
                }, 2000);

            }

        })
        return;
    }

    // Validar correo
    if (!correo.includes("@") || !correo.includes(".")) {
        estadoMensaje.textContent = "⚠️ Escribe un correo válido";
        estadoMensaje.className = "error show";

        const emailInput = formulario.querySelector('input[name="email"]');

        emailInput.classList.add("input-error");

        setTimeout(() => {
            emailInput.classList.remove("input-error");
        }, 2000);

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
        estadoMensaje.textContent = "";
        successCard.classList.add("show");

        // Limpiar formulario
        formulario.reset();

        setTimeout(() => {
            succesCard.classList-this.remove("show");
        }, 4000);
        
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
