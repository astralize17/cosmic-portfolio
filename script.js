const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
    let currentSlide = 0;
    const slides = slider.querySelectorAll('img');
    const totalSlides = slides.length;

    slider.addEventListener('click', () => {
        currentSlide++;
        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }
        updateSlide();
    });

    function updateSlide() {
        slides.forEach((slide, index) => {
            slide.style.opacity = index === currentSlide ? '1' : '0'; // Show current slide, hide others
        });
    }
});