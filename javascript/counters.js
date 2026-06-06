const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = Number(counter.dataset.target);
            const suffix = counter.dataset.suffix || "";

            let current = 0;

            const updateCounter = () => {
                // Ajustamos el incremento dinámico para evitar saltos bruscos
                const increment = target / 50;

                if (current < target) {
                    current += increment;

                    /* SOLUCIÓN AL REBOTE:
                       Usamos Math.min para garantizar que el número redondeado hacia arriba 
                       NUNCA pase del número objetivo real (target).
                    */
                    const displayValue = Math.min(Math.ceil(current), target);
                    
                    counter.textContent = displayValue + suffix;

                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + suffix;
                }
            };

            updateCounter();
            counterObserver.unobserve(counter);
        }
    });
}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});