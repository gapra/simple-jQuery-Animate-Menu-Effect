/*
 * Salam \m/
 * author: Gapra - Galih Pranowo
 * gapraart@gmail.com
 * author url: http://www.gapraart.com
*/
$(document).ready(function(){
	$('#gitdownload').css({
		'opacity': '0.4',
		'margin-top': '-26px'});
	$('#gitdownload').hover(function(){
		$('#gitdownload').animate({opacity: 1, marginTop: 0}, 500);
	}, function(){
		$('#gitdownload').stop(true).animate({opacity: 0.4, marginTop: '-26px'}, 300);
	});
	$('#awesome-menu a').hover(function(){
		$('span.title-overlay').animate({top: 0},400);
	}, function(){
		$('span.title-overlay').stop(true).animate({top: '-30px'},300);
	});
	
	// menu class
	$('.menu').css({
		'width': '100%',
		'text-align': 'center',
		'margin-bottom': '20px',
		'overflow': 'hidden'
	});
	$('.menu ul').css('margin-top', '-120px');
	$('.menu li').css({
		'display': 'inline-block',
		'width': '100px',
		'height': '100px',
		'border-radius': '50%',
		'background': '#ddd'
	});
	$('.menu li a').css({
		'display': 'block',
		'padding-top': '40px',
		'color': '#fff',
		'width': '100px',
		'height': '60px',
		'border-radius': '50%'
	});
	
	//menu show effect
	$('#awesome-menu a.hidemenu').hide();
	$('#awesome-menu span.hide').hide();
	$('#awesome-menu a').click(function(){
		$('#awesome-menu a.showmenu').fadeOut(function(){
			$('#awesome-menu a.hidemenu').fadeIn(function(){
				$('#awesome-menu span.show').fadeOut();
				$('#awesome-menu span.hide').fadeIn();
			});
		});
		$('.menu ul').animate({marginTop: 0}, 500);
	});
	$('#awesome-menu a.hidemenu').click(function(){
		$('.menu ul').animate({marginTop: '-120px'}, 500);
		$('#awesome-menu a.hidemenu').fadeOut(function(){
			$('#awesome-menu a.showmenu').fadeIn(function(){
				$('#awesome-menu span.show').show();
				$('#awesome-menu span.hide').hide();
			});
		});
	});
});
