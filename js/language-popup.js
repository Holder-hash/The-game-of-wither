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