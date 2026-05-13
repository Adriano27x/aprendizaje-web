/* ========================================
   VARIABLES BÁSICAS
======================================== */

// Texto
let nombre = "Adriano";

// Número
let edad = 18;

// Booleano (true o false)
let estudiante = true;

// Mostrar datos en consola
console.log(nombre);
console.log(edad);
console.log(estudiante);


/* ========================================
   FUNCIONES BÁSICAS
======================================== */

// Función simple
function saludar() {
    console.log("Hola, bienvenido");
}

// Ejecutar función
saludar();


// Función que usa variables globales
function presentarse() {
    console.log(nombre);
    console.log(edad);
    console.log("Estoy aprendiendo JavaScript");
}

presentarse();


/* ========================================
   PARÁMETROS EN FUNCIONES
======================================== */

// Función con parámetro
function saludarPersonal(nombrePersona) {
    console.log("Hola " + nombrePersona);
}

// Diferentes ejecuciones
saludarPersonal("Adriano");
saludarPersonal("Carlos");
saludarPersonal("Lucía");


/* ========================================
   FUNCIONES CON OPERACIONES
======================================== */

// Sumar números
function sumar(numero1, numero2) {

    let resultado = numero1 + numero2;

    console.log(resultado);
}

sumar(5, 3);
sumar(10, 20);
sumar(100, 50);


/* ========================================
   CONDICIONALES IF / ELSE
======================================== */

let nota = 8;

if (nota >= 11) {
    console.log("Aprobaste");
} else {
    console.log("Desaprobaste");
}


/* ========================================
   VALIDAR EDAD
======================================== */

function verificarEdad(edad) {

    if (edad >= 18) {
        console.log("Eres mayor de edad");
    } else {
        console.log("Eres menor de edad");
    }

}

verificarEdad(20);
verificarEdad(15);


/* ========================================
   ELSE IF
======================================== */

let hora = 14;

if (hora < 12) {

    console.log("Buenos días");

} else if (hora < 18) {

    console.log("Buenas tardes");

} else {

    console.log("Buenas noches");

}


/* ========================================
   VALIDAR USUARIO
======================================== */

function saludarUsuario(nombre) {

    if (nombre == "Adriano") {

        console.log("Hola Administrador");

    } else {

        console.log("Hola usuario");

    }

}

saludarUsuario("Adriano");
saludarUsuario("Carlos");


/* ========================================
   VALIDAR NOTAS
======================================== */

function verificarNota(nota) {

    if (nota >= 18) {

        console.log("Excelente");

    } else if (nota >= 11) {

        console.log("Aprobado");

    } else {

        console.log("Desaprobado");

    }

}

verificarNota(19);
verificarNota(14);
verificarNota(8);


/* ========================================
   ARRAYS
======================================== */

// Lista de alumnos
let alumnos = ["Adriano", "Carlos", "Lucía"];

// Mostrar elementos manualmente
console.log(alumnos[0]);
console.log(alumnos[1]);
console.log(alumnos[2]);

// Recorrer array con for
for (let i = 0; i < alumnos.length; i++) {

    console.log(alumnos[i]);

}


/* ========================================
   OTRO EJEMPLO DE ARRAY
======================================== */

let colores = ["Rojo", "Azul", "Verde", "Negro"];

for (let i = 0; i < colores.length; i++) {

    console.log(colores[i]);

}


/* ========================================
   OBJETOS
======================================== */

// Objeto persona
let persona = {

    nombre: "Adriano",
    edad: 18,
    pais: "Perú"

};

// Acceder a propiedades
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.pais);


/* ========================================
   OBJETO PRODUCTO
======================================== */

let producto = {

    nombre: "Laptop",
    precio: 2500,
    disponible: true

};

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);


// Validar disponibilidad
if (producto.disponible) {

    console.log("Producto disponible");

} else {

    console.log("Producto agotado");

}


/* ========================================
   OBJETO CELULAR
======================================== */

let celular = {

    marca: "Iphone",
    modelo: 13,
    precio: 3200

};

console.log(celular.marca);
console.log(celular.modelo);
console.log(celular.precio);


/* ========================================
   ARRAY DE OBJETOS
======================================== */

let usuarios = [

    {
        nombre: "Adriano",
        edad: 18
    },

    {
        nombre: "Carlos",
        edad: 20
    },

    {
        nombre: "Lucía",
        edad: 19
    }

];

// Acceder manualmente
console.log(usuarios[0].nombre);
console.log(usuarios[1].edad);
console.log(usuarios[2].nombre);


// Recorrer usuarios
for (let i = 0; i < usuarios.length; i++) {

    console.log(usuarios[i].nombre);
    console.log(usuarios[i].edad);

}


/* ========================================
   ARRAY DE PRODUCTOS
======================================== */

let productos = [

    {
        nombre: "Iphone 13",
        precio: 3000
    },

    {
        nombre: "Laptop",
        precio: 4000
    },

    {
        nombre: "TV LG",
        precio: 2000
    }

];

// Recorrer productos
for (let i = 0; i < productos.length; i++) {

    console.log(productos[i].nombre);
    console.log(productos[i].precio);

}


/* ========================================
   PUSH Y POP
======================================== */

// Lista de frutas
let frutas = ["Manzana", "Pera"];

// Agregar elementos
frutas.push("Uva");
frutas.push("Mango");
frutas.push("Sandía");

// Eliminar último elemento
frutas.pop();

console.log(frutas);

// Recorrer frutas
for (let i = 0; i < frutas.length; i++) {

    console.log(frutas[i]);

}


/* ========================================
   MÁS PRÁCTICA CON PUSH Y POP
======================================== */

let amigos = ["Carlos", "Juan"];

amigos.push("Pedro");
amigos.push("Ricardo");
amigos.push("Diego");

amigos.pop();

for (let i = 0; i < amigos.length; i++) {

    console.log(amigos[i]);

}


/* ========================================
   RETURN
======================================== */

// Función que devuelve suma
function sumarNumeros(a, b) {

    return a + b;

}

let resultado1 = sumarNumeros(10, 5);

console.log(resultado1);


// Función multiplicar
function multiplicar(a, b) {

    return a * b;

}

let resultado2 = multiplicar(4, 3);

console.log(resultado2);


// Función devolver nombre
function obtenerNombre() {

    return "Adriano";

}

let saludo = "Hola " + obtenerNombre();

console.log(saludo);


// Calcular precio final
function calcularPrecioFinal(precio, envio) {

    return precio + envio;

}

let total = calcularPrecioFinal(200, 50);

console.log(total);


// Función que devuelve mensaje
function obtenerMensaje() {

    return "Bienvenido al sistema";

}

console.log(obtenerMensaje());


/* ========================================
   SPLICE
======================================== */

// Eliminar elemento
let juegos = ["Free fire", "Minecraft", "FIFA"];

// Elimina 1 elemento desde posición 1
juegos.splice(1, 1);

console.log(juegos);


// Insertar elemento
let paises = ["Perú", "Chile"];

// Desde posición 1, eliminar 0 e insertar
paises.splice(1, 0, "Argentina");

console.log(paises);


// Reemplazar elemento
let cursos = ["HTML", "CSS", "JavaScript"];

// Reemplaza CSS por React
cursos.splice(1, 1, "React");

console.log(cursos);


// Arrow Functions
const saludarAlguien = (nombre) => {
    return `Hola ${nombre}`;
};
console.log(saludarAlguien("Adriano"));

// Template Strings
const productoNombre = "Laptop";
const precioProducto = 4500;

console.log(`El producto ${productoNombre} cuesta S/ ${precioProducto}`);

// Destructuring
const pelicula = {
    tituloPelicula: "Batman",
    año: 2022,
    genero: "Accion"
};
const { tituloPelicula, año, genero } = pelicula;
console.log(`La pelicula ${tituloPelicula} salió en ${año}`);

// Arrow function más corta
const multiplicarModern = (a, b) => a * b;

console.log(multiplicarModern(5, 4));