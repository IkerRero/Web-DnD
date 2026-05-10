const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
let lastScrollY = window.scrollY;

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuBtn.innerHTML = "X";
        menuBtn.setAttribute("aria-expanded", "true");
    } else {
        menuBtn.innerHTML = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
    }

});


function TirarDado() {
    const display = document.getElementById("NavNumber");
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    
    display.innerHTML = randomNumber;
    display.classList.remove("irse-arriba");
    void display.offsetWidth; // Reiniciar animación
    display.classList.add("mostrar");
}

// --- ÚNICO EVENTO DE SCROLL (Para Header y Dado) ---
window.addEventListener("scroll", () => {
    const display = document.getElementById("NavNumber");
    const header = document.querySelector("header");
    const currentScrollY = window.scrollY;

    // --- 1. CERRAR MENÚ SI ESTÁ ABIERTO AL ESCROLEAR ---
    if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        menuBtn.innerHTML = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
    }

    // --- 2. LÓGICA DEL DADO (Tu animación) ---
    if (display.classList.contains("mostrar")) {
        display.classList.remove("mostrar");
        display.classList.add("irse-arriba");
    }

    // --- 3. OCULTAR/MOSTRAR HEADER ---
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
        header.classList.add("header-hidden");
    } else {
        header.classList.remove("header-hidden");
    }

    lastScrollY = currentScrollY;
});