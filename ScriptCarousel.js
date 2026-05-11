// Referencias a los elementos (usando los IDs de tu HTML)






let currentSlideIndex = 0;

let autoPlayInterval;
let isPaused = false;

const track = document.getElementById('track');

const slides = Array.from(document.querySelectorAll('.slide'));
const totalSlides = slides.length;
const raceNameDisplay = document.getElementById('currentRaceName');
const nextButton = document.getElementById('nextBtn');
const prevButton = document.getElementById('prevBtn');




const moveToSlide = (index) => {
    // Para 5 slides, cada uno es un 20% del track (100 / 5)
    // El track se mueve en porcentajes negativos para mostrar el siguiente
    const percentage = -(index * (100 / totalSlides));
    track.style.transform = `translateX(${percentage}%)`;
    
    currentSlideIndex = index;

    // Actualizar nombre
    const activeSlide = slides[currentSlideIndex];
    raceNameDisplay.innerText = activeSlide.getAttribute('data-name');

    // Cerrar info al mover
    slides.forEach(s => s.classList.remove('show-info'));
    isPaused = false;
};

/*
  Navegación
 */
const nextSlide = () => {
    let nextIndex = (currentSlideIndex + 1) % totalSlides;
    moveToSlide(nextIndex);
};

const prevSlide = () => {
    let prevIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    moveToSlide(prevIndex);
};

// Eventos de botones
nextButton.addEventListener('click', () => {
    nextSlide();
    resetAutoPlay();
});

prevButton.addEventListener('click', () => {
    prevSlide();
    resetAutoPlay();
});

// Click en el slide para mostrar/ocultar información
slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        slide.classList.toggle('show-info');
        // Si el usuario está leyendo (info abierta), pausamos el carrusel
        isPaused = slide.classList.contains('show-info');
    });
});

/**
 * Lógica de Auto-play
 */
const startAutoPlay = () => {
    autoPlayInterval = setInterval(() => {
        if (!isPaused) {
            nextSlide();
        }
    }, 4000); // 4 segundos como en tu snippet
};

const resetAutoPlay = () => {
    clearInterval(autoPlayInterval);
    startAutoPlay();
};

// Lógica de Scroll: si el usuario baja, el carrusel sigue su curso
window.addEventListener('scroll', () => {
    if (window.scrollY > 30 && isPaused) {
        isPaused = false;
        slides.forEach(s => s.classList.remove('show-info'));
    }
});

// Iniciar el carrusel
startAutoPlay();