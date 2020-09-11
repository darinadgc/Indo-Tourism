$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, nav,  .wrapper').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('#btn').click(function(event) {
		$('.places,.sites').toggleClass('active');
		
	});
});

//$(function () {
	
//     $('.main-menu li').click(function (){
//         $(this).toggleClass('active');
//     });
	
// 	$(window).scroll(function() {
// 	    $('.works-wrap__item').each(function(){
// 	        var imagePos = $(this).offset().top;

// 	        var topOfWindow = $(window).scrollTop();
// 	        if (imagePos < topOfWindow+650) {
// 	            $(this).addClass("flipInX");
// 	        }
// 	    });
// 	});
	
// 	$(window).scroll(function() {
// 	    $('.animated').each(function(){
// 	        var imagePos = $(this).offset().top;

// 	        var topOfWindow = $(window).scrollTop();
// 	        if (imagePos < topOfWindow+650) {
// 	            $(this).css("opacity", "1");
// 	        }
// 	    });
// 	});
// })