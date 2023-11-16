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
    //reg window
    document.querySelector('.registration-form-title p').textContent = 'Registration of warriors';
    document.querySelector('.registration-form-name-box legend').textContent = 'Name';
    document.querySelector('.name-requirements-box span').title = 'Your name must be 2 or more characters long, contain no special characters, or be empty.';
    document.querySelector('.registration-form-class-box legend').textContent = 'Class';
    document.querySelector('.registration-form-starting-item-box legend').textContent = 'Item';
    document.querySelector('.registration-form-footer-signatuer-box p').textContent = 'Signatuer';
    document.querySelector('.registration-form-footer-start-btn p').textContent = 'To battle!';

    //info popup
    document.querySelector('.info-popup-close').textContent = 'Close';
    document.querySelector('.info-popup__item:nth-child(1) .info-popup__item-title p').textContent = 'About the game';
    document.querySelector('.info-popup__item:nth-child(1) .info-popup__item-discraption p').textContent = `
    The game of Wither - This is a browser-based card game. It has 16 levels, for each level you complete, 
    new things and classes will become available to you, and your enemies will also become stronger.
     Gather the right equipment and defeat your opponents! And after completing all 16 levels, your prestige level will increase.
    `;
    for (let i = 0; i < document.querySelectorAll('.info-popup__item-title p').length; i++) {
        const element = document.querySelectorAll('.info-popup__item-title p');
        element[0].textContent = 'Classes';
        element[1].textContent = 'There are 4 classes: Peasant, Miner, Witch, Vampire.';
        element[2].textContent = 'Items';
        element[3].textContent = 'Enemies';
        element[4].textContent = 'Prestige';
        element[5].textContent = 'About the project';
    }
}

function RUStranslate() {
    //reg window
    document.querySelector('.registration-form-title p').textContent = 'Регистрация воинов';
    document.querySelector('.registration-form-name-box legend').textContent = 'Имя';
    document.querySelector('.name-requirements-box span').title = 'Ваше имя должно состоять из 2 или более символов, не содержать специальных символов или быть пустым.';
    document.querySelector('.registration-form-class-box legend').textContent = 'Класс';
    document.querySelector('.registration-form-starting-item-box legend').textContent = 'Предмет';
    document.querySelector('.registration-form-footer-signatuer-box p').textContent = 'Подпись';
    document.querySelector('.registration-form-footer-start-btn p').textContent = 'В бой!';

    //info popup
    document.querySelector('.info-popup-close').textContent = 'Закрыть';
    // document.querySelector('.info-popup__item:nth-child(1) .info-popup__item-title p').textContent = 'Об игре';
    // document.querySelector('.info-popup__item:nth-child(1) .info-popup__item-discraption p').textContent = 'The game of Wither – это браузерная карточная игра. В нем 16 уровней, за каждый пройденный уровень Вам станут доступны новые вещи и классы, а также ваши враги станут сильнее. Соберите подходящее снаряжение и победите своих противников! А после прохождения всех 16 уровней ваш уровень престижа повысится.';
    // document.querySelector('.info-popup__item:nth-child(2) .info-popup__item-title p').textContent = 'Классы';
    // document.querySelectorAll('.info-popup__item-title p').forEach(infoPopupTitle => {
    //     infoPopupTitle.textContent = 'Об игре';
    // })
    for (let i = 0; i < document.querySelectorAll('.info-popup__item-title p').length; i++) {
        const element = document.querySelectorAll('.info-popup__item-title p');
        element[0].textContent = 'Об игре';
        element[1].textContent = 'Классы';
        element[2].textContent = 'Предметы';
        element[3].textContent = 'Враги';
        element[4].textContent = 'Престиж';
        element[5].textContent = 'О проекте';
    }
    // document.querySelector('.info-popup__item:nth-child(2) .info-popup__item-discraption p:nth-child(1)').textContent = 'Всего есть 4 класса: Крестьянин, Шахтер, Ведьма, Вампир.';
    // document.querySelector('.info-popup__item:nth-child(3) .info-popup__item-title p').textContent = '';
    // document.querySelector('.info-popup__item:nth-child(3) .info-popup__item-discraption p').textContent = '';
    // document.querySelector('.info-popup__item:nth-child(4) .info-popup__item-title p').textContent = '';
    // document.querySelector('.info-popup__item:nth-child(4) .info-popup__item-discraption p').textContent = '';
    // document.querySelector('.info-popup__item:nth-child(5) .info-popup__item-title p').textContent = '';
    // document.querySelector('.info-popup__item:nth-child(5) .info-popup__item-discraption p').textContent = '';
    // document.querySelector('.info-popup__item:nth-child(6) .info-popup__item-title p').textContent = '';
    // document.querySelector('.info-popup__item:nth-child(6) .info-popup__item-discraption p').textContent = '';
    // document.querySelector('').textContent = '';
    // document.querySelector('').textContent = '';
    // document.querySelector('').textContent = '';
    // document.querySelector('').textContent = '';
    // document.querySelector('').textContent = '';
    // document.querySelector('').textContent = '';
    // document.querySelector('').textContent = '';
    // document.querySelector('').textContent = '';
    // document.querySelector('').textContent = '';
    // document.querySelector('').textContent = '';
    // document.querySelector('').textContent = '';
    // document.querySelector('').textContent = '';
    // document.querySelector('').textContent = '';
    // document.querySelector('').textContent = '';
    // document.querySelector('').textContent = '';
    // document.querySelector('').textContent = '';
}