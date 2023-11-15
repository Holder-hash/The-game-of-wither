const terminalOpenBtn = document.getElementById('terminalOpenBtn');
const terminalCloseBtn = document.getElementById('terminalCloseBtn');
const terminalTextarea = document.getElementById('terminalTextarea');
const terminalWindow = document.querySelector('.terminal-window');

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

        if (commandValue.includes('set prestige')) {
            
        }

    }
}

function getLastValue(str) {
    let words = str.split(' ');
    return words.slice(-1);
}