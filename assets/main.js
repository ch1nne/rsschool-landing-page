const track = document.querySelector('.slider__track');
const slides = document.querySelectorAll('.slider__slide');
const prevBtn = document.querySelector('.slider__arrow--prev');
const nextBtn = document.querySelector('.slider__arrow--next');
const dots = document.querySelectorAll('.slider__dot');

let currentIndex = 0;
const totalSlides = slides.length;

function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('slider__dot--active', i === currentIndex);
    });
}

function goToNext() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

function goToPrev() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
}

nextBtn.addEventListener('click', goToNext);
prevBtn.addEventListener('click', goToPrev);

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider();
    });
});

updateSlider();