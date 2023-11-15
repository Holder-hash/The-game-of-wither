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

terminalTextarea.onkeydown= (e) => {
    if (e.keyCode === 13) {
        const commandValue = terminalTextarea.value;
        e.preventDefault();

        if (commandValue.includes('set prestige') && Number(getLastValue(commandValue))) {
            localStorage.prestige = getLastValue(commandValue);
            terminalStatus.style.color = 'green';
            terminalStatusSpan.textContent = 'success!'
            terminalStatus.style.transition = 'color 0s';
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
            location.reload();
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