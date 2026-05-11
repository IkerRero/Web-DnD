const puntos = document.querySelectorAll('.punto-info');
const cajaMovil = document.getElementById('texto-dinamico-movil');

puntos.forEach(punto => {
    punto.addEventListener('click', (e) => {
        e.stopPropagation();

        // 1. Gestionar clases activo
        puntos.forEach(p => p.classList.remove('activo'));
        punto.classList.add('activo');

        // 2. EXTRAER el texto del tooltip interno de este punto
        const textoTooltip = punto.querySelector('.tooltip').innerText;

        // 3. INYECTAR el texto en la caja de abajo (solo se verá si el CSS lo permite)
        if (cajaMovil) {
            cajaMovil.innerText = textoTooltip;
        }
    });
});

// Resetear al hacer click fuera
document.addEventListener('click', () => {
    puntos.forEach(p => p.classList.remove('activo'));
    if (cajaMovil) {
        cajaMovil.innerText = "Toca un punto (+) para ver los detalles.";
    }
});