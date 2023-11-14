const terminalOpenBtn = document.getElementById('terminalOpenBtn');
const terminalCloseBtn = document.getElementById('terminalCloseBtn');
const terminalWindow = document.querySelector('.terminal-window');

terminalOpenBtn.onclick = () => {
    terminalWindow.style.bottom = '115px';
}
terminalCloseBtn.onclick = () => {
    terminalWindow.style.bottom = '-490px';
}