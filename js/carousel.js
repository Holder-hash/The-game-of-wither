const previousArrow = document.getElementById('previousArrow');
const nextArrow = document.getElementById('nextArrow');
const carousel = document.querySelectorAll('.carousel');

let carouselIndex = 0;

previousArrow.addEventListener('click', () => {
    carouselIndex += 240;
    if (carouselIndex >= 0) carouselIndex = 0;
    carousel.forEach(carouselItem => {
        carouselItem.style.transform = `translateX(${carouselIndex}px)`;
    })
})

nextArrow.addEventListener('click', () => {
    carouselIndex -= 240;
    if (carouselIndex <= -720) carouselIndex = -720;
    carousel.forEach(carouselItem => {
        carouselItem.style.transform = `translateX(${carouselIndex}px)`;
    })
})