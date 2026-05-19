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
