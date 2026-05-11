  // Seleccionamos todos los puntos
        const puntos = document.querySelectorAll('.punto-info');

        puntos.forEach(punto => {
            punto.addEventListener('click', (e) => {
                // Evitamos que el click se propague si hay otros elementos
                e.stopPropagation();
                
                // Cerramos otros puntos abiertos (opcional)
                puntos.forEach(p => {
                    if (p !== punto) p.classList.remove('activo');
                });

                // Alternamos el estado del punto actual
                punto.classList.toggle('activo');
            });
        });

        // Cerrar tooltips al hacer click fuera
        document.addEventListener('click', () => {
            puntos.forEach(p => p.classList.remove('activo'));
        });