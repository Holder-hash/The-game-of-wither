$(document).ready(function($) {
	$('#infoBtn').click(function() {
		$('.info-popup-fade').fadeIn();
		return false;
	});	
	
	$('.info-popup-close').click(function() {
		$(this).parents('.info-popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.info-popup-fade').fadeOut();
		}
	});
	
	$('.info-popup-fade').click(function(e) {
		if ($(e.target).closest('.info-popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});