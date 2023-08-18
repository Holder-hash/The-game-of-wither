$(document).ready(function($) {
    $('#registrationNameInput').focus(() => 
        $('.registration-form-name-box legend').css('transform', 'translate(0,0)')
    );
    $('#registrationNameInput').blur(() => 
        $('.registration-form-name-box legend').css('transform', 'translate(0,20px)')
    );
});	