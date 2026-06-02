const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = Number(counter.dataset.target);
            const suffix = counter.dataset.suffix || "";

            let current = 0;

            const updateCounter = () => {

                const increment = target / 50;

                if (current < target) {

                    current += increment;

                    counter.textContent =
                        Math.ceil(current) + suffix;

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.textContent =
                        target + suffix;

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