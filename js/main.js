$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, nav,  .wrapper').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('#btn').click(function(event) {
		$('.places,.sites').toggleClass('active');
		
	});
});


