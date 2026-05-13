// ==========================================
// SALUDO PERSONALIZADO
// ==========================================

// Capturamos elementos del HTML
const input = document.querySelector("#nombreInput");
const boton = document.querySelector("#saludarBtn");
const mensaje = document.querySelector("#mensaje");

// Evento al hacer click
boton.addEventListener("click", function() {

    // Guardamos lo que escribe el usuario
    let nombre = input.value;

    // Validamos el nombre
    if (nombre == "") {

        mensaje.textContent = "Escribe un nombre";

    } else if (nombre == "Adriano") {

        mensaje.textContent = "Hola administrador 😎";

    } else {

        mensaje.textContent = "Hola usuario 👋";

    }

});


// ==========================================
// CREACIÓN DINÁMICA DE ELEMENTOS
// ==========================================

const lista = document.querySelector("#lista");

// Creamos un título
const titulo = document.createElement("h3");
titulo.textContent = "JavaScript está creando esto";
lista.appendChild(titulo);

// Creamos un párrafo
const parrafo = document.createElement("p");
parrafo.textContent = "Elemento creado desde JavaScript";
lista.appendChild(parrafo);

// Segundo título
const titulo2 = document.createElement("h2");
titulo2.textContent = "¿Quién soy?";
lista.appendChild(titulo2);

// Segundo párrafo
const parrafo2 = document.createElement("p");
parrafo2.textContent = "Un desarrollador con ganas de ayudar a emprendedores";
lista.appendChild(parrafo2);


// ==========================================
// MOSTRAR USUARIOS
// ==========================================

const usuariosLista = document.querySelector("#usuariosLista");

// Array de usuarios
let usuariosWeb = ["Adriano", "Carlos", "Pedro"];

// Recorremos el array
for (let i = 0; i < usuariosWeb.length; i++) {

    const usuario = document.createElement("p");

    usuario.textContent = usuariosWeb[i];

    usuariosLista.appendChild(usuario);

}


// ==========================================
// MOSTRAR PRODUCTOS
// ==========================================

const productosLista = document.querySelector("#productosLista");

let productosWeb = ["Laptop", "Mouse", "Teclado"];

// Recorremos productos
for (let i = 0; i < productosWeb.length; i++) {

    const producto = document.createElement("p");

    producto.textContent = productosWeb[i];

    productosLista.appendChild(producto);

}


// ==========================================
// LISTA DE TAREAS
// ==========================================

const tareaInput = document.querySelector("#tareaInput");
const agregarBtn = document.querySelector("#agregarBtn");
const listaTareas = document.querySelector("#listaTareas");

//Array donde guardaremos tareas
let tareas = [];

// Guardar tareas en LocalStorage
function guardarTareas() {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}


// Evento para agregar tareas
agregarBtn.addEventListener("click", function() {

    // Guardamos el texto escrito
    const tareaTexto = tareaInput.value.trim();

    // Evita tareas vacías
    if (tareaTexto == "") {
        return;
    }

    // Creamos la tarea
    const tarea = document.createElement("p");

    tarea.textContent = tareaTexto;

    // No repetirse tareas
    if (tareas.includes(tareaTexto)) {
        alert("Esa tarea ya existe");
        return;
    }

    // Guardar en array
    tareas.push(tareaTexto);

    // Guardar en LocalStorage
    guardarTareas();

    // Mostrar tarea
    listaTareas.appendChild(tarea);

    // Limpiamos el input
    tareaInput.value = "";

});

// Obtener tareas guardadas
const tareasGuardadas = localStorage.getItem("tareas");

//Verificar si existen
if (tareasGuardadas) {

    // Convertir texto a array
    tareas = JSON.parse(tareasGuardadas);

    // Mostrar tareas
    for (let i = 0; i < tareas.length; i++) {
        const tarea = document.createElement("p");
        tarea.textContent = tareas[i];
        listaTareas.appendChild(tarea);
    }
}

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
            throw new Error("Pokémon no encotrado");
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
    themeBtn.textContent = "☀️ Modo Claro";
}

// Evento click
themeBtn.addEventListener("click", function() {

    // Agregar o quitar clase
    document.body.classList.toggle("dark-mode");
    
    // Verificar tema activo
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("tema", "oscuro");
        themeBtn.textContent = "☀️ Modo Claro"

    } else {
        localStorage.setItem("tema", "claro");
        themeBtn.textContent = "🌙 Modo Oscuro"
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