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

document.querySelector('.info-popup__item').onclick = (e) => {
	let rargetItem = e.target.closest('.info-popup__item');
	rargetItem.classList.toggle('show-item-discraption');
	let arrow = rargetItem.querySelector('.info-arrow');
	console.log(arrow);
	arrow.classList.toggle('arrow-rotate');
}