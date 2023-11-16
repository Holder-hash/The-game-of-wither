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

    for (let i = 0; i < document.querySelectorAll('.info-popup__item-title p').length; i++) {
        const element = document.querySelectorAll('.info-popup__item-title p');
        element[0].textContent = 'About the game';
        element[1].textContent = 'Classes';
        element[2].textContent = 'Items';
        element[3].textContent = 'Enemies';
        element[4].textContent = 'Prestige';
        element[5].textContent = 'About the project';
    }

    document.querySelector('.info-popup__item-discraption-About-game').textContent = 'The game of Wither - This is a browser-based card game. It has 16 levels, for each level you complete, new things and classes will become available to you, and your enemies will also become stronger. Gather the right equipment and defeat your opponents! And after completing all 16 levels, your prestige level will increase.';
    
    for (let i = 0; i < document.querySelectorAll('.info-popup__item-discraption-Classes p').length; i++) {
        const element = document.querySelectorAll('.info-popup__item-discraption-Classes p');
        element[0].textContent = 'There are 4 classes: Peasant, Miner, Witch, Vampire.';
        element[1].textContent = 'Each subsequent one is stronger than the previous one and has its own unique characteristics.';
        element[2].textContent = 'The vampire has his own unique skll, its smell instills fear and horror in his enemies, causing them to become weaker.';
        element[3].textContent = 'Enemies can also have their own abilities';
    }
    for (let i = 0; i < document.querySelectorAll('.info-popup__item-discraption-Items p').length; i++) {
        const element = document.querySelectorAll('.info-popup__item-discraption-Items p');
        element[0].textContent = 'There are only 16 items in the game. Each subsequent item is stronger than the previous one. They are interconnected. For example:';
        element[1].textContent = 'if your enemy literally consists of stone (miner location), then hitting the peasant with non-objects will sooner or later lead to the breakage of these very objects, keep this in mind!';
        element[2].textContent = "Or, the vampire's fang, which is available to the sorcerer, also scares away enemies, slightly reducing their health level.";
    }
    document.querySelector('.info-popup__item-discraption-Enemies p').textContent = 'There are 9 enemies on each level. You need to defeat them all to move to the next level. By killing an enemy, you raise the level of your character specifically in this mission. If you try to kill an enemy whose level is higher than yours, you will certainly die.'
    document.querySelector('.info-popup__item-discraption-Prestige p').textContent = 'After completing all 16 levels, the game will start over, but your prestige will increase. In fact, prestige does not provide any buffs or make any changes to gameplay. It only reflects your experience on the battlefield.';
    document.querySelector('.info-popup__item-discraption-About-project p').textContent = 'Hello World! My name is Georgy, I am a web developer from Russia. This open source project was created for my portfolio. By the way, after some time after I created it, I stopped development for a long time. During this time I learned a lot, but the old code remained. So, if you look under the hood, you will find a lot of legacy code there. Sorry about that...';

    document.querySelector('.info-popup-links p').textContent = 'Useful links: ';
    document.querySelector('.info-popup-donate-box a').textContent = 'Donation';
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
    for (let i = 0; i < document.querySelectorAll('.info-popup__item-title p').length; i++) {
        const element = document.querySelectorAll('.info-popup__item-title p');
        element[0].textContent = 'Об игре';
        element[1].textContent = 'Классы';
        element[2].textContent = 'Предметы';
        element[3].textContent = 'Враги';
        element[4].textContent = 'Престиж';
        element[5].textContent = 'О проекте';
    }
    document.querySelector('.info-popup__item-discraption-About-game').textContent = 'The game of Wither – это браузерная карточная игра. В нем 16 уровней, за каждый пройденный уровень вам станут доступны новые вещи и классы, а также ваши враги станут сильнее. Соберите подходящее снаряжение и победите своих противников! А после прохождения всех 16 уровней ваш уровень престижа повысится.';
    for (let i = 0; i < document.querySelectorAll('.info-popup__item-discraption-Classes p').length; i++) {
        const element = document.querySelectorAll('.info-popup__item-discraption-Classes p');
        element[0].textContent = 'Всего есть 4 класса: Крестьянин, Шахтер, Ведьма, Вампир.';
        element[1].textContent = 'Каждый последующий сильнее предыдущего и имеет свои уникальные характеристики.';
        element[2].textContent = 'Вампир обладает своим уникальным умением, его запах вселяет в врагов страх и ужас, заставляя их становиться слабее.';
        element[3].textContent = 'Enemies can also have their own abilities';
    }
    for (let i = 0; i < document.querySelectorAll('.info-popup__item-discraption-Items p').length; i++) {
        const element = document.querySelectorAll('.info-popup__item-discraption-Items p');
        element[0].textContent = 'В игре всего 16 предметов. Каждый последующий предмет сильнее предыдущего. Они взаимосвязаны. Например:';
        element[1].textContent = 'если ваш враг буквально состоит из камня (локация Шахтер), то удары мужика непредметами рано или поздно приведут к поломке этих самых предметов, имейте это ввиду!';
        element[2].textContent = 'Или же клык вампира, имеющийся у колдуна, тоже отпугивает врагов, немного снижая уровень их здоровья.';
    }
    document.querySelector('.info-popup__item-discraption-Enemies p').textContent = 'На каждом уровне 9 врагов. Вам нужно победить их всех, чтобы перейти на следующий уровень. Убивая врага, вы повышаете уровень своего персонажа именно в этой миссии. Если вы попытаетесь убить врага, уровень которого выше вашего, вы непременно погибнете.'
    document.querySelector('.info-popup__item-discraption-Prestige p').textContent = 'После прохождения всех 16 уровней игра начнется сначала, но ваш престиж повысится. На самом деле престиж не дает никаких положительных эффектов и не вносит никаких изменений в игровой процесс. Это лишь отражает ваш опыт на поле боя.';
    document.querySelector('.info-popup__item-discraption-About-project p').textContent = 'Привет, мир! Меня зовут Георгий, я веб-разработчик из России. Этот проект с открытым исходным кодом был создан для моего портфолио. Кстати, спустя какое-то время после того, как я его создал, я надолго остановил разработку. За это время я многому научился, но старый код остался. Итак, если вы заглянете под капот, вы обнаружите там много устаревшего кода. Извини за это...';
    
    document.querySelector('.info-popup-links p').textContent = 'Полезные ссылки: ';
    document.querySelector('.info-popup-donate-box a').textContent = 'Пожертвовать';
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