const resetBtn = document.getElementById('resetBtn');
const resetWidnow = document.querySelector('.reset-widnow');
const resetInp = document.getElementById('resetInp');
const resetSendBtn = document.getElementById('resetSendBtn');

resetBtn.addEventListener('click', () => {
    resetWidnow.style.display = 'flex';
    setTimeout(() => {
        resetWidnow.classList.toggle('show-reset');
    },1)
    document.addEventListener('click', (e) => {
        if (!e.composedPath().includes(resetWidnow) && e.target != resetBtn) {
            resetWidnow.classList.remove('show-reset');
            setTimeout(() => {
                resetWidnow.style.display = 'none';
            },300)  
        }
    })
})

resetSendBtn.onclick = () => {
    let resetValueRegister = resetInp.value.toLowerCase();
    if (resetValueRegister == 'yes, reset my progress' || resetValueRegister == 'да, сбросить мой прогресс') {
        localStorage.gameLevel = 1;
        localStorage.prestige = 1;
        location.reload();
    }
}