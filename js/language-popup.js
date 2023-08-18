$(document).ready(function($) {
	$('#languageBtn').click(function() {
		$('.language-popup-fade').fadeIn();
		return false;
	});	
	
	$('.language-popup-fade').click(function(e) {
		if ($(e.target).closest('.language-popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});