const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const infoSecr = document.getElementById("info4");
const zonaEspecifica = document.getElementById("Monstruos");
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

    // 2. DETECTAR POSICIÓN
    const posicion = zonaEspecifica.getBoundingClientRect();
    
    // ¿Qué significa "estar en la zona"? 
    // Que el tope del elemento esté por debajo del inicio de pantalla 
    // y por encima del final (que sea visible).
  const centroElemento = posicion.top + (posicion.height / 2);
const centroPantalla = window.innerHeight / 2;

// Si el centro del elemento está a menos de 200px del centro de la pantalla
const estaEnElCentro = Math.abs(centroElemento - centroPantalla) < 200;

    if (randomNumber >= 15 && estaEnElCentro && infoSecr.classList.contains("hide")) 
    {
        infoSecr.classList.remove("hide");
    }
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