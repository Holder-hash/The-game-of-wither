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

if (localStorage.getItem('language') == null) {
    localStorage.setItem('language', 'eng');
    engBox.style.color = 'red';
}

engBox.onclick = () => {
    localStorage.language = 'eng';
    engBox.style.color = 'red';
    rusBox.style.color = 'rgb(194, 194, 194)';
    ENGtranslate();
}
rusBox.onclick = () => {
    localStorage.language = 'rus';
    engBox.style.color = 'rgb(194, 194, 194)';
    rusBox.style.color = 'red';
    RUStranslate();
}

if (localStorage.getItem('language') == 'eng') {
    engBox.style.color = 'red';
    rusBox.style.color = 'rgb(194, 194, 194)';
    ENGtranslate();
}
if (localStorage.getItem('language') == 'rus') {
    engBox.style.color = 'rgb(194, 194, 194)';
    rusBox.style.color = 'red';
    RUStranslate();
}

function ENGtranslate() {
    document.querySelector('.registration-form-title p').textContent = 'Registration of warriors';
    document.querySelector('.registration-form-name-box legend').textContent = 'Name';
    document.querySelector('.name-requirements-box span').title = 'Your name must be 2 or more characters long, contain no special characters, or be empty.';
    document.querySelector('.registration-form-class-box legend').textContent = 'Class';
    document.querySelector('.registration-form-starting-item-box legend').textContent = 'Item';
    document.querySelector('.registration-form-footer-signatuer-box p').textContent = 'Signatuer';
    document.querySelector('.registration-form-footer-start-btn p').textContent = 'To battle!';
}

function RUStranslate() {
    document.querySelector('.registration-form-title p').textContent = 'Регистрация воинов';
    document.querySelector('.registration-form-name-box legend').textContent = 'Имя';
    document.querySelector('.name-requirements-box span').title = 'Ваше имя должно состоять из 2 или более символов, не содержать специальных символов или быть пустым.';
    document.querySelector('.registration-form-class-box legend').textContent = 'Класс';
    document.querySelector('.registration-form-starting-item-box legend').textContent = 'Предмет';
    document.querySelector('.registration-form-footer-signatuer-box p').textContent = 'Подпись';
    document.querySelector('.registration-form-footer-start-btn p').textContent = 'В бой!';
    document.querySelector('').textContent = '';
    document.querySelector('').textContent = '';
    document.querySelector('').textContent = '';
    document.querySelector('').textContent = '';
    document.querySelector('').textContent = '';
    document.querySelector('').textContent = '';
    document.querySelector('').textContent = '';
    document.querySelector('').textContent = '';
    document.querySelector('').textContent = '';
    document.querySelector('').textContent = '';
    document.querySelector('').textContent = '';
    document.querySelector('').textContent = '';
    document.querySelector('').textContent = '';
    document.querySelector('').textContent = '';
    document.querySelector('').textContent = '';
    document.querySelector('').textContent = '';
    document.querySelector('').textContent = '';
    document.querySelector('').textContent = '';
    document.querySelector('').textContent = '';
    document.querySelector('').textContent = '';
    document.querySelector('').textContent = '';
}