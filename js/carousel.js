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

const classImg = document.querySelectorAll('.class-item');
const gamePersonAvatar = document.getElementById('gamePersonAvatar');

startBtn.onclick = () => {
    if (carouselIndex == 0 && localStorage.getItem('heroy') == 'default') gamePersonAvatar.src = 'media/persons/default/default1.jpeg'
    else if (carouselIndex == -240 && localStorage.getItem('heroy') == 'default') gamePersonAvatar.src = 'media/persons/default/default2.jpeg'
    else if (carouselIndex == -480 && localStorage.getItem('heroy') == 'default') gamePersonAvatar.src = 'media/persons/default/default3.jpeg'
    else if (carouselIndex == -720 && localStorage.getItem('heroy') == 'default') gamePersonAvatar.src = 'media/persons/default/default4.jpeg'

    if (carouselIndex == 0 && localStorage.getItem('heroy') == 'mainer') gamePersonAvatar.src = 'media/persons/mainer/mainer1.jpeg'
    else if (carouselIndex == -240 && localStorage.getItem('heroy') == 'mainer') gamePersonAvatar.src = 'media/persons/mainer/mainer2.jpeg'
    else if (carouselIndex == -480 && localStorage.getItem('heroy') == 'mainer') gamePersonAvatar.src = 'media/persons/mainer/mainer3.jpeg'
    else if (carouselIndex == -720 && localStorage.getItem('heroy') == 'mainer') gamePersonAvatar.src = 'media/persons/mainer/mainer4.jpeg'

    if (carouselIndex == 0 && localStorage.getItem('heroy') == 'witch') gamePersonAvatar.src = 'media/persons/witch/witch1.jpeg'
    else if (carouselIndex == -240 && localStorage.getItem('heroy') == 'witch') gamePersonAvatar.src = 'media/persons/witch/witch2.jpeg'
    else if (carouselIndex == -480 && localStorage.getItem('heroy') == 'witch') gamePersonAvatar.src = 'media/persons/witch/witch3.jpeg'
    else if (carouselIndex == -720 && localStorage.getItem('heroy') == 'witch') gamePersonAvatar.src = 'media/persons/witch/witch4.jpeg'

    if (carouselIndex == 0 && localStorage.getItem('heroy') == 'vampir') gamePersonAvatar.src = 'media/persons/vampir/vampir1.jpeg'
    else if (carouselIndex == -240 && localStorage.getItem('heroy') == 'vampir') gamePersonAvatar.src = 'media/persons/vampir/vampir2.jpeg'
    else if (carouselIndex == -480 && localStorage.getItem('heroy') == 'vampir') gamePersonAvatar.src = 'media/persons/vampir/vampir3.jpeg'
    else if (carouselIndex == -720 && localStorage.getItem('heroy') == 'vampir') gamePersonAvatar.src = 'media/persons/vampir/vampir4.jpeg'
}