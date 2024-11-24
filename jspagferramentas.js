document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const totalSlides = slides.length;

    // Função para atualizar os slides
    function updateCarousel(index) {
        // Ajustar o índice se estiver fora dos limites
        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        // Mover o carrossel
        const offset = -currentIndex * 100;
        document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;

        // Atualizar os dots
        updateDots();
    }

    // Função para atualizar os indicadores
    function updateDots() {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    // Eventos dos botões
    prevButton.addEventListener('click', () => {
        updateCarousel(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        updateCarousel(currentIndex + 1);
    });

    // Eventos dos dots
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-slide'));
            updateCarousel(index);
        });
    });
});