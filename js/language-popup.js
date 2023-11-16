const languagePopupFade = document.querySelector( '.language-popup-fade');
const languageBtn = document.getElementById('languageBtn');
const infoBtn = document.querySelector('#infoBtn')

languageBtn.onclick = () => {
    languagePopupFade.style.display = 'block';
    setTimeout(() => languagePopupFade.style.opacity = '1', .1);
}

document.addEventListener('click', (e) => {
    const hidden = e.composedPath().includes(languagePopupFade);
    if (!hidden && e.target != languageBtn) {
        setTimeout(() => languagePopupFade.style.display = 'none', 500);
        languagePopupFade.style.opacity = '0';
    }
})

const engBox = document.querySelector('.english-language-box');
const rusBox = document.querySelector('.russian-language-box');

engBox.onclick = () => {
    engBox.style.color = 'red';
    rusBox.style.color = 'rgb(194, 194, 194)';
}

rusBox.onclick = () => {
    engBox.style.color = 'rgb(194, 194, 194)';
    rusBox.style.color = 'red';
}