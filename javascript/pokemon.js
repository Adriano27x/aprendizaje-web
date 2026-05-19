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
            <div class="pokemon-card glass-card">

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

