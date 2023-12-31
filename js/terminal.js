const terminalOpenBtn = document.getElementById('terminalOpenBtn');
const terminalCloseBtn = document.getElementById('terminalCloseBtn');
const terminalTextarea = document.getElementById('terminalTextarea');
const terminalWindow = document.querySelector('.terminal-window');
const terminalStatus = document.querySelector('.terminal__status');
const terminalStatusSpan = document.querySelector('.terminal__status span');

terminalOpenBtn.onclick = () => {
    terminalWindow.classList.toggle('terminal-open');
}
terminalCloseBtn.onclick = () => {
    terminalWindow.classList.toggle('terminal-open');
}

if (localStorage.getItem('autoReload') == null) {
    localStorage.setItem('autoReload', true);
}

terminalTextarea.onkeydown= (e) => {
    if (e.keyCode === 13) {
        const commandValue = terminalTextarea.value;
        e.preventDefault();

        if (commandValue.includes('set prestige') && Number(getLastValue(commandValue))) {
            localStorage.prestige = getLastValue(commandValue);
            terminalStatus.style.color = 'green';
            terminalStatusSpan.textContent = 'success!'
            terminalStatus.style.transition = 'color 0s';
            prestigeSpan.textContent = localStorage.getItem('prestige');
            if (localStorage.autoReload == 'true') {
                location.reload();
            }
            setTimeout(() => {
                terminalStatus.style.color = 'rgb(194, 194, 194)';
                terminalStatus.style.transition = 'color .3s';
            }, 3000)
        }
        else if (commandValue.includes('set gameLevel') && Number(getLastValue(commandValue))) {
            localStorage.gameLevel = getLastValue(commandValue);
            terminalStatus.style.color = 'green';
            terminalStatusSpan.textContent = 'success!'
            terminalStatus.style.transition = 'color 0s';
            if (localStorage.autoReload == 'true') {
                location.reload();
            }
            setTimeout(() => {
                terminalStatus.style.color = 'rgb(194, 194, 194)';
                terminalStatus.style.transition = 'color .3s';
            }, 3000)
        }
        else if (commandValue === 'location reload') {
            terminalStatus.style.color = 'green';
            terminalStatusSpan.textContent = 'success!'
            terminalStatus.style.transition = 'color 0s';
            location.reload();
            setTimeout(() => {
                terminalStatus.style.color = 'rgb(194, 194, 194)';
                terminalStatus.style.transition = 'color .3s';
            }, 3000)
        }
        else if (commandValue.includes('auto reload') && getLastValue(commandValue) == 'off') {
            terminalStatus.style.color = 'green';
            terminalStatusSpan.textContent = 'success!'
            terminalStatus.style.transition = 'color 0s';
            localStorage.setItem('autoReload', false);
            setTimeout(() => {
                terminalStatus.style.color = 'rgb(194, 194, 194)';
                terminalStatus.style.transition = 'color .3s';
            }, 3000)
        }
        else if (commandValue.includes('auto reload') && getLastValue(commandValue) == 'on') {
            terminalStatus.style.color = 'green';
            terminalStatusSpan.textContent = 'success!'
            terminalStatus.style.transition = 'color 0s';
            localStorage.setItem('autoReload', true);
            setTimeout(() => {
                terminalStatus.style.color = 'rgb(194, 194, 194)';
                terminalStatus.style.transition = 'color .3s';
            }, 3000)
        }
        else {
            terminalStatus.style.color = 'red';
            terminalStatusSpan.textContent = 'error!'
        }

    }
}

function getLastValue(str) {
    let words = str.split(' ');
    return words.slice(-1);
}