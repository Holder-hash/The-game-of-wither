$(document).ready(function($) {
	$('#infoBtn').click(function() {
		$('.registration-window').css('z-index', '-1')
		$('.info-popup-fade').fadeIn();
		return false;
	});	
	
	$('.info-popup-close').click(function() {
		$(this).parents('.info-popup-fade').fadeOut();
		setTimeout(()=> $('.registration-window').css('z-index', '1'), 500);
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.info-popup-fade').fadeOut();
			setTimeout(()=> $('.registration-window').css('z-index', '1'), 500);
		}
	});
	
	$('.info-popup-fade').click(function(e) {
		if ($(e.target).closest('.info-popup').length == 0) {
			$(this).fadeOut();					
			setTimeout(()=> $('.registration-window').css('z-index', '1'), 500);
		}
	});
});