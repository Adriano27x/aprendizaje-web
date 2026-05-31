const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", function(e) {

        const ripple = document.createElement("span");

        const rect = button.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left =
            e.clientX - rect.left - size / 2 + "px";

        ripple.style.top =
            e.clientY - rect.top - size / 2 + "px";

        ripple.classList.add("ripple");

        button.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});