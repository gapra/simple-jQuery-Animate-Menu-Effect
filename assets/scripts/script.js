/*
 * Salam \m/
 * author: Gapra - Galih Pranowo
 * gapraart@gmail.com
 * author url: http://www.gapraart.com
 */

$(document).ready(function() {
	$('#gitdownload').css({
		'opacity' : '0.4',
		'margin-top' : '-26px'
	});
	$('#gitdownload').hover(function() {
		$('#gitdownload').animate({
			opacity : 1,
			marginTop : 0
		}, 500);
	}, function() {
		$('#gitdownload').stop(true).animate({
			opacity : 0.4,
			marginTop : '-26px'
		}, 300);
	});
	$('#awesome-menu a').hover(function() {
		$('span.title-overlay').animate({
			top : 0
		}, 400);
	}, function() {
		$('span.title-overlay').stop(true).animate({
			top : '-30px'
		}, 300);
	});

	// menu class
	$('.menu').css({
		'width' : '100%',
		'text-align' : 'center',
		'margin-bottom' : '20px',
		'overflow' : 'hidden'
	});
	$('.menu ul').css({
		'display' : 'none',
		'height' : '100px',
		'width' : '440px',
		'margin' : '0 auto',
		'overflow' : 'hidden'
	});
	$('.menu li').css({
		'float' : 'left',
		'width' : '100px',
		'border-radius' : '50%',
		'margin' : '0px 5px'
	});

	//menu show effect
	$('#awesome-menu a.hidemenu').hide();
	$('#awesome-menu span.hide').hide();
	$('#awesome-menu a').click(function() {
		$('#awesome-menu a.showmenu').fadeOut(function() {
			$('#awesome-menu a.hidemenu').fadeIn(function() {
				$('#awesome-menu span.show').fadeOut();
				$('#awesome-menu span.hide').fadeIn();
			});
		});
		$('.menu ul').slideDown();
		$('.menu li a.whoami').animate({
			marginTop : '30px'
		}, 400, function() {
			$('.menu li a.myworks').animate({
				marginTop : '30px'
			}, 400, function() {
				$('.menu li a.blog').animate({
					marginTop : '30px'
				}, 400, function() {
					$('.menu li a.contact').animate({
						marginTop : '30px'
					}, 400);
				});
			});
		});
	});
	$('.menu li a').hover(function() {
		$(this).animate({
			marginTop : '0px'
		}, 40);
	}, function() {
		$(this).animate({
			marginTop : '30px'
		}, 100);
	});
	$('.menu li a.whoami').hover(function() {
		$(this).css({
			'background' : '#111111'
		});
	}, function() {
		$(this).css({
			'background' : '#229381'
		});
	});
	$('.menu li a.myworks').hover(function() {
		$(this).css({
			'background' : '#111111'
		});
	}, function() {
		$(this).css({
			'background' : '#ffaf75'
		});
	});
	$('.menu li a.blog').hover(function() {
		$(this).css({
			'background' : '#111111'
		});
	}, function() {
		$(this).css({
			'background' : '#005290'
		});
	});
	$('.menu li a.contact').hover(function() {
		$(this).css({
			'background' : '#111111'
		});
	}, function() {
		$(this).css({
			'background' : '#d3434d'
		});
	});
	$('#awesome-menu a.hidemenu').click(function() {
		$('.menu li a.whoami').animate({
			marginTop : '100px'
		}, 100, function() {
			$('.menu li a.myworks').animate({
				marginTop : '100px'
			}, 100, function() {
				$('.menu li a.blog').animate({
					marginTop : '100px'
				}, 100, function() {
					$('.menu li a.contact').animate({
						marginTop : '100px'
					}, 100, function() {
						$('.menu ul').slideUp();
						$('#awesome-menu a.hidemenu').fadeOut(function() {
							$('#awesome-menu a.showmenu').fadeIn(function() {
								$('#awesome-menu span.show').show();
								$('#awesome-menu span.hide').hide();
							});
						});
					});
				});
			});
		});
	});
});
