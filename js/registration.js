//class boxes
var mainerClassImg = document.getElementById('mainerClassImg');
var mainerClassLocker = document.getElementById('mainerClassLocker');

var witchClassImg = document.getElementById('witchClassImg');
var witchClassLocker = document.getElementById('witchClassLocker');

var vampirClassImg = document.getElementById('vampirClassImg');
var vampirClassLocker = document.getElementById('vampirClassLocker');

if (localStorage.getItem('gameLevel') >= 2) {
    mainerClassLocker.style = 'display: none';
    mainerClassImg.style = 'display: block';
    mainerClassImg.src = 'https://www.artmajeur.com/medias/standard/p/i/pilacadena/artwork/3300101_Miner_48x72.jpg';
}
if (localStorage.getItem('gameLevel') >= 3) {
    witchClassLocker.style = 'display: none';
    witchClassImg.style = 'display: block';
    witchClassImg.src = 'https://phonoteka.org/uploads/posts/2021-07/1625629689_5-phonoteka-org-p-mag-art-krasivo-7.jpg';
}
if (localStorage.getItem('gameLevel') == 4) {
    vampirClassLocker.style = 'display: none';
    vampirClassImg.style = 'display: block';
    vampirClassImg.src = 'https://storage.googleapis.com/pod_public/1300/149993.jpg';
}


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

const gameArea = document.querySelector('.game-area')
var personCardName = document.querySelector('#personCardName')
var personLevelText = document.querySelector('#personLevelText')
const enemyContainArea = document.querySelector('.enemy-contain-area')


const person = {
    'name': 'none',
    'item': 'none',
    'class': 'default',
    'level': 10
}

function game() {
    gameArea.style.display = 'flex';

    personCardName.innerHTML = person.name
    personLevelText.innerHTML = person.level
    
    if (person.item == 'Эрудит') {
        person.level = 4
    }


    var buttons = [];

    for (let i = 1; i < 10; i++) {
        const enemyMan = {
            'lvl': 0,
            'pic': 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Enemy_logo.svg/1200px-Enemy_logo.svg.png',
            'destroyed': false,
            'boss': false
        }
        //items
        if (person.item == 'Пожиратель опыта') {
            enemy.lvl = i - 0.5;
        }

        switch (i) {
            case 1:
                enemyMan.pic = 'https://cdnb.artstation.com/p/assets/images/images/021/716/453/large/juan-miguel-lopez-barea-guardainfante1.jpg?1572693826'
                break;

            case 2:
                enemyMan.pic = 'https://i.pinimg.com/1200x/bb/d6/cc/bbd6ccc7dc33efe1e2cabb40d43495ca.jpg'
                break;
            
            case 3:
                enemyMan.pic = 'https://i.pinimg.com/originals/38/fa/f2/38faf25df595e369724567982c45a1e7.jpg'
                break;

            case 4:
                enemyMan.pic = 'https://cdna.artstation.com/p/assets/images/images/034/004/754/large/tomasz-ryger-enemy-min.jpg?1611147762'
                break;

            case 5:
                enemyMan.pic = 'https://sm.ign.com/t/ign_in/gallery/f/frosthaven/frosthaven-enemy-artwork-and-mini-sculpts_eb9c.1080.jpg'
                break;

            case 6:
                enemyMan.pic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXS5HrBzg1bs_Tis4ykCjlKzgZtcNTnY1hVzRcMSZEcEQ4byoHOLqD5WPdYShVtas25BQ&usqp=CAU'
                break;

            case 7:
                enemyMan.pic = 'https://i.pinimg.com/1200x/57/ce/4d/57ce4dc228fd823c162bbb6a2906b867.jpg'
                break;

            case 8:
                enemyMan.pic = 'https://cdna.artstation.com/p/assets/images/images/005/177/014/large/shiro-artwork-monster-000.jpg?1500108164'
                break;

            case 9:
                enemyMan.boss = true
                enemyMan.pic = 'https://i.pinimg.com/1200x/d2/e6/f4/d2e6f4a195ac1f4fd6aa0a0cda500d3d.jpg'
                break;
        
            default:
                break;
        }

        let enemy = document.createElement('div');
        let enemyPic = document.createElement('img');

        enemy.style = `
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        `

        enemyPic.src = enemyMan.pic
        enemyPic.style = `
        width: 100%;
        height: 200px;
        border: 1px solid black
        `

        let enemyLevelText = document.createElement('p');

        enemyLevelText.style = `
        font-size: 26px;
        padding-left: 10px;
        padding-bottom: 10px;
        `
        
        enemy.lvl = i;
        enemyLevelText.innerHTML = enemy.lvl;

        enemy.classList.toggle('enemy-card');
        buttons.push(enemy);
        enemy.appendChild(enemyPic)
        enemy.appendChild(enemyLevelText)



        enemy.onclick = function(value) {
            
            return function() {
                if (value < person.level && enemyMan.destroyed == false) {
                    enemyMan.destroyed = true;
                    enemyPic.src = 'https://media.istockphoto.com/id/901964114/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BD%D0%B0%D0%B4%D0%B3%D1%80%D0%BE%D0%B1%D0%B8%D0%B5-rip.jpg?s=612x612&w=0&k=20&c=a1CxXKdGhUpl4s-B0FA_T6_2_gQuZmxb1NaN-r60Ia4=';
                    person.level += Number(value) / person.level;
                    personLevelText.innerHTML = person.level.toFixed(2);
                    enemy.style = `cursor: not-allowed;`

                    //win
                    if (enemyMan.boss == true) {
                        win()
                    }
                }

                //lose
                else if (value > person.level) {
                    lose()
                    location.reload()
                }
            };
        }(enemy.lvl);
    }

    // Перестановка кнопок в случайном порядке
    for (let i = buttons.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [buttons[i], buttons[j]] = [buttons[j], buttons[i]];  
    }

    // Добавление кнопок на страницу в новом порядке
    buttons.forEach(button => {
        enemyContainArea.appendChild(button);
    });
}

// win
function win() {
    alert('You win!')
        
    if (localStorage.getItem('gameLevel') < 1) {
        localStorage.gameLevel = 2;
    
        location.reload();
    }
    else if (localStorage.getItem('gameLevel') == 2) {
        localStorage.gameLevel = 3;

        location.reload();
    }
    else if (localStorage.getItem('gameLevel') == 3) {
        localStorage.gameLevel = 4;

        location.reload();
    }
    else if (localStorage.getItem('gameLevel') == 4) {
        location.reload();
    }
}

// lose
function lose() {
    alert('You lose!')
}