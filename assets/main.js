jQuery(document).ready(function($) {
	
	resizeElements();
	
	$(window).bind('load', function() {
		
	});
	
	$(window).bind('resize load', function() {
		resizeElements();
	});
	
	$('#siteIntro').flexslider({
		animation: "fade",
		controlNav: false,
		directionNav: false,
		animationLoop: true,
		pauseOnAction: false,
		pauseOnHover: false,
		useCSS: true,
		slideshow: true,
		slideshowSpeed: 5000,
		animationSpeed: 1000
	});
	
	$(document).on('click', '.nextSection', function(e) {
		
		e.preventDefault();
		var scrollTarget = $(this).parents('section').next('section');
		
		$('html,body').animate({
			scrollTop: $( scrollTarget).offset().top
		}, 1000);
	
	});
  
});

jQuery.fn.exists = function(){return this.length>0;}

if (Modernizr.input.placeholder) {
  $('html').addClass('placeholder-support');
} else {
  // no placeholder support :(
  // fall back to a scripted solution
}

function resizeElements() {
	
	$('.full_screen_xs').each(function() {
			
		var browserHeight = $(window).height();
			
		$(this).css({
			'height': browserHeight
		});
		
	});
	
	$('.full_screen_sm').each(function() {
			
		var browserWidth = $(window).width();
		var browserHeight = $(window).height();
		
		if (browserWidth >= 768) {
			
			$(this).css({
				'height': browserHeight
			});
		
		} else {
			
			$(this).css({
				'height': 'auto'
			});

		}
		
	});
	
	$('.full_screen_md').each(function() {
			
		var browserWidth = $(window).width();
		var browserHeight = $(window).height();
		
		if (browserWidth >= 992) {
			
			$(this).css({
				'height': browserHeight
			});
		
		} else {
			
			$(this).css({
				'height': 'auto'
			});

		}
		
	});
	
	$('.mid_vertical').each(function() {
			
		var parentHeight = $(this).parent().height(),
		contentHeight = $(this).innerHeight(),
		offsetHeight = (parentHeight - contentHeight) / 2;
		
		if (	contentHeight >= parentHeight) {
			$(this).css({
				'margin-top': 0
			});
		} else {
			$(this).css({
				'margin-top': offsetHeight
			});
		}
		
	});
	
	var homeVideoHeight = $('#milkmanHomepage video').height(),
	homeVideoWidth = $('#milkmanHomepage video').width();
	
	$('#milkmanHomepage video').css({
		'margin-top':	-(homeVideoHeight/2),
		'margin-left':	-(homeVideoWidth/2)
	});
}