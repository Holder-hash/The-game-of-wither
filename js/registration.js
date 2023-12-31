window.onload = () => {
    document.querySelector('.preloader').style.display = 'none';
}

var haveName = false;
if (window.innerWidth >= 500) {
    var haveSignature = false;
} else {
    var haveSignature = true;
}

let time = ``;

let hitSound1 = new Audio();
let hitSound2 = new Audio();
let lastHit = new Audio();
let totemSound = new Audio();
const buttonSound = new Audio('../media/sound/button.mp3');
const winSound = new Audio('../media/sound/win.mp3') 
const loseSound = new Audio('../media/sound/lose.mp3') 
let menuSound = new Audio();
let battleSound = new Audio();

$(document).ready(function($) {
    if (localStorage.getItem('nickname')) {
        $('.registration-form-name-box legend').css('transform', 'translate(0,0)')
        registrationNameInput.value = localStorage.getItem('nickname', registrationNameInput.value);
        haveName = true;
    }

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

            ctx.strokeStyle = 'white'
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
    
            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY);
        }
    });
    //validation
    
    $('#startBtn').click(function() {
        buttonSound.play();
        if (registrationNameInput.value == '') {
            haveName = false;
        }
        if (haveName == true && haveSignature == true &&
             /[!@#$%^&*|/+=;:]/.test(registrationNameInput.value) == false) {
            $('.registration-window').fadeOut();
            person.name = registrationNameInput.value;
            localStorage.setItem('nickname', person.name);

            maskLeft.style.transform = 'translateX(0)';
            maskRight.style.transform = 'translateX(0)';
            setTimeout(() => {
                game();
            },1000);
        }
        if (haveName == false || /[!@#$%^&*|/+=;:]/.test(registrationNameInput.value) == true) {
            $('.registration-form-name-box').toggleClass('jerking-animation-class');
            $('.name-requirements-box span').toggleClass('name-box-validation');
            if (window.innerWidth <= 500) {
                document.querySelector('.reg-inp__validation-window').style.transform = 'translate(-50%)';
            }
        }
        if (haveSignature == false) {
            $('.registration-form-footer-signatuer-box').toggleClass('jerking-animation-class');
        }
    })
});	

document.querySelector('.name-requirements-box span').onclick = () => {
    document.querySelector('.reg-inp__validation-window').style.transform = 'translate(-50%)';
}
document.getElementById('regInpValidCloseBtn').onclick = () => {
    document.querySelector('.reg-inp__validation-window').style.transform = 'translate(-50%, -100%)';
}


// game
const gameArea = document.querySelector('.game-area');
var personCardName = document.querySelector('#personCardName');
var personLevelText = document.querySelector('#personLevelText');
const enemyContainArea = document.querySelector('.enemy-contain-area');
const enemySkillStyle = document.querySelector('.enemySkillStyle');

var personLevelUp = 0;
var personSave = false;
var enemyStartLevel = 0;
var enemyNumber = 9;

var person = {
    'name': 'none',
    'item': 'defaultItem1',
    'class': 'default',
    'level': 3
}
let updateDisplay = setInterval(() => {
    gameTimeText.innerHTML = time;
}, 1000);

if (localStorage.getItem('prestige') == null) {
    localStorage.setItem('prestige', 1);
}

function game() {
    menuSound.pause();
    battleSound.play();
    const prestigeSpan = document.getElementById('prestigeSpan');
    prestigeSpan.textContent = localStorage.getItem('prestige');
    if (localStorage.getItem('prestige') <= 2) {
        prestigeSpan.style.color = 'green';
    }
    else if (localStorage.getItem('prestige') >= 3 && localStorage.getItem('prestige') <= 4) {
        prestigeSpan.style.color = 'orange';
    }
    else if (localStorage.getItem('prestige') >= 5 && localStorage.getItem('prestige') <= 6) {
        prestigeSpan.style.color = 'purple';
    }
    else if (localStorage.getItem('prestige') >= 7 && localStorage.getItem('prestige') <= 8) {
        prestigeSpan.style.color = 'gold';
    }
    else if (localStorage.getItem('prestige') >= 9 && localStorage.getItem('prestige') <= 10) {
        prestigeSpan.style.color = 'red';
    }
    
    updateDisplay;

    timer();

    //levels

    //default levels
    if (localStorage.getItem('gameLevel') == 2) {
        enemyStartLevel += 1.25
    }
    else if (localStorage.getItem('gameLevel') == 3) {
        enemyStartLevel += 1.50
    }
    else if (localStorage.getItem('gameLevel') == 4) {
        enemyStartLevel += 1.75
    }

    //mainer levels
    else if (localStorage.getItem('gameLevel') == 5) {
        enemyStartLevel += 3
    }
    else if (localStorage.getItem('gameLevel') == 6) {
        enemyStartLevel += 3.50
    }
    else if (localStorage.getItem('gameLevel') == 7) {
        enemyStartLevel += 4.75
    }
    else if (localStorage.getItem('gameLevel') == 8) {
        enemyStartLevel += 5
    }

    //witch levels
    else if (localStorage.getItem('gameLevel') == 9) {
        enemyStartLevel += 9.25
    }
    else if (localStorage.getItem('gameLevel') == 10) {
        enemyStartLevel += 10
    }
    else if (localStorage.getItem('gameLevel') == 11) {
        enemyStartLevel += 14
    }
    else if (localStorage.getItem('gameLevel') == 12) {
        enemyStartLevel += 9.75
    }

    //vampir levels
    else if (localStorage.getItem('gameLevel') == 13) {
        enemyStartLevel += 28
    }
    else if (localStorage.getItem('gameLevel') == 14) {
        enemyStartLevel += 29
    }
    else if (localStorage.getItem('gameLevel') == 15) {
        enemyStartLevel += 34
    }
    else if (localStorage.getItem('gameLevel') == 16) {
        enemyStartLevel += 34
        vampirUpInfo.style.display = 'none';
    }


    //class effects
    if (person.class == 'default') {
        person.level = 3;
    }
    else if (person.class == 'mainer') {
        person.level = 5;
    }
    else if (person.class == 'witch') {
        person.level = 10;
    }
    else if (person.class == 'vampir') {
        person.level = 20;
        enemyStartLevel -= 10;
        if (localStorage.getItem('gameLevel') == 16) {
            person.level = 25;
        }
    }



    //item effects

    //default items
    var defaultItemWear = 3;

    if (person.item == 'defaultItem1') {
        personCardItemImg.src = defaultItemImg1.src
        personLevelUp = 0;
    }
    else if (person.item == 'defaultItem2') {
        personLevelUp = 0.25;
    }
    else if (person.item == 'defaultItem3') {
        person.level += 0.25;
        personLevelUp = 0.25
    }
    else if (person.item == 'defaultItem4') {
        personSave = true
        totemSound.src = '../media/sound/default/totem.mp3';
    }

    //mainer items
    else if (person.item == 'mainerItem1') {
        personLevelUp = 0;
    }
    else if (person.item == 'mainerItem2') {
        personLevelUp = 0.25;
    }
    else if (person.item == 'mainerItem3') {
        person.level += 1;
        personLevelUp = 0.50;
    }
    else if (person.item == 'mainerItem4') {
        personSave = true
        totemSound.src = '../media/sound/miner/totem.mp3';
    }

    //witch items
    else if (person.item == 'witchItem1') {
        personLevelUp = 0.75;
    }
    else if (person.item == 'witchItem2') {
        personLevelUp = 1;
    }
    else if (person.item == 'witchItem3') {
        person.level += 5;
        personLevelUp = 0.25
    }
    else if (person.item == 'witchItem4') {
        personSave = true
        totemSound.src = '../media/sound/witcher/totem.mp3';
    }

    //vampir items
    else if (person.item == 'vampirItem1') {
        personLevelUp = 0;
    }
    else if (person.item == 'vampirItem2') {
        personLevelUp = 1;
    }
    else if (person.item == 'vampirItem3') {
        person.level = 25;
        personLevelUp = 1.50
    }
    else if (person.item == 'vampirItem4') {
        personSave = true
        totemSound.src = '../media/sound/vampir/totem.mp3';
    }

    //game process
    
    gameArea.style.display = 'flex';

    personCardName.innerHTML = person.name
    personLevelText.innerHTML = person.level

    var buttons = [];

    for (let i = 1; i < 10; i++) {
        const enemyMan = {
            'lvl': 0,
            'pic': 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Enemy_logo.svg/1200px-Enemy_logo.svg.png',
            'destroyed': false,
            'boss': false,
            'antiVampir': false
        }

        let enemy = document.createElement('div');
        let enemyPic = document.createElement('img');
        let enemyLevelText = document.createElement('p');

        enemy.classList.toggle('enemy-card');
        buttons.push(enemy);
        enemy.appendChild(enemyPic);

        let enemyStats = document.createElement('div');
        enemyStats.style = `
        width: 90%;
        margin: 0 auto;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;`

        let enemySkill = document.createElement('div');
        enemySkill.classList.toggle('enemySkillStyle');

        let enemySkillImg = document.createElement('img');
        enemySkillImg.style = `
        width: 30px;
        height: 30px;
        border-radius: 50%;
        `
        enemySkill.appendChild(enemySkillImg);

        enemy.appendChild(enemyStats);
        enemyStats.appendChild(enemyLevelText);
        enemyStats.appendChild(enemySkill);

        switch (i) {
            case 1:
                //pictuers
                if (localStorage.getItem('gameLevel') <= 4) enemyMan.pic = `media/enemy/default/default-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 5 && localStorage.getItem('gameLevel') <= 8) enemyMan.pic = `media/enemy/mainer/mainer-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 9 && localStorage.getItem('gameLevel') <= 12) enemyMan.pic = `media/enemy/witcher/witcher-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 13) enemyMan.pic = `media/enemy/vampir/vampir-enemy${i}.jpg`
                
                if (localStorage.getItem('gameLevel') >= 5 && localStorage.getItem('gameLevel') <= 8) {
                    enemySkillImg.src = 'media/enemy/enemy-skill-stone.jpg';
                    enemySkill.style = `display: flex;`;
                }
                if (localStorage.getItem('gameLevel') == 9) {
                    enemyStartLevel -= 2.75;             
                }
                if (person.item == 'witchItem2') {
                    enemyStartLevel -= 1;
                }
                break;

            case 2:
                //pictuers
                if (localStorage.getItem('gameLevel') <= 4) enemyMan.pic = `media/enemy/default/default-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 5 && localStorage.getItem('gameLevel') <= 8) enemyMan.pic = `media/enemy/mainer/mainer-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 9 && localStorage.getItem('gameLevel') <= 12) enemyMan.pic = `media/enemy/witcher/witcher-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 13) enemyMan.pic = `media/enemy/vampir/vampir-enemy${i}.jpg`
                
                if (localStorage.getItem('gameLevel') >= 5 && localStorage.getItem('gameLevel') <= 8) {
                    enemySkillImg.src = 'media/enemy/enemy-skill-stone.jpg';
                    enemySkill.style = `display: flex;`       
                }
                if (localStorage.getItem('gameLevel') == 9) {
                    enemyStartLevel += 2.75;
                }
                if (localStorage.getItem('gameLevel') == 14) {
                    enemyStartLevel += 0.25;
                }
                if (localStorage.getItem('gameLevel') == 15) {
                    enemyStartLevel += 1.50;
                }
                break;
            
            case 3:
                //pictuers
                if (localStorage.getItem('gameLevel') <= 4) enemyMan.pic = `media/enemy/default/default-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 5 && localStorage.getItem('gameLevel') <= 8) enemyMan.pic = `media/enemy/mainer/mainer-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 9 && localStorage.getItem('gameLevel') <= 12) enemyMan.pic = `media/enemy/witcher/witcher-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 13) enemyMan.pic = `media/enemy/vampir/vampir-enemy${i}.jpg`

                if (localStorage.getItem('gameLevel') >= 5 && localStorage.getItem('gameLevel') <= 8) {
                    enemySkillImg.src = 'media/enemy/enemy-skill-stone.jpg';
                    enemySkill.style = `display: flex;`       
                }
                if (localStorage.getItem('gameLevel') == 15) {
                    enemyStartLevel -= 1.50;
                }
                break;

            case 4:
                //pictuers
                if (localStorage.getItem('gameLevel') <= 4) enemyMan.pic = `media/enemy/default/default-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 5 && localStorage.getItem('gameLevel') <= 8) enemyMan.pic = `media/enemy/mainer/mainer-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 9 && localStorage.getItem('gameLevel') <= 12) enemyMan.pic = `media/enemy/witcher/witcher-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 13) enemyMan.pic = `media/enemy/vampir/vampir-enemy${i}.jpg`

                if (localStorage.getItem('gameLevel') >= 5 && localStorage.getItem('gameLevel') <= 8) {
                    enemySkillImg.src = 'media/enemy/enemy-skill-stone.jpg';
                    enemySkill.style = `display: flex;`       
                }
                if (localStorage.getItem('gameLevel') == 16) {
                    enemySkillImg.src = 'media/enemy/enemy-skill-onion.jpg';
                    enemySkill.style = `display: flex;`
                }
                if (localStorage.getItem('gameLevel') == 16 && person.class == 'vampir') {
                    enemyStartLevel += 10;
                }
                break;

            case 5:
                //pictuers
                if (localStorage.getItem('gameLevel') <= 4) enemyMan.pic = `media/enemy/default/default-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 5 && localStorage.getItem('gameLevel') <= 8) enemyMan.pic = `media/enemy/mainer/mainer-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 9 && localStorage.getItem('gameLevel') <= 12) enemyMan.pic = `media/enemy/witcher/witcher-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 13) enemyMan.pic = `media/enemy/vampir/vampir-enemy${i}.jpg`

                if (localStorage.getItem('gameLevel') >= 5 && localStorage.getItem('gameLevel') <= 8) {
                    enemySkillImg.src = 'media/enemy/enemy-skill-stone.jpg';
                    enemySkill.style = `display: flex;`       
                }
                if (localStorage.getItem('gameLevel') == 16) {
                    enemySkillImg.src = 'media/enemy/enemy-skill-onion.jpg';
                    enemySkill.style = `display: flex;`
                }
                break;

            case 6:
                //pictuers
                if (localStorage.getItem('gameLevel') <= 4) enemyMan.pic = `media/enemy/default/default-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 5 && localStorage.getItem('gameLevel') <= 8) enemyMan.pic = `media/enemy/mainer/mainer-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 9 && localStorage.getItem('gameLevel') <= 12) enemyMan.pic = `media/enemy/witcher/witcher-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 13) enemyMan.pic = `media/enemy/vampir/vampir-enemy${i}.jpg`

                if (localStorage.getItem('gameLevel') >= 5 && localStorage.getItem('gameLevel') <= 8) {
                    enemySkillImg.src = 'media/enemy/enemy-skill-stone.jpg';
                    enemySkill.style = `display: flex;`       
                }
                if (localStorage.getItem('gameLevel') == 16) {
                    enemySkillImg.src = 'media/enemy/enemy-skill-onion.jpg';
                    enemySkill.style = `display: flex;`
                }
                break;

            case 7:
                //pictuers
                if (localStorage.getItem('gameLevel') <= 4) enemyMan.pic = `media/enemy/default/default-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 5 && localStorage.getItem('gameLevel') <= 8) enemyMan.pic = `media/enemy/mainer/mainer-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 9 && localStorage.getItem('gameLevel') <= 12) enemyMan.pic = `media/enemy/witcher/witcher-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 13) enemyMan.pic = `media/enemy/vampir/vampir-enemy${i}.jpg`               
            
                if (localStorage.getItem('gameLevel') >= 5 && localStorage.getItem('gameLevel') <= 8) {
                    enemySkillImg.src = 'media/enemy/enemy-skill-stone.jpg';
                    enemySkill.style = `display: flex;`       
                }
                if (localStorage.getItem('gameLevel') == 16) {
                    enemySkillImg.src = 'media/enemy/enemy-skill-onion.jpg';
                    enemySkill.style = `display: flex;`
                }
                break;

            case 8:
                //pictuers
                if (localStorage.getItem('gameLevel') <= 4) enemyMan.pic = `media/enemy/default/default-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 5 && localStorage.getItem('gameLevel') <= 8) enemyMan.pic = `media/enemy/mainer/mainer-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 9 && localStorage.getItem('gameLevel') <= 12) enemyMan.pic = `media/enemy/witcher/witcher-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 13) enemyMan.pic = `media/enemy/vampir/vampir-enemy${i}.jpg`

                if (localStorage.getItem('gameLevel') >= 5 && localStorage.getItem('gameLevel') <= 8) {
                    enemySkillImg.src = 'media/enemy/enemy-skill-stone.jpg';
                    enemySkill.style = `display: flex;`       
                }
                if (localStorage.getItem('gameLevel') == 16) {
                    enemySkillImg.src = 'media/enemy/enemy-skill-onion.jpg';
                    enemySkill.style = `display: flex;`
                }
                break;

            case 9:
                enemyMan.boss = true
                //pictuers
                if (localStorage.getItem('gameLevel') <= 4) enemyMan.pic = `media/enemy/default/default-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 5 && localStorage.getItem('gameLevel') <= 8) enemyMan.pic = `media/enemy/mainer/mainer-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 9 && localStorage.getItem('gameLevel') <= 12) enemyMan.pic = `media/enemy/witcher/witcher-enemy${i}.png`
                else if (localStorage.getItem('gameLevel') >= 13) enemyMan.pic = `media/enemy/vampir/vampir-enemy${i}.jpg`
                
                if (localStorage.getItem('gameLevel') >= 5 && localStorage.getItem('gameLevel') <= 8) {
                    enemySkillImg.src = 'media/enemy/enemy-skill-stone.jpg';
                    enemySkill.style = `display: flex;`       
                }
                if (localStorage.getItem('gameLevel') == 15) {
                    enemyStartLevel += 10
                    enemySkillImg.src = 'media/enemy/enemy-skill-onion.jpg';
                    enemySkill.style = `display: flex;`
                }
                if (localStorage.getItem('gameLevel') == 16) {
                    enemySkillImg.src = 'media/enemy/enemy-skill-onion.jpg';
                    enemySkill.style = `display: flex;`
                }
                break;
        
            default:
                break;
        }

        enemyStats.appendChild(enemySkill)

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
        `



        enemyLevelText.style = `
        font-size: 26px;
        `

        enemy.lvl = enemyStartLevel + i;
        enemyLevelText.innerHTML = enemy.lvl;




        //enemy hit
        enemy.onclick = function(value) {
            
            return function() {
                if (value <= person.level && enemyMan.destroyed == false) {

                    function getRandomInt(max) {
                        return Math.floor(Math.random() * max);
                    }

                    if (!enemyMan.boss) {
                        if (getRandomInt(2) == 0) {
                            hitSound1.play();
                        } else {
                            hitSound2.play();
                        }
                    } else {
                        lastHit.play();
                    }



                    enemyMan.destroyed = true;
                    enemyPic.src = 'media/png-transparent-christian-cross-symbol-truth-christianity-grave-miscellaneous-photography-cross-thumbnail.png';
                    person.level += (Number(value) / person.level) + personLevelUp;
                    personLevelText.innerHTML = person.level.toFixed(2);
                    document.getElementById('personLevelText').style.textShadow = '0 0 20px white';
                    setTimeout(() => {
                        document.getElementById('personLevelText').style.textShadow = 'none';
                    }, 500)
                    enemy.style = `cursor: not-allowed;`;
                    enemyNumber--;

                    if (localStorage.getItem('gameLevel') >= 5 && localStorage.getItem('gameLevel') <= 8 ) {
                        if (person.item == 'defaultItem1' || person.item == 'defaultItem2' || person.item == 'defaultItem3') {
                            defaultItemWear--;
                            if (defaultItemWear <= 0) {
                                personLevelUp = -1;
                                personCardItemImg.style = 'box-shadow: 0 0 15px red';
                            }
                        }
                    }

                    //win
                    if (enemyNumber == 0) {
                        battleSound.pause();
                        winSound.play();
                        win();
                    }
                }

                //lose
                else if (value > person.level) {
                    if (personSave == false) {
                        person.level = 0;
                        battleSound.pause();
                        loseSound.play();
                        lose();
                    }
                    //save totem
                    else if (personSave == true && person.item == 'witchItem4') {
                        totemSound.play();
                        person.level += 2;
                        personLevelText.innerHTML = person.level;
                        document.getElementById('personLevelText').style.textShadow = '0 0 20px white';
                        setTimeout(() => {
                            document.getElementById('personLevelText').style.textShadow = 'none';
                        }, 500)
                        personSave = false;
                        personCardItemImg.style = 'box-shadow: 0 0 15px red';
                    }
                    else if (personSave == true && person.item == 'vampirItem4') {
                        totemSound.play();
                        person.level += 10;
                        personLevelUp += 1
                        personLevelText.innerHTML = person.level;
                        document.getElementById('personLevelText').style.textShadow = '0 0 20px white';
                        setTimeout(() => {
                            document.getElementById('personLevelText').style.textShadow = 'none';
                        }, 500)
                        personSave = false;
                        personCardItemImg.style = 'box-shadow: 0 0 15px red';
                    }
                    else {
                        totemSound.play();
                        personSave = false;
                        personCardItemImg.style = 'box-shadow: 0 0 15px red';
                    }   
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
    
    setTimeout(() => {
        maskLeft.style.transform = 'translateX(-100%)';
        maskRight.style.transform = 'translateX(100%)';
    },1000)

}

// win
if (localStorage.getItem('gameLevel') == null) {
    localStorage.setItem('gameLevel', 1);
} 

function win() {  
    winTimeText.innerHTML = time;
    gameTimeText.innerHTML = time;
    clearInterval(updateDisplay);
    
    document.querySelector('.win-window').style.display = 'flex';   
    winMessageName.innerHTML = person.name;
    winPersonName.innerHTML = person.name;
    winPresonClass.src = personCardClassImg.src;
    winPresonItem.src = personCardItemImg.src;
    winGameProgressBar.value = localStorage.getItem('gameLevel');

    if (localStorage.getItem('gameLevel') < 1) {
        localStorage.gameLevel = 1;
        winContinueBtn.addEventListener('click', () => {
            location.reload();
        })
    }
    if (localStorage.getItem('gameLevel') == 15) {
        document.querySelector('.win-window').style.height = '510px';
        if (localStorage.language == 'eng') {
            document.querySelector('.win-message').insertAdjacentHTML('beforeend', `
            <p style="margin: 10px 0 20px" font-size: 22px;" id="vampirUpInfo">
                Now the vampire is ruled by bloodlust. Vampire level increased by +5
            </p>
        `)
        }
        else if (localStorage.language == 'rus') {
            document.querySelector('.win-message').insertAdjacentHTML('beforeend', `
            <p style="margin: 10px 0 20px; font-size: 22px;"  font-size: 22px;" id="vampirUpInfo">
                Теперь вампиром правит жажда крови. Уровень Вампира повышен на +5.
            </p>
        `)
        }

    }
    if (localStorage.getItem('gameLevel') >= 16) {
        localStorage.prestige++;
        localStorage.gameLevel = 0;
        winGameProgressBar.value = 16;
        if (localStorage.getItem('prestige') >= 10) {
            localStorage.prestige = 10;
        }
    }
    localStorage.gameLevel++;
    winContinueBtn.addEventListener('click', () => {
        buttonSound.play();
        setTimeout(() => {
            location.reload();
        },100)
    })
}

// lose
function lose() {
    clearInterval(updateDisplay);
    document.querySelector('.lose-window').style.display = 'flex';
    setTimeout(() => {document.querySelector('.lose-window').style.opacity = '1';});
    losePersonName.innerHTML = person.name;
    losePresonClass.src = personCardClassImg.src;
    losePresonItem.src = personCardItemImg.src;
    if (localStorage.getItem('gameLevel') == null) {
        loseGameProgressBar.value = 1;
    } else {
        loseGameProgressBar.value = localStorage.getItem('gameLevel');
    }


    loseContinueBtn.addEventListener('click', () => {
        buttonSound.play();
        setTimeout(() => {
            location.reload();
        },100)
    })  
}


//class & items select
var defaultItem = document.querySelectorAll('.defaultItem');
var mainerItem = document.querySelectorAll('.mainerItem');
var witchItem = document.querySelectorAll('.witchItem');
var vampirItem = document.querySelectorAll('.vampirItem');

//default
var defaultClassImg = document.getElementById('defaultClassImg');

var defaultItemImg1 = document.getElementById('defaultItemImg1');
var defaultItemImg2 = document.getElementById('defaultItemImg2');
var defaultItemImg3 = document.getElementById('defaultItemImg3');
var defaultItemImg4 = document.getElementById('defaultItemImg4');

//mainer
var mainerClassImg = document.getElementById('mainerClassImg');

var mainerItemImg1 = document.getElementById('mainerItemImg1');
var mainerItemImg2 = document.getElementById('mainerItemImg2');
var mainerItemImg3 = document.getElementById('mainerItemImg3');
var mainerItemImg4 = document.getElementById('mainerItemImg4');

//witch
var witchClassImg = document.getElementById('witchClassImg');

var witchItemImg1 = document.getElementById('witchItemImg1');
var witchItemImg2 = document.getElementById('witchItemImg2');
var witchItemImg3 = document.getElementById('witchItemImg3');
var witchItemImg4 = document.getElementById('witchItemImg4');

//vampir
var vampirClassImg = document.getElementById('vampirClassImg');

var vampirItemImg1 = document.getElementById('vampirItemImg1');
var vampirItemImg2 = document.getElementById('vampirItemImg2');
var vampirItemImg3 = document.getElementById('vampirItemImg3');
var vampirItemImg4 = document.getElementById('vampirItemImg4');

var ItemLockerImg2 = document.getElementById('ItemLockerImg2');
var ItemLockerImg3 = document.getElementById('ItemLockerImg3');
var ItemLockerImg4 = document.getElementById('ItemLockerImg4');


//remove item selector shadow
function removeSelectorShadow() {
    document.querySelectorAll('.items').forEach(ItemEl => {
        ItemEl.classList.remove('selectedShadow')
    })
}

//remove class selector shadow
function removeClassSelectorShadow() {
    document.querySelectorAll('.ClassElement').forEach(ClassEl => {
        ClassEl.classList.remove('selectedShadow')
    })
}

// class selector
const defaultCarousel = document.querySelector('.default-carousel');
const mainerCarousel = document.querySelector('.mainer-carousel');
const witcherCarousel = document.querySelector('.witcher-carousel');
const vampirCarousel = document.querySelector('.vampir-carousel');

var personCardClassImg = document.getElementById('personCardClassImg');

defaultClassImg.classList.toggle('selectedShadow')

localStorage.setItem('heroy', person.class);

defaultClassImg.onclick = () => {
    person.class = 'default';
    localStorage.setItem('heroy', person.class);
    personCardClassImg.src = defaultClassImg.src;

    //carousel
    defaultCarousel.style.display = 'flex';
    mainerCarousel.style.display = 'none';
    witcherCarousel.style.display = 'none';
    vampirCarousel.style.display = 'none';

    removeClassSelectorShadow();
    defaultClassImg.classList.toggle('selectedShadow')

    defaultItem.forEach(defaultItem => {
        defaultItem.style = 'display: block'
    })
    mainerItem.forEach(mainer => {
        mainer.style = 'display: none'
    })
    witchItem.forEach(witch => {
        witch.style = 'display: none'
    })
    vampirItem.forEach(vampir => {
        vampir.style = 'display: none'
    })

    if (localStorage.getItem('gameLevel') < 5) {
        ItemLockerImg2.style = 'display: block'
        defaultItemImg2.style = 'display: none'
    }
    else {
        ItemLockerImg2.style = 'display: none'
        defaultItemImg2.style = 'display: block'
    }
    if (localStorage.getItem('gameLevel') < 4) {
        ItemLockerImg3.style = 'display: block'
        defaultItemImg3.style = 'display: none'
    }
    else {
        ItemLockerImg3.style = 'display: none'
        defaultItemImg3.style = 'display: block'
    }
    if (localStorage.getItem('gameLevel') < 3) {
        ItemLockerImg4.style = 'display: block'
        defaultItemImg4.style = 'display: none'
    }
    else {
        ItemLockerImg4.style = 'display: none'
        defaultItemImg4.style = 'display: block'
    }
}

mainerClassImg.onclick = () => {
    person.class = 'mainer';
    localStorage.setItem('heroy', person.class);
    personCardClassImg.src = mainerClassImg.src;

        //carousel
        defaultCarousel.style.display = 'none';
        mainerCarousel.style.display = 'flex';
        witcherCarousel.style.display = 'none';
        vampirCarousel.style.display = 'none';

    removeClassSelectorShadow();
    mainerClassImg.classList.toggle('selectedShadow')

    defaultItem.forEach(defaultClass => {
        defaultClass.style = 'display: none'
    })
    mainerItem.forEach(mainer => {
        mainer.style = 'display: block'
    })
    witchItem.forEach(witch => {
        witch.style = 'display: none'
    })
    vampirItem.forEach(vampir => {
        vampir.style = 'display: none'
    })

        if (localStorage.getItem('gameLevel') < 6) {
            ItemLockerImg2.style = 'display: block'
            mainerItemImg2.style = 'display: none'
        }
        else {
            ItemLockerImg2.style = 'display: none'
            mainerItemImg2.style = 'display: block'
        }
        if (localStorage.getItem('gameLevel') < 7) {
            ItemLockerImg3.style = 'display: block'
            mainerItemImg3.style = 'display: none'
        }
        else {
            ItemLockerImg3.style = 'display: none'
            mainerItemImg3.style = 'display: block'
        }
        if (localStorage.getItem('gameLevel') < 8) {
            ItemLockerImg4.style = 'display: block'
            mainerItemImg4.style = 'display: none'
        }
        else {
            ItemLockerImg4.style = 'display: none'
            mainerItemImg4.style = 'display: block'
        }
}

witchClassImg.onclick = () => {
    person.class = 'witch';
    localStorage.setItem('heroy', person.class);
    personCardClassImg.src = witchClassImg.src;
    
        //carousel
        defaultCarousel.style.display = 'none';
        mainerCarousel.style.display = 'none';
        witcherCarousel.style.display = 'flex';
        vampirCarousel.style.display = 'none';

    removeClassSelectorShadow();
    witchClassImg.classList.toggle('selectedShadow')

    defaultItem.forEach(defaultClass => {
        defaultClass.style = 'display: none'
    })
    mainerItem.forEach(mainer => {
        mainer.style = 'display: none'
    })
    witchItem.forEach(witch => {
        witch.style = 'display: block'
    })
    vampirItem.forEach(vampir => {
        vampir.style = 'display: none'
    })

        if (localStorage.getItem('gameLevel') < 10) {
            ItemLockerImg2.style = 'display: block'
            witchItemImg2.style = 'display: none'
        }
        else {
            ItemLockerImg2.style = 'display: none'
            witchItemImg2.style = 'display: block'
        }
        if (localStorage.getItem('gameLevel') < 11) {
            ItemLockerImg3.style = 'display: block'
            witchItemImg3.style = 'display: none'
        }
        else {
            ItemLockerImg3.style = 'display: none'
            witchItemImg3.style = 'display: block'
        }
        if (localStorage.getItem('gameLevel') < 12) {
            ItemLockerImg4.style = 'display: block'
            witchItemImg4.style = 'display: none'
        }
        else {
            ItemLockerImg4.style = 'display: none'
            witchItemImg4.style = 'display: block'
        }
}

vampirClassImg.onclick = () => {
    person.class = 'vampir';
    localStorage.setItem('heroy', person.class);
    personCardClassImg.src = vampirClassImg.src;

    //carousel
    defaultCarousel.style.display = 'none';
    mainerCarousel.style.display = 'none';
    witcherCarousel.style.display = 'none';
    vampirCarousel.style.display = 'flex';

    removeClassSelectorShadow();
    vampirClassImg.classList.toggle('selectedShadow')

    defaultItem.forEach(defaultClass => {
        defaultClass.style = 'display: none'
    })
    mainerItem.forEach(mainer => {
        mainer.style = 'display: none'
    })
    witchItem.forEach(witch => {
        witch.style = 'display: none'
    })
    vampirItem.forEach(vampir => {
        vampir.style = 'display: block'
    })

        if (localStorage.getItem('gameLevel') < 14) {
            ItemLockerImg2.style = 'display: block'
            vampirItemImg2.style = 'display: none'
        }
        else {
            ItemLockerImg2.style = 'display: none'
            vampirItemImg2.style = 'display: block'
        }
        if (localStorage.getItem('gameLevel') < 15) {
            ItemLockerImg3.style = 'display: block'
            vampirItemImg3.style = 'display: none'
        }
        else {
            ItemLockerImg3.style = 'display: none'
            vampirItemImg3.style = 'display: block'
        }
        if (localStorage.getItem('gameLevel') < 16) {
            ItemLockerImg4.style = 'display: block'
            vampirItemImg4.style = 'display: none'
        }
        else {
            ItemLockerImg4.style = 'display: none'
            vampirItemImg4.style = 'display: block'
        }
}

if (person.class == 'default') {
    personCardClassImg.src = defaultClassImg.src
}

//item boxes

if (localStorage.getItem('gameLevel') >= 2) {
    ItemLockerImg2.style = 'display: none'
    defaultItemImg2.style = 'display: block'
}
if (localStorage.getItem('gameLevel') >= 3) {
    ItemLockerImg3.style = 'display: none'
    defaultItemImg3.style = 'display: block'
}
if (localStorage.getItem('gameLevel') >= 4) {
    ItemLockerImg4.style = 'display: none'
    defaultItemImg4.style = 'display: block'
}


//item selector
var personCardItemImg = document.getElementById('personCardItemImg')

//default
defaultItemImg1.classList.toggle('selectedShadow')

defaultItemImg1.onclick = () => {
    person.item = 'defaultItem1'
    removeSelectorShadow()
    defaultItemImg1.classList.toggle('selectedShadow')
    personCardItemImg.src = defaultItemImg1.src
}
defaultItemImg2.onclick = () => {
    person.item = 'defaultItem2'
    removeSelectorShadow()
    defaultItemImg2.classList.toggle('selectedShadow')
    personCardItemImg.src = defaultItemImg2.src
}
defaultItemImg3.onclick = () => {
    person.item = 'defaultItem3'
    removeSelectorShadow()
    defaultItemImg3.classList.toggle('selectedShadow')
    personCardItemImg.src = defaultItemImg3.src
}
defaultItemImg4.onclick = () => {
    person.item = 'defaultItem4'
    removeSelectorShadow()
    defaultItemImg4.classList.toggle('selectedShadow')
    personCardItemImg.src = defaultItemImg4.src
}

//miner
mainerItemImg1.onclick = () => {
    person.item = 'mainerItem1'
    removeSelectorShadow()
    mainerItemImg1.classList.toggle('selectedShadow')
    mainerItemImg1.src = mainerItemImg1.src
    personCardItemImg.src = mainerItemImg1.src
}
mainerItemImg2.onclick = () => {
    person.item = 'mainerItem2'
    removeSelectorShadow()
    mainerItemImg2.classList.toggle('selectedShadow')
    personCardItemImg.src = mainerItemImg2.src
}
mainerItemImg3.onclick = () => {
    person.item = 'mainerItem3'
    removeSelectorShadow()
    mainerItemImg3.classList.toggle('selectedShadow')
        personCardItemImg.src = mainerItemImg3.src
}
mainerItemImg4.onclick = () => {
    person.item = 'mainerItem4'
    removeSelectorShadow()
    mainerItemImg4.classList.toggle('selectedShadow')
    personCardItemImg.src = mainerItemImg4.src
}

//witch
witchItemImg1.onclick = () => {
    person.item = 'witchItem1'
    removeSelectorShadow()
    witchItemImg1.classList.toggle('selectedShadow')
    personCardItemImg.src = witchItemImg1.src
}
witchItemImg2.onclick = () => {
    person.item = 'witchItem2'
    removeSelectorShadow()
    witchItemImg2.classList.toggle('selectedShadow')
    personCardItemImg.src = witchItemImg2.src
}
witchItemImg3.onclick = () => {
    person.item = 'witchItem3'
    removeSelectorShadow()
    witchItemImg3.classList.toggle('selectedShadow')
    personCardItemImg.src = witchItemImg3.src

}
witchItemImg4.onclick = () => {
    person.item = 'witchItem4'
    removeSelectorShadow()
    witchItemImg4.classList.toggle('selectedShadow')
    personCardItemImg.src = witchItemImg4.src

}

//vampir
vampirItemImg1.onclick = () => {
    person.item = 'vampirItem1'
    removeSelectorShadow()
    vampirItemImg1.classList.toggle('selectedShadow')
    personCardItemImg.src = vampirItemImg1.src

}
vampirItemImg2.onclick = () => {
    person.item = 'vampirItem2'
    removeSelectorShadow()
    vampirItemImg2.classList.toggle('selectedShadow')
    personCardItemImg.src = vampirItemImg2.src
}
vampirItemImg3.onclick = () => {
    person.item = 'vampirItem3'
    removeSelectorShadow()
    vampirItemImg3.classList.toggle('selectedShadow')
    personCardItemImg.src = vampirItemImg3.src
}
vampirItemImg4.onclick = () => {
    person.item = 'vampirItem4'
    removeSelectorShadow()
    vampirItemImg4.classList.toggle('selectedShadow')
    personCardItemImg.src = vampirItemImg4.src
}



document.addEventListener('DOMContentLoaded', () => {
    //open a class img and sound play

    if (localStorage.getItem('gameLevel') >= 1) {
        hitSound1.src = '../media/sound/default/defaultHit1.mp3';
        hitSound2.src = '../media/sound/default/defaultHit2.mp3';
        lastHit.src = '../media/sound/default/defaultLastHit.mp3';
        menuSound.src = '../media/sound/default/defaultMenu.mp3';
        battleSound.src = '../media/sound/default/defaultBattle.mp3';

        menuSound.play();
    }

    if (localStorage.getItem('gameLevel') >= 5) {
        ClassLockerImg2.style = 'display: none';
        mainerClassImg.style = 'display: block';

        hitSound1.src = '../media/sound/miner/minerHit1.mp3';
        hitSound2.src = '../media/sound/miner/minerHit2.mp3';
        lastHit.src = '../media/sound/miner/minerLastHit.mp3';
        menuSound.src = '../media/sound/miner/mainerMenu.mp3';
        battleSound.src = '../media/sound/miner/mainerBattle.mp3';

        menuSound.play();
    }
    if (localStorage.getItem('gameLevel') >= 9) {
        ClassLockerImg3.style = 'display: none';
        witchClassImg.style = 'display: block';

        hitSound1.src = '../media/sound/witcher/witcherHit1.mp3';
        hitSound2.src = '../media/sound/witcher/witcherHit2.mp3';
        lastHit.src = '../media/sound/witcher/witcherLastHit.mp3';
        menuSound.src = '../media/sound/witcher/witcherMenu.mp3';
        battleSound.src = '../media/sound/witcher/witcherBattle.mp3';

        menuSound.play();
    }
    if (localStorage.getItem('gameLevel') >= 13
    ) {
        ClassLockerImg4.style = 'display: none';
        vampirClassImg.style = 'display: block';

        hitSound1.src = '../media/sound/default/defaultHit1.mp3';
        hitSound2.src = '../media/sound/default/defaultHit2.mp3';
        lastHit.src = '../media/sound/vampir/vampirLastHit.mp3';
        menuSound.src = '../media/sound/vampir/vampirMenu.mp3';
        battleSound.src = '../media/sound/vampir/vampirBattle.mp3';

        menuSound.play();
    }
})

// timer


function timer() {
    let minutes = 0;
    let seconds = 0;

    time = `${minutes}:${seconds}`

    setInterval(() => {
        for (let i = 0; i < 1; i++) {
            seconds++ 
            time = `${minutes}:${seconds}`
            if (seconds == 59) {
                seconds = -1;
                minutes++;
            }
        }
    }, 1000);

    winTimeText.innerHTML = time;
}
