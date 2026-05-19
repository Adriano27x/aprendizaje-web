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
