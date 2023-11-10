const documentWrapper = document.querySelector('.wrapper');
if (localStorage.getItem('gameLevel') < 4 || localStorage.getItem('gameLevel') == null) {
    documentWrapper.classList.add('wrapper-defaultClass');
}
else if (localStorage.getItem('gameLevel') >= 5 && localStorage.getItem('gameLevel') <= 8) {
    documentWrapper.classList.add('wrapper-mainerClass');
}
else if (localStorage.getItem('gameLevel') >= 9 && localStorage.getItem('gameLevel') <= 12) {
    documentWrapper.classList.add('wrapper-witcherClass');
}
else if (localStorage.getItem('gameLevel') >= 13 && localStorage.getItem('gameLevel') <= 17) {
    documentWrapper.classList.add('wrapper-vampirClass');
}


document.addEventListener('mousemove', (e) => {
    let x = e.clientX / window.innerWidth * 30;
    let y = e.clientY / window.innerWidth * 15;
    documentWrapper.style.backgroundPosition = `-${x}px -${y}px`
})