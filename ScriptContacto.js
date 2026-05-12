        function toggleAutor(integrantes) {
            const img = integrantes.querySelector('img');
            const titulo = integrantes.querySelector('h2');
            const parrafo = integrantes.querySelector('p');

            // Comprobar si estamos en el estado 1
            const esEstado1 = img.getAttribute('src') === img.getAttribute('data-img1');

            if (esEstado1) {
                // Cambiar a estado 2
                img.src = img.getAttribute('data-img2');
                titulo.innerText = titulo.getAttribute('data-t2');
                parrafo.innerText = parrafo.getAttribute('data-p2');
            } else {
                // Volver a estado 1
                img.src = img.getAttribute('data-img1');
                titulo.innerText = titulo.getAttribute('data-t1');
                parrafo.innerText = parrafo.getAttribute('data-p1');
            }
        }