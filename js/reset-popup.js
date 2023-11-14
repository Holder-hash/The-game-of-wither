const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', () => {
    let confirmReset = prompt('are you sure you want to reset your progress?\nenter below "yes, reset progress"')
    if (confirmReset == 'yes, reset progress') {
        localStorage.gameLevel = 0;
        localStorage.prestige = 0;
        location.reload();
    }
})