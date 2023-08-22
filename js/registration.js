var haveName = false;
var haveSignature = false;

$(document).ready(function($) {
    $('#registrationNameInput').focus(() => 
        $('.registration-form-name-box legend').css('transform', 'translate(0,0)')
    );
    $('#registrationNameInput').blur(function() {
        if (!$('#registrationNameInput').val()) {
            $('.registration-form-name-box legend').css('transform', 'translate(0,20px)')
        }
        if ($('#registrationNameInput').val() && $('#registrationNameInput').val().length >= 2 ) {
            haveName = true;
        }
    })

    //signature canvas
    
    var canvas = document.getElementById('signatureCanvas');
    var ctx = canvas.getContext('2d');
    var mouseDown = false;
    
    canvas.width  = 200;
    canvas.height = 50;
    
    
    canvas.addEventListener('mousedown', () => {
        mouseDown = true;
    });
    
    canvas.addEventListener('mouseup', () => {
        mouseDown = false;
        ctx.beginPath();
    });
    
    ctx.lineWidth = 2;
    canvas.addEventListener('mousemove', (e) => {
        if (mouseDown) {
            haveSignature = true;
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
    
            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY);
        }
    });
    
    //validation
    
    $('#startBtn').click(function() {
        if (haveName == true && haveSignature == true &&
             /[!@#$%^&*|/+=;:]/.test(registrationNameInput.value) == false) {
            $('.registration-window').fadeOut()
            person.name = registrationNameInput.value
            game()
        }
        if (haveName == false || /[!@#$%^&*|/+=;:]/.test(registrationNameInput.value) == true) {
            $('.registration-form-name-box').toggleClass('jerking-animation-class');
            $('.name-requirements-box span').toggleClass('name-box-validation')
        }
        if (haveSignature == false) {
            $('.registration-form-footer-signatuer-box').toggleClass('jerking-animation-class')
        }
    })
});	


// game
const nameInp = document.querySelector('#nameInput')
const doneBtn = document.querySelector('#doneBtn')
const regBox = document.querySelector('.reg-box')
const itemSelector = document.querySelector('#itemSelector')
const classSelector = document.querySelector('#classSelector')

const gameArea = document.querySelector('.game-area')
var playerStats = document.querySelector('#playerStats')


const person = {
    'name': 'none',
    'item': 'none',
    'class': 'none',
    'level': 3
}

function game() {
    gameArea.style.display = 'flex';

    if (person.item == 'Эрудит') {
        person.level = 4
    }

    playerStats.innerHTML = `name: ${person.name}<br>
    item: ${person.item}<br>
    class: ${person.class}<br>
    level: ${person.level}<br>`;

    const buttons = [];

    for (let i = 1; i < 10; i++) {
        let enemy = document.createElement('button');
        enemy.value = i;
        if (person.item == 'Пожиратель опыта') {
            enemy.value = i - 0.5;
        }
        enemy.innerHTML = enemy.value;
        buttons.push(enemy);

        enemy.onclick = function(value) {
            return function() {
                if (value < person.level) {
                    enemy.innerHTML = 'DESTROYED';
                    person.level += Number(value) / person.level;
                    playerStats.innerHTML = `name: ${person.name}<br>
                        item: ${person.item}<br>
                        class: ${person.class}<br>
                        level: ${person.level}<br>`;
                }
            };
        }(enemy.value);
    }

    // Перестановка кнопок в случайном порядке
    for (let i = buttons.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [buttons[i], buttons[j]] = [buttons[j], buttons[i]];  
    }

    // Добавление кнопок на страницу в новом порядке
    buttons.forEach(button => {
        gameArea.appendChild(button);
    });
    

    }