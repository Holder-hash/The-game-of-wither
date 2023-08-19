$(document).ready(function($) {
    $('#registrationNameInput').focus(() => 
        $('.registration-form-name-box legend').css('transform', 'translate(0,0)')
    );
    $('#registrationNameInput').blur(function() {
        if (!$('#registrationNameInput').val()) {
            $('.registration-form-name-box legend').css('transform', 'translate(0,20px)')
        }    
    })
});	

//signature canvas

var canvas = document.getElementById('signatureCanvas');
var ctx = canvas.getContext('2d');

canvas.width  = 200;
canvas.height = 50;

var mouseDown = false;

canvas.addEventListener('mousedown', () => {
    mouseDown = true;
});

canvas.addEventListener('mouseup', () => {
    mouseDown = false;
    ctx.beginPath();
});

ctx.lineWidth = 3;
canvas.addEventListener('mousemove', (e) => {
    if (mouseDown) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    }
});