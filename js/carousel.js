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
    if (carouselIndex == 0) gamePersonAvatar.src = 'media/persons/default/default1.jpeg'
    else if (carouselIndex == -240) gamePersonAvatar.src = 'media/persons/default/default2.jpeg'
    else if (carouselIndex == -480) gamePersonAvatar.src = 'media/persons/default/default3.jpeg'
    else if (carouselIndex == -720) gamePersonAvatar.src = 'media/persons/default/default4.jpeg'
}

classImg.forEach(classImgItem => {
    classImgItem.onclick = () => {
        switch (localStorage.getItem('heroy')) {
            case 'default':

                break;
        
            case 'mainer':
                console.log('mainer');
                break;

            case 'witch':
                console.log('witch');
                break;

            case 'vampir':
                console.log('vampir');
                break;
        
            default:
                break;
        }
    }
})