document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
        const images = slider.querySelectorAll('.slider__image');
        const prevButton = slider.querySelector('.slider__button--prev');
        const nextButton = slider.querySelector('.slider__button--next');
        const dotsContainer = slider.querySelector('.slider__dots');
        let currentIndex = 0;

        // Create dots
        images.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('slider__dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll('.slider__dot');

        function updateSlider() {
            images.forEach((image, index) => {
                image.classList.toggle('active', index === currentIndex);
            });
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            updateSlider();
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % images.length;
            updateSlider();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateSlider();
        }

        // Event listeners
        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);

        // Auto slide every 5 seconds
        setInterval(nextSlide, 5000);
    });
}); 