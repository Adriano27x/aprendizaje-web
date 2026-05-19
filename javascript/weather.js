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
            <div class="weather-card glass-card">

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
