document.addEventListener('DOMContentLoaded', function() {
    const modulos = document.querySelectorAll('.modulo');

    modulos.forEach(modulo => {
        modulo.addEventListener('click', function() {
            const contenido = this.querySelector('.contenido-modulo');
            
            // Toggle the visible class
            contenido.classList.toggle('visible');
            
            // Adjust the max-height for animation
            if (contenido.classList.contains('visible')) {
                contenido.style.maxHeight = contenido.scrollHeight + "px";
            } else {
                contenido.style.maxHeight = null;
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Muestra el banner después de 5 segundos
    setTimeout(function() {
        var banner = document.getElementById('sticky-banner');
        banner.style.display = 'flex'; // Asegúrate de que el banner esté visible
        setTimeout(function() {
            banner.style.opacity = '1'; // Asegura que la transición de opacidad funcione
        }, 10);
    }, 5000);

    // Cierra el banner al hacer clic en el botón de cierre
    document.getElementById('close-banner').addEventListener('click', function() {
        var banner = document.getElementById('sticky-banner');
        banner.style.opacity = '0'; // Inicia la transición de opacidad
        setTimeout(function() {
            banner.style.display = 'none'; // Oculta el banner después de la transición
        }, 500);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const testimonios = document.querySelectorAll('.testimonio');
    let index = 0;

    function showSlide(i) {
        testimonios.forEach((testimonio, idx) => {
            testimonio.classList.toggle('active', idx === i);
        });
    }

    showSlide(index);

    document.getElementById('next').addEventListener('click', function() {
        index = (index + 1) % testimonios.length;
        showSlide(index);
    });

    document.getElementById('prev').addEventListener('click', function() {
        index = (index - 1 + testimonios.length) % testimonios.length;
        showSlide(index);
    });
});
