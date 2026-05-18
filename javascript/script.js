// ==========================================
// PRODUCTOS DINÁMICOS
// ==========================================

const productosDinamicos = document.querySelector("#productosDinamicos");

// Array de objetos
let productosInfo = [

    {
        nombre: "Laptop Gamer",
        precio: 4500,
        stock: 100
    },

    {
        nombre: "Mouse RGB",
        precio: 120,
        stock: 200
    },

    {
        nombre: "Teclado Mecánico",
        precio: 250,
        stock: 120
    },

    {
        nombre: "Pad Gamer",
        precio: 70,
        stock: 100
    }

];

// Recorremos productos
for (let i = 0; i < productosInfo.length; i++) {

    // Creamos tarjeta
    const tarjeta = document.createElement("div");

    // Creamos elementos
    const nombre = document.createElement("h3");
    const precio = document.createElement("p");
    const stock = document.createElement("p");

    // Insertamos información
    nombre.textContent = productosInfo[i].nombre;

    precio.textContent = "Precio: S/ " + productosInfo[i].precio;

    stock.textContent = "Stock: " + productosInfo[i].stock;

    // Agregamos contenido a la tarjeta
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(stock);

    // Mostramos la tarjeta en HTML
    productosDinamicos.appendChild(tarjeta);

}


// ==========================================
// BUSCADOR DE POKÉMON
// ==========================================

const pokemonInput = document.querySelector("#pokemonInput");
const pokemonBtn = document.querySelector("#pokemonBtn");
const pokemonInfo = document.querySelector("#pokemonInfo");

// Evento click
pokemonBtn.addEventListener("click", function() {

    // Nombre escrito por el usuario
    const pokemonNombre = pokemonInput.value.toLowerCase();

    // Validar input vacío
    if (pokemonNombre == "") {

        pokemonInfo.innerHTML = `
            <p>Escribe un Pokémon</p>
        `;

        return;
    }

    // Consumir API
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonNombre)

    // Convertimos respuesta a JSON
    .then(function(respuesta) {

        // Verificar errores
        if (!respuesta.ok) {
            throw new Error("Pokémon no encontrado");
        }

        return respuesta.json();

    })

    // Usamos los datos
    .then(function(data) {
        console.log(data);

        // Insertamos información en HTML
        pokemonInfo.innerHTML = `
            <div class="pokemon-card">

                <img src="${data.sprites.front_default}">
                <h3>${data.name}</h3>
                <p>Altura: ${data.height}</p>
                <p>Peso: ${data.weight}</p>
                <p>Experiencia: ${data.base_experience}</p>
                <p>Tipo: ${data.types[0].type.name}</p>
                <p>Habilidad: ${data.abilities[0].ability.name}</p>
            </div>
        `;

    })

    .catch(function(error) {

        pokemonInfo.innerHTML = `
            <p>Pokémon no encontrado </p>
        `;
    })

});


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

//=========================
// LOADER
// ========================
const loader = document.querySelector("#loader");

window.addEventListener("load", function() {

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 500);
});

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

// ===========================
// WEATHER APP
// ===========================
const climaInput = document.querySelector("#climaInput");
const climaBtn = document.querySelector("#climaBtn");
const climaInfo = document.querySelector("#climaInfo");

const apiKey = "8cecc49f479b95eba8483dc2b4d3ecd4";

// Evento click
climaBtn.addEventListener("click", function() {

    const ciudad = climaInput.value.trim();

    // Validar vacío
    if (ciudad == "") {

        climaInfo.innerHTML = `
            <p>⚠️ Escribe una ciudad</p>
        `;

        return;
    }

    // Loader
    climaInfo.innerHTML = `
            <p>⏳ Buscando clima...</p>
    `;

    // Consumir API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`)

    .then(function(respuesta) {

        if (!respuesta.ok) {
            throw new Error("Ciudad no encontrada");
        }

        return respuesta.json();

    })

    .then(function(data) {

        climaInfo.innerHTML = `
            <div class="weather-card">

                <h3>${data.name}, ${data.sys.country}</h3>

                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">

                <p>🌡️ Temperatura: ${data.main.temp}°C</p>

                <p>☁️ Clima: ${data.weather[0].description}</p>

                <p>💧 Humedad: ${data.main.humidity}%</p>

            </div>
        `;
    })

    .catch(function(error) {
        
        climaInfo.innerHTML = `
            <p>❌ Ciudad no encontrada</p>
        `;

    })

})

// ============================
//  TASK DASHBOARD PRO
// ============================

const taskInput = document.querySelector("#taskInput");
const taskBtn = document.querySelector("#taskBtn");
const taskList = document.querySelector("#taskList");
const taskCounter = document.querySelector("#taskCounter");

let taskArray = [];

// Actualizar contador
function updateCounter() {

    if (taskArray.length == 0) {

        taskCounter.textContent =
            "No hay tareas";

    } else if (taskArray.length == 1) {

        taskCounter.textContent =
            "1 tarea";

    } else {

    taskCounter.textContent =
        `${taskArray.length} tareas`;

    }
}

// Guardar localStorage
function saveTasks() {

    localStorage.setItem(
        "taskDashboard",
        JSON.stringify(taskArray)
    );

}

// Renderizar tareas
function renderTask() {

    taskList.innerHTML = "";

    taskArray.forEach(function(task, index) {

        const div = document.createElement("div");

        div.classList.add("task-item");

        if (task.completed) {
            div.classList.add("completed");
        }

        div.innerHTML =  `
            <span>${task.text}</span>

            <div class="task-actions">

                <button onclick="completeTask(${index})">
                    ✅
                </button>

                <button onclick="deleteTask(${index})">
                    ❌
                </button>

            </div>
        `;

        taskList.appendChild(div);

    });

    updateCounter();

}

// Agregar tarea
taskBtn.addEventListener("click", function() {

    const text = taskInput.value.trim();

    if (text == "") return;

    taskArray.push({
        text: text,
        completed: false
    });

    saveTasks();
    renderTask();

    taskInput.value = "";

});

taskInput.addEventListener("keypress", function(e) {

    if (e.key == "Enter") {
        taskBtn.click();
    }

})

// Completar tarea 
function completeTask(index) {

    taskArray[index].completed =
        !taskArray[index].completed;

    saveTasks();
    renderTask();

}

// Eliminar tarea
function deleteTask(index) {

    taskArray.splice(index, 1);

    saveTasks();
    renderTask();

}

// Cargar tareas guardadas
const savedTasks =
    localStorage.getItem("taskDashboard");

if (savedTasks) {

    taskArray = JSON.parse(savedTasks);

    renderTask();

}

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